const Paper = artifacts.require('Paper');

module.exports = async function (deployer, accounts) {
    // Deploy Paper Contract to network
    await deployer.deploy(Paper)
    const paper = await Paper.deployed()
    // Test Transfer
    await paper.transfer('0x3010DC4824C238519D20A913BC1622d4901b0EC6', '1')
}