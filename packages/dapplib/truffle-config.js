require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan return night slow grid kangaroo army genius'; 
let testAccounts = [
"0x1b1980cadcb5459bd678aac1e2a3d1e4fe18126960f3e69159a9809e31a4733a",
"0xe89d8211dabc9de9f6f266cbe3ac88823fda72370e6af039f46860aacefa0798",
"0xe58d8c7e9b2d63401be526d31f112fb457afdc9f75213a143507c121e4af3b27",
"0xa69f70787b159b4ccbcc9ec78042750f49b09789c7f9dbb9926a2124464e1be0",
"0x5e6d998cdaca6ef1cfc5999e5d9a91cf0f84dd7dd19ff20eae439e25a5eccdf9",
"0x156ee5fca36a92f0bb9383bd82ab6d6d94bb6cd5e2ab945cb652138ad55d380a",
"0xacc69190c9742380f49970e4980963516f40fb8bdba6798cb84792069916be58",
"0xebbf7415e8781e8cca6f79b28ff557406639ff690883e6f30e5d2097c3f9a583",
"0xf7e3c70ed61b03fe5c4673cbfb438422b0980495558ce34c4eff94dda7f24b81",
"0xda144c597f1c225ffbb9c82605ef42cb8aa808449d93d0cae92e6100d3d7ea7d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


