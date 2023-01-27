import * as dotenv from 'dotenv'
dotenv.config()
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

const config: HardhatUserConfig = {
  solidity: "0.8.9",

  networks: {
    "goerli": {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY!}`,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }

};

export default config;
