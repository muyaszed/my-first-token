var ZedToken = artifacts.require('./ZedToken.sol');

contract('ZedToken', function(accounts) {
  it('Should put 15000 ZedToken in the first account', function() {
    return ZedToken.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 15000, "15 ZedToken was not on the first account");
    })
  });

  it('Should send 10 ZedToken correctly', function() {
    var token;
    var account_one = accounts[0];
    var account_two = accounts[1];
    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;
    var amount = 10

    return ZedToken.deployed().then(function(instance) {
      token = instance;
      return token.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return token.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = balance.toNumber();
      return token.transfer(account_two, amount, {from: account_one});
    }).then(function() {
      return token.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return token.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount not successfully transfered from account one");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount not successfully transfered to account two");

    });
  });
});
