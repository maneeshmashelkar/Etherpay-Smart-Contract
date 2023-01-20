require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/PB7tWxip7rTukbSpUokXUTzwoXOl5aB5",
      accounts: [
        "caad99f393ecd558434d99521879403c1ec9c3ee2996e2c64a28b95a38125d38",
      ],
    },
  },
};

//https://eth-goerli.g.alchemy.com/v2/PB7tWxip7rTukbSpUokXUTzwoXOl5aB5
