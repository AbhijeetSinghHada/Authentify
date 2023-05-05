const Web3 = require('web3');
const contractJSON = require('./build/contracts/ProductRegistry.json');

const web3 = new Web3('http://127.0.0.1:8545');
const contractAddress = '0x8642F670b2e28fe1d3a8ab8A454c7Be0C8Da84c7';

const contract = new web3.eth.Contract(contractJSON.abi, contractAddress);

const registerProduct = async (name, manufacturer, qrCode) => {
  const accounts = await web3.eth.getAccounts();
  const result = await contract.methods.registerProduct(name, manufacturer, qrCode).send({ from: accounts[0] });
  console.log(`Product Added Successfully: ${result}`);
}

const verifyProduct = async (qrCode) => {
  const result = await contract.methods.verifyProduct(qrCode).call();
  console.log(`Product is authentic: ${result}`);
}

const markProductAsFake = async (qrCode) => {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.markProductAsFake(qrCode).send({ from: accounts[0] });
}





verifyProduct('123456789');
