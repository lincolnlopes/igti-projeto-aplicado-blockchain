import dotenv from "dotenv";
import Web3 from "web3";
import { abi, networks } from "../../dapp/build/contracts/dAppVote.json";
// eslint-disable-next-line import/no-named-default
import log from "../utils/providerLogs";

dotenv.config();

const web3 = new Web3(
  new Web3.providers.HttpProvider(process.env.ROPSTEN_ENDPOINT)
);

// const networkId = web3.eth.net.getId();

web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY);

const myContract = new web3.eth.Contract(
  abi,
  networks[process.env.ROPSTEN_NETWORK_ID].address
);

function getProvider() {
  const { WebsocketProvider } = Web3.providers;

  const provider = new WebsocketProvider(process.env.ROPSTEN_WEBSOCKET_URL);

  return new Promise((resolve) => {
    provider.on("connect", () => {
      //logger.info("Web3 WS connected.");
      return resolve(provider);
    });

    provider.on("error", () => resolve());
  });
}

class NetworkController {
  async index(_, res) {
    try {
      const len = await myContract.methods
        .getLength()
        .call({ from: process.env.ACCOUNT });
      return await res.json({ length: len });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async qty(req, res) {
    try {
      log(true, req.ip, req.url, "");

      const len = await myContract.methods
        .getLength()
        .call({ from: process.env.ACCOUNT });
      await res.json({ qty: len });
    } catch (error) {
      log(false, req.ip, req.url, err.message);
      await res.status(400).json({ message: error.message });
    }
  }

  async types(req, res) {
    const { quorum, favorable, against, proposals } = await req.body;
    try {
      log(true, req.ip, req.url, "");
      res.json({
        quorum: typeof quorum,
        favorable: typeof favorable,
        against: typeof against,
        proposals: typeof proposals,
      });
    } catch (error) {
      log(false, req.ip, req.url, err.message);
      await res.status(400).json({ message: error.message });
    }
  }

  async store(req, res) {
    const { quorum, favorable, against, proposals } = await req.body;
    try {
      const {
        blockHash,
        blockNumber,
        cumulativeGasUsed,
        gasUsed,
        status,
        from,
        to,
        transactionHash,
        transactionIndex,
      } = await myContract.methods
        .storeVote(quorum, favorable, against, proposals)
        .send({ from: process.env.ACCOUNT, gas: 3000000 });

      res.json({
        blockHash,
        blockNumber,
        cumulativeGasUsed,
        gasUsed,
        status,
        from,
        to,
        transactionHash,
        transactionIndex,
      });
    } catch (error) {
      await res.status(400).json({ message: error.message });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const {
        _quorum: quorum,
        _favorable: favorable,
        _against: against,
        _proposals: proposals,
        _timestamp: timestamp,
      } = await myContract.methods
        .getVotings(id)
        .call({ from: process.env.ACCOUNT });

      res.json({
        quorum,
        favorable,
        against,
        proposals,
        timestamp,
      });
    } catch (error) {
      await res.status(400).json({ message: error.message });
    }
  }
}

export default new NetworkController();
