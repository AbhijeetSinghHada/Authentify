const contractJSON = require('./build/contracts/ProductRegistry.json');

const web3 = new Web3('http://127.0.0.1:7545');
const contractAddress = '0x6c6809F7ab413A363234ab70a736555A731899c9';

const contract = new web3.eth.Contract(contractJSON.abi, contractAddress);

const registerProduct = async () => {
  const name = document.getElementById('name').value;
  const manufacturer = document.getElementById('manufacturer').value;
  const qrCode = document.getElementById('qrCode').value;
  const accounts = await web3.eth.getAccounts();
  await contract.methods.registerProduct(name, manufacturer, qrCode).send({ from: 0x909C82787B1E3ADF7570B6a61b65b2B257Bc22Bd  });
  document.getElementById('result').innerHTML = 'Product registered successfully.';
}

const verifyProduct = async () => {
  const qrCode = document.getElementById('verifyQrCode').value;
  const result = await contract.methods.verifyProduct(qrCode).call();
  document.getElementById('result').innerHTML = `Product is authentic: ${result}`;
}

const markProductAsFake = async () => {
  const qrCode = document.getElementById('fakeQrCode').value;
  const accounts = await web3.eth.getAccounts();
  await contract.methods.markProductAsFake(qrCode).send({ from: 0x909C82787B1E3ADF7570B6a61b65b2B257Bc22Bd  });
  document.getElementById('result').innerHTML = 'Product marked as fake.';
}
