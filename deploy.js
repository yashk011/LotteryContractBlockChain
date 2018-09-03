const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface , bytecode } = require('./compile.js');

const provider = new HDWalletProvider(

  'child master thunder comfort sand wise frame maple tower physical man whip',
  'https://rinkeby.infura.io/v3/fcd6f7b51bd044adb25417faf10dd526'

);

const web3 = new Web3(provider);

const deploy  = async () => {

  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account : ' , accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface)) // create a new module of eth in web3 && create an instance of Contract and iniarlize with a
  .deploy({data : bytecode }) //
  .send({gas: '1000000'  , from: accounts[0] });

  console.log('Contract deployed to ' , result.options.address);

};

deploy();
