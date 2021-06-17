require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('hardhat-deploy');
require("hardhat-deploy-ethers");
require("@nomiclabs/hardhat-etherscan");

const { mnemonic, projectID } = require("./secret.json");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // bsc: UJAYSZ1S82N8NF8Y5MRN2X3VK12Y9XC4N9
    // eth: UKB48I6CPH97N8XA6GR36SBFIPZQU1GVM7 
    apiKey: "UKB48I6CPH97N8XA6GR36SBFIPZQU1GVM7"
  },
  networks: {
    hardhat: {},
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectID}`,
      accounts: {
        mnemonic: mnemonic,
      },
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${projectID}`,
      accounts: {
        mnemonic: mnemonic,
      },
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${projectID}`,
      accounts: {
        mnemonic: mnemonic,
      },
    },
    bsc_test: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: {
        mnemonic: mnemonic
      }
    }
    // okex_test: {
    //   url: "https://exchaintestrpc.okex.org",
    //   chainId: 65,
    //   accounts: {
    //     mnemonic: mnemonic
    //   }
    // },
    // okex: {
    //   url: "https://exchainrpc.okex.org",
    //   chainId: 66,
    //   accounts: [privateKeyOkex]
    // }
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  }
}

