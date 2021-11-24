// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Paper {
    address public owner;
    string public name = 'PaperCoin';
    string public symbol = 'PAPER';
    uint256 public totalSupply = 1000000000000000;     
    uint8 public decimals = 2;
    address public nulladdr = address(0);

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint _value
    );

    event Approval(
        address indexed _owner,
        address indexed _to,
        uint _value
    );

    event Mint (
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Burn (
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor () {
        // For testing -> Send total supply to contract deployer
        balanceOf[msg.sender] = totalSupply / 10000000300;
        owner = msg.sender;
    }

    function transfer(address _to, uint _value) public returns (bool success){
        // Catch insufficient balance
        require(balanceOf[msg.sender] >= _value, "Balance is insufficient");
        // Transfer 
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        // Broadcast transfer
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint _value) public returns (bool success) {
        // Catch insufficient balance
        require(_value <= balanceOf[_from], "Balance insufficient");
        require(_value <= allowance[_from][msg.sender], "Not allowed to transfer");
        // Make transfer
        balanceOf[_to] += _value;
        balanceOf[_from] -= _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    // PAPER Official Mint Function
    function mint(address _to, uint256 _value) public returns (bool success) {
        // In our paper simulation allow users to mint if they want to
        balanceOf[_to] += _value;
        // Mint from nulladdr
        emit Mint(address(0), _to, _value);
        return true;
    }

    function burn(uint256 _value) public returns (bool success) {

        balanceOf[msg.sender] -= _value;
        emit Burn(msg.sender, address(0), _value);
        return true;
    }
    
}
