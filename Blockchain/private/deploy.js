var fs = require('fs');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

var bytecode = fs.readFileSync('./build/ProductRegistry.bin').toString();
var abi = JSON.parse(fs.readFileSync('./build/ProductRegistry.abi').toString());

var contract = new web3.eth.Contract(abi);

web3.eth.getAccounts().then(function(accounts) {
  contract.deploy({
    data: '0x' + bytecode
  }).send({
    from: accounts[0],
    gas: 1500000,
    gasPrice: '0'
  }, function(error, transactionHash) {
    console.log('Transaction hash:', transactionHash);
  }).then(function(newContractInstance) {
    console.log('Deployed contract address:', newContractInstance.options.address);
  });
});
