// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Migrations {
    address public owner;
    uint lastCompletedMigration;

    constructor () {
        owner = msg.sender;
    }

    modifier restricted() {
        if(msg.sender == owner) _;
    }

    function setCompleted(uint completed) public restricted {
        lastCompletedMigration = completed;
    }

    function upgrade(address new_address) public restricted {
        Migrations upgraded = Migrations(new_address);
        upgraded.setCompleted(lastCompletedMigration);
    }
}
