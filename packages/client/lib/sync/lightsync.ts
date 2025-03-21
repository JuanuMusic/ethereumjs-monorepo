import { Hardfork } from '@ethereumjs/common'
import { BN } from 'ethereumjs-util'
import { Peer } from '../net/peer/peer'
import { short } from '../util'
import { Synchronizer, SynchronizerOptions } from './sync'
import { HeaderFetcher } from './fetcher'
import { Event } from '../types'
import type { BlockHeader } from '@ethereumjs/block'

/**
 * Implements an ethereum light sync synchronizer
 * @memberof module:sync
 */
export class LightSynchronizer extends Synchronizer {
  constructor(options: SynchronizerOptions) {
    super(options)

    this.config.events.on(Event.SYNC_FETCHER_FETCHED, (headers) => {
      headers = headers as BlockHeader[]
      if (headers.length === 0) {
        this.config.logger.warn('No headers fetched are applicable for import')
        return
      }
      const first = headers[0].number
      const hash = short(headers[0].hash())
      const baseFeeAdd = this.config.chainCommon.gteHardfork(Hardfork.London)
        ? `baseFee=${headers[0].baseFeePerGas} `
        : ''
      this.config.logger.info(
        `Imported headers count=${headers.length} number=${first} hash=${hash} ${baseFeeAdd}peers=${this.pool.size}`
      )
    })
  }

  /**
   * Returns synchronizer type
   */
  get type() {
    return 'light'
  }

  /**
   * Open synchronizer. Must be called before sync() is called
   */
  async open(): Promise<void> {
    await super.open()
    await this.chain.open()
    await this.pool.open()
    const { height: number, td } = this.chain.headers
    const hash = this.chain.blocks.latest!.hash()
    this.startingBlock = number
    this.config.logger.info(`Latest local header: number=${number} td=${td} hash=${short(hash)}`)
  }

  /**
   * Returns true if peer can be used for syncing
   */
  syncable(peer: Peer): boolean {
    return peer.les?.status.serveHeaders ?? false
  }

  /**
   * Finds the best peer to sync with.
   * We will synchronize to this peer's blockchain.
   * @returns undefined if no valid peer is found
   */
  best(): Peer | undefined {
    let best
    const peers = this.pool.peers.filter(this.syncable.bind(this))
    if (peers.length < this.config.minPeers && !this.forceSync) return
    for (const peer of peers) {
      if (peer.les) {
        const td = peer.les.status.headTd
        if (
          (!best && td.gte(this.chain.headers.td)) ||
          (best && best.les && best.les.status.headTd.lt(td))
        ) {
          best = peer
        }
      }
    }
    return best
  }

  /**
   * Get latest header of peer
   */
  async latest(peer: Peer) {
    const result = await peer.les?.getBlockHeaders({
      block: peer.les!.status.headHash,
      max: 1,
    })
    return result?.headers[0]
  }

  /**
   * Sync all headers and state from peer starting from current height.
   * @param peer remote peer to sync with
   * @return Resolves when sync completed
   */
  async syncWithPeer(peer?: Peer): Promise<HeaderFetcher | null> {
    let latest
    if (peer && (latest = await this.latest(peer))) {
      const height = peer.les!.status.headNum
      if (!this.config.syncTargetHeight || this.config.syncTargetHeight.lt(height)) {
        this.config.syncTargetHeight = height
        this.config.logger.info(`New sync target height=${height} hash=${short(latest.hash())}`)
      }

      // Start fetcher from a safe distance behind because if the previous fetcher exited
      // due to a reorg, it would make sense to step back and refetch.
      const first = BN.max(
        this.chain.headers.height.addn(1).subn(this.config.safeReorgDistance),
        new BN(1)
      )
      const count = height.sub(first).addn(1)
      if (count.gtn(0)) {
        if (!this.fetcher || this.fetcher.errored) {
          return new HeaderFetcher({
            config: this.config,
            pool: this.pool,
            chain: this.chain,
            flow: this.flow,
            interval: this.interval,
            first,
            count,
            destroyWhenDone: false,
          })
        } else {
          const fetcherHeight = this.fetcher.first.add(this.fetcher.count).subn(1)
          if (height.gt(fetcherHeight)) this.fetcher.count.iadd(height.sub(fetcherHeight))
          this.config.logger.info(`peer=${peer} updated fetcher target to height=${height}`)
        }
      }
    }
    return null
  }
}
