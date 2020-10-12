import dotenv from 'dotenv';
import Web3 from 'web3';

import { networks, abi } from '../../dapp/build/contracts/dAppVote.json';

dotenv.config();

export default class Provider {
  async GetWeb3(req, res) {
    try {
      console.log('chamando provider');
      const web3 = await new Web3(new Web3.providers.HttpProvider(
        process.env.PRIVATE_KEY, process.env.ROPSTEN_ENDPOINT,
      ));
      // await web3.eth.accounts.wallet.add();
      const myContract = await new web3.eth.Contract(
        abi,
        networks[3].address,
      );
      console.log(networks[3].address);

      return await myContract;
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  }
}
