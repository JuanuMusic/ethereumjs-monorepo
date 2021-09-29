window.BENCHMARK_DATA = {
  "lastUpdate": 1632953531203,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46797fec716a9749d3e96b619a1bcb33a00400e9",
          "message": "Block, Tx: Caching for hash method (#1445)\n\n* block: caching for hash method\r\n\r\n* tx: caching for hash method\r\n\r\n* block, tx: updates to caching for hash method\r\n\r\n* block, tx: updates to caching for hash method\r\n\r\n* block: refactor caching mechanism in block header\r\n\r\n* block: lint fixes\r\n\r\n* block: hash caching refactor\r\n\r\n* tx: hash caching refactor\r\n\r\n* tx: test for hash throwing on unsigned tx\r\n\r\n* tx: updated tests for hash caching\r\n\r\n* tx: revert throwing when hash() is called on unsigned legacy txs due to eventual compatibility issues, added longer explanatory comment\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-08T11:37:52+02:00",
          "tree_id": "254503a09f65b675e5879e624e62fff2845548b6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/46797fec716a9749d3e96b619a1bcb33a00400e9"
        },
        "date": 1631094149796,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16897,
            "range": "±10.71%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17763,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9959,
            "range": "±19.14%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13881,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15085,
            "range": "±3.62%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1289,
            "range": "±6.39%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 101,
            "range": "±111.14%",
            "unit": "ops/sec",
            "extra": "23 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 143,
            "range": "±7.41%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.54,
            "range": "±134.01%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4159a427c69088bc9e0494b32b997c9e4abc7e7",
          "message": "client: change event params to named tuples (#1457)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-08T12:17:01+02:00",
          "tree_id": "df2dfb7da7c462e2e7574da790e4f1b4075a143c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d4159a427c69088bc9e0494b32b997c9e4abc7e7"
        },
        "date": 1631096531092,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14836,
            "range": "±11.03%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16737,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10140,
            "range": "±13.59%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10560,
            "range": "±23.00%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14381,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1131,
            "range": "±7.15%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 110,
            "range": "±107.50%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 109,
            "range": "±26.30%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.53,
            "range": "±11.73%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b373df57a5965c52ce1c786b81b83accf349e04a",
          "message": "VM: Add test to ensure that IDENTITY precompile copies the memory (chain split from 2021-08) (#1436)\n\n* vm: tests: add evm exploit test\r\n\r\n* vm: update geth chain split test comment\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-09T11:04:19+02:00",
          "tree_id": "4ef7ec7347970fd5b751e751abfd25fe9eee0773",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b373df57a5965c52ce1c786b81b83accf349e04a"
        },
        "date": 1631178575066,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14128,
            "range": "±13.14%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15136,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11276,
            "range": "±15.56%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7953,
            "range": "±27.36%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14005,
            "range": "±3.38%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1060,
            "range": "±8.26%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 120,
            "range": "±96.84%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 99.88,
            "range": "±36.22%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.06,
            "range": "±118.76%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6af296ba24498c6ee2ad3b36698249785ce5685f",
          "message": "add .vscode/settings.json with eslint config (#1465)",
          "timestamp": "2021-09-09T14:59:20-07:00",
          "tree_id": "5f39aba026602d864c8c4af6b3c7e588939f2dc2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6af296ba24498c6ee2ad3b36698249785ce5685f"
        },
        "date": 1631225028674,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17156,
            "range": "±9.61%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17532,
            "range": "±2.82%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10079,
            "range": "±24.66%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14910,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15664,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1276,
            "range": "±6.82%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 104,
            "range": "±108.86%",
            "unit": "ops/sec",
            "extra": "26 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 143,
            "range": "±6.62%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.18,
            "range": "±125.12%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee1a44eb135e881e6bfa035d53357a496a59c30c",
          "message": "ci: fix hardhat e2e (#1467)\n\n* test adding @types/bn.js to resolutions\r\n\r\n* add method to break statemanager interface which should cause hardhat e2e build failure\r\n\r\n* Revert \"add method to break statemanager interface which should cause hardhat e2e build failure\"\r\n\r\nThis reverts commit b5b2960aaf623935316d15ff52c557540c79153d.\r\n\r\n* improve workaround notes",
          "timestamp": "2021-09-10T10:05:43+02:00",
          "tree_id": "11520a5cb17e0d1b6440eede54f088754c5e8b90",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ee1a44eb135e881e6bfa035d53357a496a59c30c"
        },
        "date": 1631261460405,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13566,
            "range": "±11.21%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14774,
            "range": "±2.25%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11325,
            "range": "±12.39%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8820,
            "range": "±20.96%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14605,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1151,
            "range": "±6.42%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 118,
            "range": "±106.83%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 131,
            "range": "±6.88%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.05,
            "range": "±125.46%",
            "unit": "ops/sec",
            "extra": "24 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69f5ec6c650a16e361168f196de5871a72c08c52",
          "message": "Util: More explicit EIP-1191 checksum usage discouraged note / Client: remove Rinkeby from CLI test matrix (#1463)\n\n* util: added more explicit note about providing a chainId to produce EIP-1191 compatible checksums with toChecksumAddress() being discouraged\r\n\r\n* client: removed Rinkeby from client CLI runs being to unreliable often leading to CI failures",
          "timestamp": "2021-09-10T11:26:53+02:00",
          "tree_id": "fc6d688e3f4d5e1c402a8bca7961d0174d0b2ccd",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/69f5ec6c650a16e361168f196de5871a72c08c52"
        },
        "date": 1631266355096,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10470,
            "range": "±14.10%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13218,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11818,
            "range": "±3.69%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6595,
            "range": "±21.63%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12750,
            "range": "±4.14%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 995,
            "range": "±7.66%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 157,
            "range": "±52.88%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 88.02,
            "range": "±47.57%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.86,
            "range": "±10.05%",
            "unit": "ops/sec",
            "extra": "29 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35fdced8e72a1c6b9b45c7397b4aea03ecfa686c",
          "message": "docs: add Windows installation note (#1470)",
          "timestamp": "2021-09-13T12:15:03-07:00",
          "tree_id": "8e9b924ee35904da0b0414e4024f9248d0f52fa8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/35fdced8e72a1c6b9b45c7397b4aea03ecfa686c"
        },
        "date": 1631561106815,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10630,
            "range": "±15.36%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12913,
            "range": "±2.87%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12160,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 5976,
            "range": "±22.10%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13229,
            "range": "±4.16%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 950,
            "range": "±7.91%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±73.55%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 93.49,
            "range": "±24.96%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 21.32,
            "range": "±9.08%",
            "unit": "ops/sec",
            "extra": "32 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d2f2b240ab8110ae0689beda5ddd1a86b1ae0a1",
          "message": "client -> FullSynchronizer: handle NEW_BLOCK message and rebroadcast to peers (#1458)\n\n* client: rebroadcast NEW_BLOCK message\r\n\r\n* add NewBlockHashes to knownblocks for each peer\r\n\r\n* lint\r\n\r\n* Requested changes\r\n\r\n* requested fixes\r\n\r\n* pass peer ID to new block handler\r\n\r\n* client: small review adjustments\r\n\r\n* client: fixed tests\r\n\r\n* Fix tests, move handleNewBlockHashes to fullsync\r\n\r\n* various fixes\r\n\r\n* fix error logging\r\n\r\n* lint\r\n\r\n* Fix no enqueueTask of undefined error on node startup\r\n\r\n* fix `NewBlockHashes` message bug\r\n\r\n* client: further align tx pool and new block handling code for easier portability/readability, new sendNewBlock method\r\n\r\n* client: simplify block hash tracking code for sending peer by using addToKnownByPeer() method\r\n\r\n* client: simplify NewBlock -> NewBlockHashes rebroadcasting logic by using addToKnowByPeer() function\r\n\r\n* client: update sync target height if block from NEW_BLOCK message is added to the chain to avoid sync inconsistencies\r\n\r\n* client -> FullSynchronizer: removed redundand (TypeScript) code doc type annotations\r\n\r\n* client -> FullSynchronizer: improved handleNewBlockHashes() bulk request logic readability\r\n\r\n* client -> FullSynchronizer: rather ignore NEW_BLOCK_HASHES method than side-starting a new fetcher in handleNewBlockHashes() when fetcher is not yet up and running\r\n\r\n* client -> FullSynchronizer: extract bulk task creation functionality as new enqueueByNumberList() function in BlockFetcherBase\r\n\r\n* client: improved FullSynchronizer NewBlock/NewBlockHashes test robustness and readability\r\n\r\n* client: added Fetcher.enqueueByNumberList() test cases to FullSynchronizer tests\r\n\r\n* client: added syncTargetHeight test case\r\n\r\n* client: added enqueueByNumberList() Fetcher tests\r\n\r\n* client -> FullSynchronizer: fixed addToKnownByPeer() not filtering existing hashes correctly, added missing putBlock() test case\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-14T15:22:13+02:00",
          "tree_id": "7cb14bdf3d922b538bd239db979ee21447b27efc",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5d2f2b240ab8110ae0689beda5ddd1a86b1ae0a1"
        },
        "date": 1631626060670,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14202,
            "range": "±10.46%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15345,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9795,
            "range": "±23.91%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12770,
            "range": "±15.50%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15528,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1308,
            "range": "±5.98%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 85.55,
            "range": "±143.21%",
            "unit": "ops/sec",
            "extra": "22 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 133,
            "range": "±15.20%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.49,
            "range": "±117.21%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee4481f7bd3ef2037cd6e56f3d3f1174bbb5e3b5",
          "message": "Monorepo: Update tape from v4 to v5 (#1447)\n\n* monorepo: update tape from v4 to v5\r\n\r\n* client: fixes for tape v5 upgrade\r\n\r\n* remove tape-catch (last publish 5 yrs ago) and use tape v5\r\n\r\n* small fixes\r\n\r\n* small fixes after merge from master\r\n\r\n* fix cli test\r\n\r\n* upgrade tape from v4 to v5 in rest of packages, update package-lock\r\n\r\n* fix block tests for tape v5\r\n\r\n* vm: fixed tests for tape v5\r\n\r\n* devp2p: fixed tests for tape v5\r\n\r\n* devp2p: lint fix\r\n\r\nCo-authored-by: Emerson Macro <emersonmacro@gmail.com>\r\nCo-authored-by: emersonmacro <77563348+emersonmacro@users.noreply.github.com>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-09-15T09:58:05+02:00",
          "tree_id": "8003b59d3e7a26e4bc918e8fd83ba11d8b395a6a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ee4481f7bd3ef2037cd6e56f3d3f1174bbb5e3b5"
        },
        "date": 1631693093905,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11170,
            "range": "±12.55%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12558,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11124,
            "range": "±4.07%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 5146,
            "range": "±24.64%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12647,
            "range": "±4.64%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1019,
            "range": "±8.10%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±75.62%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 98.4,
            "range": "±37.53%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 12.33,
            "range": "±104.89%",
            "unit": "ops/sec",
            "extra": "24 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "395aed6d074e140edb743082a5d70338a453fd04",
          "message": "client: Bug fix in logic for adding known blocks to peers (#1479)\n\n* client: Fix for adding known blocks to peers",
          "timestamp": "2021-09-16T19:38:49-07:00",
          "tree_id": "38d070edd05e3f792038bc192d8e12620b754e4b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/395aed6d074e140edb743082a5d70338a453fd04"
        },
        "date": 1631846875780,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13149,
            "range": "±10.27%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14818,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12264,
            "range": "±11.52%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8239,
            "range": "±20.40%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14420,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1177,
            "range": "±6.41%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 122,
            "range": "±107.12%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 126,
            "range": "±8.44%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.88,
            "range": "±121.79%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90fea3df7a07dd1b1af248a19e76ad56a5432b94",
          "message": "Common: allow setting and retrieving HF by total difficulty (#1473)\n\n* common: extended getHardforkByBlockNumber(), setHardforkByBlockNumber() to also take an optional TD as an input, added merge/POS specific custom chain test files, added tests\r\n\r\n* common: added hardforkTD() function, added additional tests for Merge-following HF block number set, pur POS chain tests\r\n\r\n* block: added hardforkByTD option, added tests\r\n\r\n* blockchain: integrate TD HF switching into blockchain (WIP), added tests\r\n\r\n* blockchain -> DBManager: use parent TD for getHeader() and getBlock() Header/Block instantiation hardforkByTD option\r\n\r\n* vm: added hardforkByTD option, added tests\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-09-17T08:00:37+02:00",
          "tree_id": "b9800d396706f1df4a848447dfc1a41b0459884c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/90fea3df7a07dd1b1af248a19e76ad56a5432b94"
        },
        "date": 1631858737768,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16520,
            "range": "±10.15%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16889,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9689,
            "range": "±18.72%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14503,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15612,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1256,
            "range": "±7.66%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 106,
            "range": "±105.70%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 144,
            "range": "±7.48%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.4,
            "range": "±120.54%",
            "unit": "ops/sec",
            "extra": "14 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "948c9b4949472893681dadfd1a4bd735206ee65a",
          "message": "VM: Update ethereum/tests to 10.0 (#1476)\n\n* ethereum-tests: update to 10.0\r\n\r\n* ethereum/tests: update berlin state test count",
          "timestamp": "2021-09-20T10:38:07+02:00",
          "tree_id": "33f9c19425ae207344e297d40bf0c4de0f6e484b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/948c9b4949472893681dadfd1a4bd735206ee65a"
        },
        "date": 1632127404549,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13111,
            "range": "±10.06%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15142,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13244,
            "range": "±2.64%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6680,
            "range": "±20.17%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14547,
            "range": "±3.46%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1161,
            "range": "±6.46%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 126,
            "range": "±99.21%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 120,
            "range": "±10.86%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.29,
            "range": "±77.14%",
            "unit": "ops/sec",
            "extra": "19 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14197de09ce83801237cd5b78fd36a51b1911ac7",
          "message": "util: return undefined or null from toType (#1477)\n\n* toType: return null or undefined\r\n\r\n* turn off no-redeclare for better @typescript-eslint/no-redeclare that allows for function overloads\r\n\r\n* run prettier on config/eslint.js\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-20T10:58:50+02:00",
          "tree_id": "0202b42700a3984c39f51cb03442b133db43e818",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/14197de09ce83801237cd5b78fd36a51b1911ac7"
        },
        "date": 1632128638654,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13750,
            "range": "±12.08%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14889,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11588,
            "range": "±15.87%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9160,
            "range": "±24.10%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14191,
            "range": "±3.19%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1201,
            "range": "±6.18%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 121,
            "range": "±106.35%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 140,
            "range": "±6.69%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 26.77,
            "range": "±12.81%",
            "unit": "ops/sec",
            "extra": "22 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ddc6c09cd0bbd71b1cf03d4dc65d2d660ab5c76",
          "message": "common: improve TS types for hardfork, chain and genesis parameters (#1480)\n\n* common: improve types\r\n\r\n* common: fix tests\r\n\r\n* blockchain: fix test\r\n\r\n* client: fix genesisParams\r\n\r\n* client: fix typo\r\n\r\n* common: fix linting\r\n\r\n* block: unclOpts type\r\n\r\n* block: fix test\r\n\r\n* vm: fix test\r\n\r\n* common: fix test\r\n\r\n* vm: fix types in test\r\n\r\n* client: fix stateManager toBuffer conversion\r\n\r\n* vm: fix type\r\n\r\n* monorepo: add tsc script where missing and exclude node_modules from tsc\r\n\r\n* common: re-add string in addition to ConsesnsusType and ConsensusAlgorithm\r\n\r\n* fix: types\r\n\r\n* common: fix linting\r\n\r\n* common: fix linting again\r\n\r\n* common: address review\r\n\r\n* common: fix linting typo\r\n\r\n* client: readded removed default bootstrap nodes\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-20T13:01:37+02:00",
          "tree_id": "8509b01fd8f22256f2b66d0068fc0de48c26336f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8ddc6c09cd0bbd71b1cf03d4dc65d2d660ab5c76"
        },
        "date": 1632136011839,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12254,
            "range": "±11.46%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14784,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12475,
            "range": "±11.73%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7654,
            "range": "±28.56%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13339,
            "range": "±3.46%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1171,
            "range": "±6.42%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 121,
            "range": "±107.09%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 120,
            "range": "±11.33%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.38,
            "range": "±130.10%",
            "unit": "ops/sec",
            "extra": "18 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7dd2f374d0dc9b52c3590676d1b985ec1e1585c9",
          "message": "client: add simple miner (#1444)",
          "timestamp": "2021-09-20T13:13:01-07:00",
          "tree_id": "d0116b7aaf38aaae2e21945e3778e226a42502fb",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7dd2f374d0dc9b52c3590676d1b985ec1e1585c9"
        },
        "date": 1632169077865,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16518,
            "range": "±11.55%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18477,
            "range": "±2.59%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9638,
            "range": "±24.29%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 16307,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17132,
            "range": "±2.82%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1245,
            "range": "±7.05%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 97.52,
            "range": "±124.95%",
            "unit": "ops/sec",
            "extra": "26 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 137,
            "range": "±7.03%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 7.78,
            "range": "±112.10%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e289a7825dd8d701204ecccfc90ad40111d58faf",
          "message": "monorepo: dedupe prepublish script (#1481)\n\n* add config prepublish script\r\n\r\n* remove greenkeeper.json (greenkeeper no longer being run since 2020-06-03)",
          "timestamp": "2021-09-21T09:31:30+02:00",
          "tree_id": "005a82716a498017d54fcd7e22cf803e3db3971c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e289a7825dd8d701204ecccfc90ad40111d58faf"
        },
        "date": 1632209833270,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11475,
            "range": "±13.27%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12695,
            "range": "±3.31%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12018,
            "range": "±3.77%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6559,
            "range": "±27.32%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13411,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1068,
            "range": "±7.37%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 136,
            "range": "±81.47%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 103,
            "range": "±31.83%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.07,
            "range": "±111.02%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f455b4be76dc4b75fc1261f1773ee9548a5c16c2",
          "message": "client: add miner integration test (#1483)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-21T09:54:57+02:00",
          "tree_id": "b3ac302d1d10d393514f717eb1d0954e7e7a6e8a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f455b4be76dc4b75fc1261f1773ee9548a5c16c2"
        },
        "date": 1632211216843,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11792,
            "range": "±11.52%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13669,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12904,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6700,
            "range": "±22.82%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13280,
            "range": "±3.74%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1104,
            "range": "±7.33%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±87.84%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 105,
            "range": "±31.50%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.74,
            "range": "±11.92%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcc895596435a694dcf0029b90757cf7861db6e1",
          "message": "devp2p: added hotfix to solve RLPx snappy uncompress issue for DISCONNECT msgs along handshake (#1484)",
          "timestamp": "2021-09-21T14:51:51+02:00",
          "tree_id": "7945bc675bd65243fe51c1d2d86db7414afd2941",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fcc895596435a694dcf0029b90757cf7861db6e1"
        },
        "date": 1632229050780,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11594,
            "range": "±11.10%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12933,
            "range": "±2.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12402,
            "range": "±3.31%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6559,
            "range": "±23.33%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13350,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1042,
            "range": "±7.59%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±85.02%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 92.31,
            "range": "±44.18%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23.72,
            "range": "±10.57%",
            "unit": "ops/sec",
            "extra": "28 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69266a231fb47351e114cf5ba43c0bb98bc42cac",
          "message": "client: Filter out forks with no block set in config (#1487)",
          "timestamp": "2021-09-21T16:41:08-07:00",
          "tree_id": "ad4a5a26f0853bb34ecc21094f3e9f059ab606ac",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/69266a231fb47351e114cf5ba43c0bb98bc42cac"
        },
        "date": 1632267943525,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17964,
            "range": "±12.21%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19804,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11289,
            "range": "±20.29%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 16755,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18512,
            "range": "±2.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1299,
            "range": "±6.41%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 75.1,
            "range": "±118.45%",
            "unit": "ops/sec",
            "extra": "21 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 142,
            "range": "±6.80%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 6.66,
            "range": "±121.08%",
            "unit": "ops/sec",
            "extra": "14 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72b9450df7fa8e9e1532536a093cf45f94918639",
          "message": "client: Fix gas calculations on EIP1559 forkblock in miner (#1489)",
          "timestamp": "2021-09-22T14:23:20-07:00",
          "tree_id": "4b285c77f78128d563b55ca9ce5df8612945f389",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/72b9450df7fa8e9e1532536a093cf45f94918639"
        },
        "date": 1632346145634,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10900,
            "range": "±14.56%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12239,
            "range": "±3.53%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11765,
            "range": "±3.73%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6473,
            "range": "±21.66%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12773,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1003,
            "range": "±7.74%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 132,
            "range": "±74.03%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 109,
            "range": "±10.31%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.36,
            "range": "±101.51%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b7b5be4e56d4726cdedbb114d8a6bdc0e0ed2c44",
          "message": "Client: README Overhaul (#1488)",
          "timestamp": "2021-09-22T20:52:51-07:00",
          "tree_id": "401468017173e032969a94df22d4b3c081388713",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b7b5be4e56d4726cdedbb114d8a6bdc0e0ed2c44"
        },
        "date": 1632371236512,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11442,
            "range": "±14.18%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12868,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12239,
            "range": "±3.83%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6832,
            "range": "±24.57%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12590,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1027,
            "range": "±8.21%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±83.36%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 87.24,
            "range": "±50.78%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.12,
            "range": "±110.33%",
            "unit": "ops/sec",
            "extra": "28 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d361b55a3ff60f6450c6971ee56a92e7836d5057",
          "message": "client: add miner london hf switch test (#1490)",
          "timestamp": "2021-09-23T11:04:41+02:00",
          "tree_id": "d5a22e3768ffffab0567a448192f76f1ccae39fe",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d361b55a3ff60f6450c6971ee56a92e7836d5057"
        },
        "date": 1632388214073,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11751,
            "range": "±12.75%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13575,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11943,
            "range": "±3.89%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6201,
            "range": "±31.91%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13762,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1076,
            "range": "±7.57%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 126,
            "range": "±84.28%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 108,
            "range": "±19.71%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.89,
            "range": "±111.10%",
            "unit": "ops/sec",
            "extra": "28 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8fecf712c5983b18c8b465ed9979888b2daa191",
          "message": "VM: Fix Blake2B with messages with a length >= 5 (#1486)\n\n* vm: blake2f: add test\r\n\r\n* vm: blake2f: fix Uint32 little-endian conversion\r\nvm: lint\r\n\r\n* vm: blake2f: cleanup fixed code\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-23T11:24:43+02:00",
          "tree_id": "0d3e24e378ca8b028940ea32e1ca72467188d198",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c8fecf712c5983b18c8b465ed9979888b2daa191"
        },
        "date": 1632389409217,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13332,
            "range": "±11.65%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14860,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12079,
            "range": "±9.36%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 5413,
            "range": "±33.31%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13780,
            "range": "±3.89%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1056,
            "range": "±8.27%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 146,
            "range": "±67.00%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 118,
            "range": "±8.51%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.17,
            "range": "±116.54%",
            "unit": "ops/sec",
            "extra": "28 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36d4a06a9590644b2cf20262b74bd53570cf20cd",
          "message": "Ethash: add CPU miner (#1475)\n\n* ethash: add cpu miner\r\n\r\n* ethash: add miner tests, expand miner features\r\n\r\n* ethash: address type check using instanceof\r\nethash: copy common when mining\r\nethash: add common copy test\r\n\r\n* ethash: add common as devDependency\r\n\r\n* ethash: moved @ethereumjs/block library to dependencies\r\n\r\n* ethash -> miner: do not expose class members as public\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-23T14:18:17+02:00",
          "tree_id": "ffb54b15304f5ebfc9a8706843b02dc0f854d4f8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/36d4a06a9590644b2cf20262b74bd53570cf20cd"
        },
        "date": 1632399804566,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15202,
            "range": "±12.32%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16937,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10872,
            "range": "±16.77%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11394,
            "range": "±29.26%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15991,
            "range": "±2.59%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1118,
            "range": "±6.76%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 109,
            "range": "±110.81%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 127,
            "range": "±8.45%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.48,
            "range": "±131.71%",
            "unit": "ops/sec",
            "extra": "23 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf95e04c6a2769865999a4262705a7adf6db416c",
          "message": "util, ethash, common, tx, block, blockchain, devp2p, vm: Client preparing Releases (#1491)\n\n* ethash -> miner: made solution property public\r\n\r\n* util: bumped version to v7.1.1, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* monorepo: updated package-lock.json\r\n\r\n* util -> release: rebuild documentation\r\n\r\n* common -> release: bumped version to v2.5.0, added CHANGELOG entry, updated README, updated upstream dependency versions\r\n\r\n* monorepo: updated package-lock.json, updated typedoc dev dependency from 0.21.5 to 0.22.4\r\n\r\n* common -> release: rebuild documentation\r\n\r\n* tx -> release: bumped version to v3.3.1, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* tx -> release: rebuild documentation\r\n\r\n* block -> release: bumped version to v3.5.0, added CHANGELOG entry, updated README, updated upstream dependency versions\r\n\r\n* ethash -> release: bumped version to v1.1.0, added CHANGELOG entry, updated README, updated upstream dependency versions\r\n\r\n* ethash -> release: build documentation, replaced manual API docs with auto-generated documentation\r\n\r\n* monorepo: updated package-lock.json\r\n\r\n* blockchain -> release: bumped version to v5.4.1, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* blockchain -> release: rebuild documentation\r\n\r\n* devp2p -> release: bumped version to v4.2.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* vm -> release: bumped version to v5.5.3, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* monorepo: updated package-lock.json\r\n\r\n* Apply suggestions from code review\r\n\r\n* add tiny fixes from #905\r\n\r\n* Update packages/util/CHANGELOG.md\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\n\r\n* from tiny fixes issue: add calcNextBaseFee() example to block README\r\n\r\n* fix typos (preceeding -> preceding, analogue -> analog for american english variant)\r\n\r\n* from tiny fixes: remove old reference to node-devp2p, update latest implementations to eth/66 and les/4\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-09-27T11:50:17+02:00",
          "tree_id": "c5a6289659d4503985bb7c6bd86d547e8add1543",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/cf95e04c6a2769865999a4262705a7adf6db416c"
        },
        "date": 1632736581988,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11002,
            "range": "±14.47%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13480,
            "range": "±2.86%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12308,
            "range": "±3.72%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7261,
            "range": "±20.50%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13358,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1092,
            "range": "±7.30%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 127,
            "range": "±83.04%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 120,
            "range": "±9.15%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.72,
            "range": "±110.86%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b86cc169686c30e052bc0b77442aacd91a96b2f",
          "message": "client: add dev param to start devnet with miner (#1492)\n\n* client: add dev param to start ephemeral devnet with miner\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-09-27T21:45:39-04:00",
          "tree_id": "f31a11439c1266bef287b6bfe7208b1a5f08de7e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5b86cc169686c30e052bc0b77442aacd91a96b2f"
        },
        "date": 1632793834488,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18175,
            "range": "±10.58%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19669,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11744,
            "range": "±17.01%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 16779,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17691,
            "range": "±3.61%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1256,
            "range": "±6.72%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 70.23,
            "range": "±153.51%",
            "unit": "ops/sec",
            "extra": "20 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 132,
            "range": "±8.76%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.42,
            "range": "±126.18%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02d93307386096a2be278df486e5636adfe2cb7a",
          "message": "client: readme updates for new dev param (#1496)",
          "timestamp": "2021-09-28T08:21:42-07:00",
          "tree_id": "7c75d25e53ae367dd601d2dbfbd5713e0c1018f1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/02d93307386096a2be278df486e5636adfe2cb7a"
        },
        "date": 1632847214551,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 9553,
            "range": "±14.51%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11413,
            "range": "±4.67%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10951,
            "range": "±4.83%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7118,
            "range": "±20.19%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9462,
            "range": "±28.06%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1031,
            "range": "±7.58%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 138,
            "range": "±70.81%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 110,
            "range": "±10.99%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.99,
            "range": "±99.40%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0477d64c259b354ff57bab7e77be43081216fea",
          "message": "Block, Blockchain: bugfix releases (client preparation) fixing London HF at block 0 or 1 handling (#1495)",
          "timestamp": "2021-09-28T10:36:54-07:00",
          "tree_id": "a2dbe5dfd627bc2d25934d4619a3e747fc0a6969",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b0477d64c259b354ff57bab7e77be43081216fea"
        },
        "date": 1632850950301,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11257,
            "range": "±13.36%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13204,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12088,
            "range": "±3.79%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6749,
            "range": "±24.52%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13043,
            "range": "±4.32%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1052,
            "range": "±7.56%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±84.90%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 95.25,
            "range": "±41.57%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.24,
            "range": "±10.87%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "346dde294bb23d6acd6b4df3e6d7a26fb46555cb",
          "message": "Client: first stable release v0.1.0 🎉 (#1499)\n\n* client -> release: bumped version to v0.1.0, added CHANGELOG entry\r\n\r\n* client -> release: updated README\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\n\r\n* delete removed readme section\r\n\r\n* run prettier\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>",
          "timestamp": "2021-09-29T23:19:17+02:00",
          "tree_id": "e9e124e7f20afde58790aa5dd90a664f88fdb1cf",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/346dde294bb23d6acd6b4df3e6d7a26fb46555cb"
        },
        "date": 1632950651558,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16360,
            "range": "±12.79%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18046,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10065,
            "range": "±20.40%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15217,
            "range": "±2.27%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17127,
            "range": "±2.62%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1263,
            "range": "±7.16%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 73.49,
            "range": "±149.43%",
            "unit": "ops/sec",
            "extra": "21 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 119,
            "range": "±10.49%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.57,
            "range": "±126.92%",
            "unit": "ops/sec",
            "extra": "20 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "531e4b3a1843833b3015ab185fc610f4f2da5d67",
          "message": "Tx/Util: ensure only integers are allowed as input (#1500)\n\n* util: verify intToBuffer/intToHex inputs are integers\r\ntx: add checks to verify decimal values cannot be used\r\n\r\n* util/tx: check max safe integer, add string tests\r\n\r\n* util: simplify intToHex\r\n\r\n* tx: add test cases\r\n\r\n* tx/util: add test cases\r\n\r\n* tx: 1 more test failing input test case\r\n\r\n* tx: remove console.log\r\n\r\n* Update packages/util/test/bytes.spec.ts\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\n\r\n* Update packages/util/test/bytes.spec.ts\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-30T00:06:39+02:00",
          "tree_id": "e2ce055bf1b6a2c53a38ada77f0198fed1dcea3d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/531e4b3a1843833b3015ab185fc610f4f2da5d67"
        },
        "date": 1632953530074,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11425,
            "range": "±12.26%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12842,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12378,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7242,
            "range": "±26.38%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13399,
            "range": "±3.75%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1119,
            "range": "±6.72%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 130,
            "range": "±86.80%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 120,
            "range": "±16.34%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.81,
            "range": "±120.04%",
            "unit": "ops/sec",
            "extra": "23 samples"
          }
        ]
      }
    ]
  }
}