/* eslint-disable no-return-await */
import dotenv from 'dotenv';
import Web3 from 'web3';

dotenv.config();
import { default as MyContract } from './dapp/build/contracts/dAppVote.json';

if (!process.env.PRIVATE_KEY) {
  throw new Error('define PRIVATE_KEY in .env first!');
} else {
  console.log('Using env var PRIVATE_KEY', `${process.env.PRIVATE_KEY.substr(0, 4)}...`);
}
if (process.env.INFURA_PROJECT_SECRET) {
  console.log('Using env var INFURA_PROJECT_SECRET', `${process.env.INFURA_PROJECT_SECRET.substr(0, 4)}...`);
}
if (process.env.ROPSTEN_ENDPOINT) {
  console.log('Using env var ROPSTEN_ENDPOINT', process.env.ROPSTEN_ENDPOINT);
}

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ROPSTEN_ENDPOINT));
// const networkId = web3.eth.net.getId();
web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY);
const myContract = new web3.eth.Contract(
  MyContract.abi,
  MyContract.networks[3].address,
);

const getLength = async () => {
  const len = await myContract.methods.getLength()
    .call({ from: process.env.ACCOUNT });// .then(console.log);
  return console.log(len);
};

const storeVote = async (quorum, favorable, against, proposals) => {
  const result = await myContract.methods.storeVote(quorum, favorable, against, proposals)
    .send({ from: process.env.ACCOUNT, gas: 3000000 });
  return result;
};

const getByVote = async (index) => await myContract.methods.getVotings(index).call({ from: '0xAB8c123308A0aAEC6CD6C37BD4Fb85D60a88783a' });

getByVote(0)
  .then(({
    _quorum, _favorable, _against, _proposals, _timestamp,
  }) => JSON.stringify({
    quorum: _quorum,
    favorable: _favorable,
    against: _against,
    proposals: _proposals,
    timestamp: _timestamp,
  }))
  .then(console.log)
  .catch((error) => console.error(error));

getLength();
// storeVote(4, 3, 1, 'teste').then(console.log);
const getGasPrice = async () => await web3.eth.getGasPrice().then(async (result) => await web3.utils.fromWei(result, 'ether'));
/*
myContract.methods.getLength().send({ from: process.env.ACCOUNT }).then((result) => {
  console.log(result);
});
myContract.methods.getLength().call((err, res) => {
  if (err) {
    console.log('An error occured', err);
    return;
  }
  console.log('The result is: ', res);
});

bytes4(""), true, 3);
*/
