window.BENCHMARK_DATA = {
  "lastUpdate": 1633622279629,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
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
        "date": 1631858787160,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1818,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1724,
            "range": "±6.30%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1772,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1769,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1708,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1641,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1287,
            "range": "±13.77%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1607,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1577,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1592,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "90 samples"
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
        "date": 1632127433252,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1615,
            "range": "±2.73%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1581,
            "range": "±6.67%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1641,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1641,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1608,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1606,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1556,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1236,
            "range": "±14.53%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1606,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1584,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "84 samples"
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
        "date": 1632128649424,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1873,
            "range": "±4.44%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1922,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1913,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1799,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1601,
            "range": "±9.80%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1873,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1846,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1852,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1782,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1341,
            "range": "±13.80%",
            "unit": "ops/sec",
            "extra": "65 samples"
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
        "date": 1632136004702,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1893,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1844,
            "range": "±5.44%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1881,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1882,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1609,
            "range": "±11.32%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1857,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1818,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1801,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1780,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1089,
            "range": "±18.72%",
            "unit": "ops/sec",
            "extra": "56 samples"
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
        "date": 1632169092624,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18132,
            "range": "±6.18%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18455,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18653,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14713,
            "range": "±12.01%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422909",
            "value": 17488,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18013,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422911",
            "value": 17202,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15320,
            "range": "±5.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422913",
            "value": 6935,
            "range": "±18.38%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Block 9422914",
            "value": 15367,
            "range": "±4.52%",
            "unit": "ops/sec",
            "extra": "69 samples"
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
        "date": 1632209799386,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18391,
            "range": "±5.45%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19395,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18991,
            "range": "±2.38%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14693,
            "range": "±11.23%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422909",
            "value": 17709,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18245,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18010,
            "range": "±3.67%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15171,
            "range": "±13.74%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422913",
            "value": 10215,
            "range": "±16.75%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Block 9422914",
            "value": 16352,
            "range": "±4.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
        "date": 1632211238569,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19720,
            "range": "±6.15%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20412,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20071,
            "range": "±3.39%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14830,
            "range": "±12.82%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19377,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19274,
            "range": "±3.87%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18377,
            "range": "±4.20%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422912",
            "value": 11241,
            "range": "±16.23%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Block 9422913",
            "value": 12242,
            "range": "±21.70%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17423,
            "range": "±4.58%",
            "unit": "ops/sec",
            "extra": "62 samples"
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
        "date": 1632229040172,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21036,
            "range": "±6.21%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22364,
            "range": "±2.40%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17297,
            "range": "±12.91%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21314,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 21289,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20141,
            "range": "±4.84%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422911",
            "value": 12719,
            "range": "±16.19%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Block 9422912",
            "value": 13480,
            "range": "±15.14%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422913",
            "value": 18977,
            "range": "±3.98%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13303,
            "range": "±12.01%",
            "unit": "ops/sec",
            "extra": "45 samples"
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
        "date": 1632268018272,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15459,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15206,
            "range": "±6.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15555,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15208,
            "range": "±3.97%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11905,
            "range": "±12.34%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14766,
            "range": "±3.77%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422911",
            "value": 15160,
            "range": "±3.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14619,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14886,
            "range": "±4.51%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 10681,
            "range": "±15.26%",
            "unit": "ops/sec",
            "extra": "53 samples"
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
        "date": 1632346133582,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16781,
            "range": "±7.56%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16641,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16862,
            "range": "±3.19%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14551,
            "range": "±11.32%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422909",
            "value": 14019,
            "range": "±7.54%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16073,
            "range": "±3.76%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422911",
            "value": 16211,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15791,
            "range": "±4.02%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422913",
            "value": 12217,
            "range": "±16.74%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Block 9422914",
            "value": 9012,
            "range": "±22.20%",
            "unit": "ops/sec",
            "extra": "55 samples"
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
        "date": 1632371180241,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16692,
            "range": "±6.40%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16796,
            "range": "±4.10%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17576,
            "range": "±3.28%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14015,
            "range": "±11.05%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422909",
            "value": 13651,
            "range": "±12.39%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16709,
            "range": "±3.42%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422911",
            "value": 16739,
            "range": "±3.60%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422912",
            "value": 16102,
            "range": "±4.22%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422913",
            "value": 11994,
            "range": "±15.43%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422914",
            "value": 10136,
            "range": "±18.72%",
            "unit": "ops/sec",
            "extra": "56 samples"
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
        "date": 1632388258471,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14449,
            "range": "±4.15%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13995,
            "range": "±6.89%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15481,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14896,
            "range": "±4.06%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 10984,
            "range": "±16.18%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13141,
            "range": "±4.51%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14315,
            "range": "±4.32%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422912",
            "value": 13846,
            "range": "±4.34%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13985,
            "range": "±4.65%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13329,
            "range": "±7.08%",
            "unit": "ops/sec",
            "extra": "69 samples"
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
        "date": 1632389439704,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20068,
            "range": "±6.01%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20794,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20224,
            "range": "±3.64%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14378,
            "range": "±13.72%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19570,
            "range": "±3.71%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19682,
            "range": "±3.85%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18662,
            "range": "±6.11%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422912",
            "value": 10865,
            "range": "±18.68%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13841,
            "range": "±16.17%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17161,
            "range": "±4.64%",
            "unit": "ops/sec",
            "extra": "63 samples"
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
        "date": 1632399804351,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16926,
            "range": "±6.38%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18083,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19876,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 16143,
            "range": "±11.34%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422909",
            "value": 18506,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19308,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18665,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14154,
            "range": "±14.16%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Block 9422913",
            "value": 12457,
            "range": "±13.65%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17260,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "73 samples"
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
        "date": 1632736595750,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15953,
            "range": "±3.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15285,
            "range": "±6.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16018,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15540,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11526,
            "range": "±14.77%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14667,
            "range": "±4.01%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14917,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15249,
            "range": "±4.53%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14411,
            "range": "±6.45%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422914",
            "value": 9146,
            "range": "±18.25%",
            "unit": "ops/sec",
            "extra": "46 samples"
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
        "date": 1632793861558,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24260,
            "range": "±4.97%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 24932,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19484,
            "range": "±11.95%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21896,
            "range": "±4.52%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 23130,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21773,
            "range": "±4.18%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422911",
            "value": 11263,
            "range": "±13.95%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Block 9422912",
            "value": 18870,
            "range": "±9.84%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422913",
            "value": 19076,
            "range": "±8.40%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422914",
            "value": 8668,
            "range": "±15.07%",
            "unit": "ops/sec",
            "extra": "38 samples"
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
        "date": 1632847183062,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 25269,
            "range": "±4.70%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 26348,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20629,
            "range": "±11.82%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 24545,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422909",
            "value": 24591,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21839,
            "range": "±7.97%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422911",
            "value": 11219,
            "range": "±23.81%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Block 9422912",
            "value": 22707,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13486,
            "range": "±13.35%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17001,
            "range": "±20.66%",
            "unit": "ops/sec",
            "extra": "60 samples"
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
        "date": 1632850981925,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15003,
            "range": "±4.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15201,
            "range": "±7.23%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14671,
            "range": "±3.69%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14712,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11717,
            "range": "±11.71%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14884,
            "range": "±3.74%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14278,
            "range": "±4.48%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14490,
            "range": "±4.25%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422913",
            "value": 15330,
            "range": "±4.17%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422914",
            "value": 10706,
            "range": "±17.76%",
            "unit": "ops/sec",
            "extra": "54 samples"
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
        "date": 1632950705403,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14872,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 14367,
            "range": "±6.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15351,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15309,
            "range": "±4.02%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11020,
            "range": "±15.78%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14120,
            "range": "±3.95%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14793,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14661,
            "range": "±3.79%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14151,
            "range": "±4.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 11069,
            "range": "±16.02%",
            "unit": "ops/sec",
            "extra": "57 samples"
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
        "date": 1632953512322,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24136,
            "range": "±6.99%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 24584,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 22587,
            "range": "±6.18%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15956,
            "range": "±18.82%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422909",
            "value": 22502,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22040,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422911",
            "value": 12798,
            "range": "±17.62%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422912",
            "value": 11380,
            "range": "±37.05%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Block 9422913",
            "value": 20377,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422914",
            "value": 11305,
            "range": "±11.79%",
            "unit": "ops/sec",
            "extra": "37 samples"
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
          "id": "6e41fb32a4916cff53ec940d94e3c238f3c20d5f",
          "message": "Util v7.1.2 and Tx v3.3.2 Releases (#1501)\n\n* util -> release: bumped version to v7.1.2, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* util -> release: rebuild documentation\r\n\r\n* tx -> release: bumped version to v3.3.2, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* monorepo: updated package-lock.json\r\n\r\n* util -> release: updated exclude directive in typedoc.js, rebuild documentation",
          "timestamp": "2021-09-30T01:26:36+02:00",
          "tree_id": "e235ea6f73852f5fc35377ac443788383f569998",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6e41fb32a4916cff53ec940d94e3c238f3c20d5f"
        },
        "date": 1632958360482,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20342,
            "range": "±6.13%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20887,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21199,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13610,
            "range": "±15.58%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19000,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19751,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18741,
            "range": "±3.89%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422912",
            "value": 11158,
            "range": "±18.47%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422913",
            "value": 11123,
            "range": "±24.34%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17113,
            "range": "±4.97%",
            "unit": "ops/sec",
            "extra": "62 samples"
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
          "id": "e8979852695df7fa7c33858e744ce185f985aade",
          "message": "client: merge related work (#1493)",
          "timestamp": "2021-09-30T06:49:49-07:00",
          "tree_id": "af3b95b56bdbc8919110dbf8ab8d94e59a858ac8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e8979852695df7fa7c33858e744ce185f985aade"
        },
        "date": 1633010116578,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18442,
            "range": "±6.12%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18862,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19186,
            "range": "±2.88%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14447,
            "range": "±11.29%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422909",
            "value": 17649,
            "range": "±3.39%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18852,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18661,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15430,
            "range": "±12.05%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422913",
            "value": 10690,
            "range": "±16.55%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422914",
            "value": 16931,
            "range": "±4.06%",
            "unit": "ops/sec",
            "extra": "74 samples"
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
          "id": "05f6f7a904302129ea1c89d22efcb043d92881e1",
          "message": "client: add RPC help (--helprpc) (#1505)",
          "timestamp": "2021-10-01T22:56:22+02:00",
          "tree_id": "64fa970c0f2ce20a0759e3672dbd70b7adc0a14d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/05f6f7a904302129ea1c89d22efcb043d92881e1"
        },
        "date": 1633122083231,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24019,
            "range": "±6.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25727,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21582,
            "range": "±9.39%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19509,
            "range": "±16.66%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422909",
            "value": 24172,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23212,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 12100,
            "range": "±15.10%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Block 9422912",
            "value": 21050,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422913",
            "value": 16251,
            "range": "±12.25%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Block 9422914",
            "value": 12898,
            "range": "±21.54%",
            "unit": "ops/sec",
            "extra": "53 samples"
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
          "id": "501be8da11b07d138bb4497f8a18bdf0fa2d11d7",
          "message": "client: merge work continued (#1509)\n\n* improve logs\r\n\r\n* simplify scripts, upgrade webpack dep to latest\r\n\r\n* Engine API: make preparePayload return an object (https://github.com/ethereum/execution-apis/commit/bd4389dea0f1c4bbf9d08e7bfc13d8bbded51224)\r\n\r\n* parseGethParams: add baseFeePerGas and terminalTotalDifficulty for taunas testnet\r\ncheckDAOExtraData: skip if DAOActivationBlock is zero\r\n\r\n* rename block.header.bloom to block.header.logsBloom and add backwards compatibility\r\n\r\n* remove unnecessary toNumber() and toString() within string literals\r\n\r\n* improve inTurn log language\r\n\r\n* replace JsonHeader.baseFee with baseFeePerGas (geth updated to this so we should also for consistency)\r\n\r\n* fixes",
          "timestamp": "2021-10-02T14:11:17+02:00",
          "tree_id": "1eaac9d91f2970faf3505d56aa6e5cfb17c307af",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/501be8da11b07d138bb4497f8a18bdf0fa2d11d7"
        },
        "date": 1633177053037,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16470,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15721,
            "range": "±4.68%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16691,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15216,
            "range": "±12.78%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11777,
            "range": "±13.73%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422910",
            "value": 15576,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422911",
            "value": 15939,
            "range": "±3.28%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15317,
            "range": "±3.87%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422913",
            "value": 15422,
            "range": "±4.94%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 7440,
            "range": "±23.43%",
            "unit": "ops/sec",
            "extra": "36 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pilll.PL22@gmail.com",
            "name": "v 1 r t l",
            "username": "talentlessguy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3fefc5f9a43baebc2f77388a533fc06dd534adf8",
          "message": "feat(vm): use promisify from node.js (#1514)\n\n* feat: use promisify from node.js\r\n* chore: remove util.promisify from dependencies",
          "timestamp": "2021-10-03T17:20:23-07:00",
          "tree_id": "61bbda057bb9c7dd7f3fcd4cdf7528d663599f16",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3fefc5f9a43baebc2f77388a533fc06dd534adf8"
        },
        "date": 1633308071979,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13856,
            "range": "±4.28%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13434,
            "range": "±4.68%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14072,
            "range": "±3.33%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14057,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422909",
            "value": 10620,
            "range": "±16.52%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13006,
            "range": "±6.06%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422911",
            "value": 13242,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422912",
            "value": 13683,
            "range": "±3.82%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13738,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13411,
            "range": "±4.65%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30843294+Aniket-Engg@users.noreply.github.com",
            "name": "Aniket",
            "username": "Aniket-Engg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ca7ffdeb880431b39e39df60f27b264553a9ea8",
          "message": "trie: add try-catch for \"Missing node in DB\" in ReadStream (#1515)",
          "timestamp": "2021-10-06T08:00:06-07:00",
          "tree_id": "2f19eea8b1a8ab23e8fc3d04c1d3373500a89c0c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6ca7ffdeb880431b39e39df60f27b264553a9ea8"
        },
        "date": 1633534433937,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24561,
            "range": "±5.95%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25563,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19349,
            "range": "±14.18%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422908",
            "value": 23069,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 23958,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22803,
            "range": "±4.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 10959,
            "range": "±14.36%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Block 9422912",
            "value": 21109,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422913",
            "value": 17415,
            "range": "±12.59%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422914",
            "value": 10155,
            "range": "±22.64%",
            "unit": "ops/sec",
            "extra": "45 samples"
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
          "id": "a50fb5f97331b54dc596d19e6798dcce6ede0f3f",
          "message": "prep MPT release v4.2.2 (#1518)",
          "timestamp": "2021-10-06T09:19:48-07:00",
          "tree_id": "dc1367d7f8529707cb64fa2849a8673ca26fedf8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a50fb5f97331b54dc596d19e6798dcce6ede0f3f"
        },
        "date": 1633539116909,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15079,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13859,
            "range": "±7.53%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15032,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15002,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11196,
            "range": "±13.02%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13622,
            "range": "±4.00%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14227,
            "range": "±4.03%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14007,
            "range": "±4.15%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13651,
            "range": "±4.25%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13323,
            "range": "±6.29%",
            "unit": "ops/sec",
            "extra": "69 samples"
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
          "id": "fb4c15e10d89101ec62a64b75f7ab003d39cda75",
          "message": "vm: fix accountexists bug in pre-SD hardforks (#1516)\n\n* vm: fix accountexists bug in pre-SD hardforks\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2021-10-06T14:33:16-04:00",
          "tree_id": "fa7be6fedafa98cca960e98446e1cd22f926d59d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fb4c15e10d89101ec62a64b75f7ab003d39cda75"
        },
        "date": 1633545577162,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13661,
            "range": "±4.90%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12771,
            "range": "±7.34%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14154,
            "range": "±3.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13617,
            "range": "±4.60%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11188,
            "range": "±14.19%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12763,
            "range": "±6.73%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 13831,
            "range": "±4.07%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14395,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14092,
            "range": "±4.15%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13542,
            "range": "±6.22%",
            "unit": "ops/sec",
            "extra": "68 samples"
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
          "id": "fb4c15e10d89101ec62a64b75f7ab003d39cda75",
          "message": "vm: fix accountexists bug in pre-SD hardforks (#1516)\n\n* vm: fix accountexists bug in pre-SD hardforks\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2021-10-06T14:33:16-04:00",
          "tree_id": "fa7be6fedafa98cca960e98446e1cd22f926d59d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fb4c15e10d89101ec62a64b75f7ab003d39cda75"
        },
        "date": 1633562942123,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20289,
            "range": "±7.96%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21663,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17129,
            "range": "±11.47%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20485,
            "range": "±3.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 20169,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19710,
            "range": "±5.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14084,
            "range": "±13.14%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422912",
            "value": 12791,
            "range": "±28.52%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422913",
            "value": 18267,
            "range": "±4.31%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422914",
            "value": 14212,
            "range": "±14.53%",
            "unit": "ops/sec",
            "extra": "54 samples"
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
          "id": "ab31013d154cc7be157daf21a3b534413dec2547",
          "message": "client: non-merge related changes (#1519)",
          "timestamp": "2021-10-07T08:50:33-07:00",
          "tree_id": "41e8b09b864202b8f77829e9c44dd6589e12ca96",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ab31013d154cc7be157daf21a3b534413dec2547"
        },
        "date": 1633622277886,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20253,
            "range": "±6.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21170,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20777,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14830,
            "range": "±12.20%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19515,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20320,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18896,
            "range": "±5.69%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422912",
            "value": 10441,
            "range": "±15.25%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Block 9422913",
            "value": 15948,
            "range": "±14.71%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17896,
            "range": "±4.43%",
            "unit": "ops/sec",
            "extra": "64 samples"
          }
        ]
      }
    ]
  }
}