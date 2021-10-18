require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

/*
*   This file has been updated to use dotenv vars. 
*         - If you havent already, please first run `npm i` from module5/hardhat-tutorial/
*         - Create another .env file in the root of this module5/hardhat-tutorial/ directory
*         - copy your API_URL and PRIVATE_KEY from sendtx-tutorial in Module 2/3 to the .env file
*         - This file is now connected to your Ropsten credentials
*         - run `npx hardhat compile` from module5/hardhat-tutorial/ directory
*         - Continue Tutorial at Step #6
*/

const ALCHEMY_API_KEY = process.env.API_URL;

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: ALCHEMY_API_KEY,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
