const Web3 = require('web3');
const FakeProductDetectionContract = require('./build/contracts/authentify.json');

// Set up web3 provider
const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);

// Get deployed contract address
const contractAddress = FakeProductDetectionContract.networks['4224'].address;
console.log(`Contract address: ${contractAddress}`);
