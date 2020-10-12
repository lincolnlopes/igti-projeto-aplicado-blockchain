/* eslint-disable func-names */
/* eslint-disable no-undef */
const dAppVote = artifacts.require('dAppVote');

module.exports = function (deployer) {
  deployer.deploy(dAppVote);
};
