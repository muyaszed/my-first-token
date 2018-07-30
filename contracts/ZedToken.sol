pragma solidity ^0.4.17;

import "/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract ZedToken is StandardToken {
  string public name = 'ZedToken';
  string public symbol = "ZT";
  uint8 public decimals = 18;
  uint INITIAL_SUPPLY = 15000;

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
