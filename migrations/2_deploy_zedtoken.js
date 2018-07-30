var ZedToken = artifacts.require('./ZedToken.sol');

module.exports = function(deployer) {
  deployer.deploy(ZedToken);
}
