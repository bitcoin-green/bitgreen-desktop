# Bitgreen Desktop

> *"Bitgreen is an open source project that aims to restore the balance of privacy on the internet."*

![UI Preview](preview.gif)

### Table of Contents

* [About](#about)
   * [Download](#download)
* [Contribute](#contribute)
* [Getting started](#getting-started)
   * [Requirements](#requirements)
   * [Installation](#installation)
   * [Development](#development)
   * [Packaging](#packaging)
* [Troubleshooting](#troubleshooting)
* [Licence](#licence)

## About

Bitgreen Desktop is our feature-rich flagship client, recommended for most users for interacting with Bitgreen network.

We provide a decentralized privacy platform with a suite of tools to enhance your online privacy:

* **An anonymous cryptocurrency** – send and receive the PART cryptocurrency without revealing the transaction history
* **End-to-end encrypted messaging** – communicate in a secure and decentralized manner without revealing your IP address
* **A private marketplace** – buy and sell goods without leaving a trace (WIP on `market` branch)
* **Community governance** – anyone can submit proposals to Bitgreen network via decentralized voting & governance (WIP on `market` branch)

This repository is the user interface that works in combination with our [`bitgreen-core`](https://github.com/bitgreen/bitgreen-core).

#### Download

[![Download the packaged wallet for Mac, Windows and Linux](download-button.png)](https://github.com/bitgreen/bitgreen-desktop/releases)


## Contribute

[![Snyk](https://snyk.io/test/github/bitgreen/bitgreen-desktop/badge.svg)](https://snyk.io/test/github/bitgreen/bitgreen-desktop)
[![Build Status](https://travis-ci.org/bitgreen/bitgreen-desktop.svg?branch=master)](https://travis-ci.org/bitgreen/bitgreen-desktop)
[![Coverage Status](https://coveralls.io/repos/github/bitgreen/bitgreen-desktop/badge.svg?branch=master)](https://coveralls.io/github/bitgreen/bitgreen-desktop?branch=master)
[![Code Climate](https://codeclimate.com/github/bitgreen/bitgreen-desktop/badges/gpa.svg)](https://codeclimate.com/github/bitgreen/bitgreen-desktop)
[![Greenkeeper badge](https://badges.greenkeeper.io/bitgreen/bitgreen-desktop.svg)](https://greenkeeper.io/)

For contributing to Bitgreen Desktop, please read our [Contributing Guidelines](CONTRIBUTING.md) first.

Join us in [#bitgreen-dev:matrix.org](https://riot.im/app/#/room/#bitgreen-dev:matrix.org) on [Riot](https://riot.im) for more info and/or assistance.


## Getting started

### Requirements

* [Node.js®](https://nodejs.org/) 6.4—7.10
* [git](https://git-scm.com/)
* [yarn](https://yarnpkg.com/en/)

### Installation

```bash
git clone https://github.com/bitgreen/bitgreen-desktop
cd bitgreen-desktop
yarn install
```

### Development

> Note: most recent development happens on `market` branch

1. Run `ng serve` to start the dev server and keep it running
1. In another terminal window, run `yarn run start:electron:dev -testnet --devtools` to start Bitgreen Desktop on testnet (daemon will be updated and launched automatically)
   * `-testnet` – for running on testnet (omit for running the client on mainnet)
   * `-reindex` – reindexes the blockchain (in case you're stuck)
   * `--devtools` – automatically opens Developer Tools on client launch

#### Interact with bitgreen-core daemon

You can directly interact with the daemon ran by the Electron version.

```
./bitgreen-cli -testnet getblockchaininfo
```

### Packaging

#### Windows-only requirements

Building for Windows requires the 32-bit libraries to be available:

```
sudo apt-get install gcc-multilib
sudo apt-get install g++-multilib
```

#### Packaging commands

* `yarn run package:win` – Windows
* `yarn run package:mac` – macOS
* `yarn run package:linux` – Linux


## Troubleshooting

### Development issues

#### Blockchain syncing stuck
Restart the app with `-reindex` flag:

```
yarn run start:electron:dev -testnet --devtools -reindex
```

#### Marketplace fails to load
Delete marketplace `database` folder and restart app:

* Windows: `%appdata%\bitgreen-market\testnet\`
* macOS: `~/Library/Application Support/Bitgreen/bitgreen-market/testnet/`
* Linux: `~/.bitgreen-market/testnet/`

### Other issues

See our [Bitgreen Wiki](https://bitgreen.wiki/) for most common problems or join [#bitgreenhelp:matrix.org](https://riot.im/app/#/room/#bitgreenhelp:matrix.org) on [Riot](https://riot.im) for community help.


## Licence

Bitgreen Desktop is released under [GNU General Public License v2.0](LICENCE).
