const Paper = artifacts.require('Paper');

const chai = require('chai').use(require('chai-as-promised'))

contract('Paper', ([owner, user]) => {
    let paper, deployer

    before(async () => {
        paper = await Paper.new()
        deployer = await paper.owner()
    })

    describe('Paper Deployment', async () => {
        // Testing contract deployment
        it('matches name correctly', async () => {
            const name = await paper.name()
            assert.equal(name, 'PaperCoin')
        })

        it('matches symbol correctly', async () => {
            const symbol = await paper.symbol()
            assert.equal(symbol, 'PAPER')
        })
    })

    describe('PaperCoin functions', async () => {
        // Testing balance mapping
        it('maps balances correctly', async () => {
            const balance = await paper.balanceOf(deployer)
            chai.expect(balance).to.not.be.undefined
        })

        // Testing transfer functions
        it('transfers successfully', async () => {
            const tx = await paper.transfer(owner, 10)
            chai.expect(tx).to.not.be.undefined
        })

        // Testing mint functions
        it('mints successfully', async () => {
            const tx = await paper.mint(deployer, 1000)
            chai.expect(tx).to.not.be.undefined
        })

        // Testing burn functions
        it('burns successfully', async () => {
            const tx = await paper.burn(1)
            chai.expect(tx).to.not.be.undefined
        })
    })
})