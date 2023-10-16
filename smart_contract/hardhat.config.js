require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/qvJXRfUkEqwd_JV6jemZlJK8izxaNT0Q',
      accounts: ['30ffb10342ec9a2b2bba3e47263f7471a3a57e81ea3553686ebad8ac0a2c9a29'],
    }
  }
};
