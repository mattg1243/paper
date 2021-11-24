module.exports = {
    networks: {
        development: {
            host: '127.0.0.1:',
            port: '7545',
            network_id: '*' // Connect to any network
        },
    },
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/truffle_abis/',
    compilers: {
        solc: {
            version: '0.8.7',
            optimizer: {
                enable: true,
                runs: 200
            },
        }
    }
}