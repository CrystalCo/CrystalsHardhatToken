const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function() {
    it("Deployment should assign the total supply of tokens to the owner", async function() {
        const [owner] = await ethers.getSigners(); // A Signer in ethers.js is an object that represents an Ethereum account. It's used to send transactions to contracts and other accounts. Here we're getting a list of the accounts in the node we're connected to, which in this case is Hardhat Network, and only keeping the first one

        const Token = await ethers.getContractFactory("Token"); // A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, so Token here is a factory for instances of our token contract.

        const hardhatToken = await Token.deploy(); // Calling deploy() on a ContractFactory will start the deployment, and return a Promise that resolves to a Contract. This is the object that has a method for each of your smart contract functions.

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
});

