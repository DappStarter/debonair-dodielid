require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remain mistake good enroll force sport'; 
let testAccounts = [
"0xcf843db0386968cdf7b55dbc12b0737bcff31590e4e8ab64603caee8bbbdfa38",
"0xa3c7e32f500cc40d43c3859067ebaa98c4e23411dd2e1c0be7befea863df7b06",
"0xbb5253b27cbee9620c1bc339eca7805aa6b7605e4e9572596d6512214887befa",
"0xd823eb573ca938a207ce204406fab900e1b0a7055b9910f1f4f1ba91295a2e95",
"0xe15133987d44d74dc9308cdb19ea84a2128476b095572756010b292bc5834dc0",
"0x5bbf5351acd3840fbacfa9d12f07bc892a9259975a0e1c3b86595e45268f8610",
"0xe6eda00806b704aa45e7d240ce7d3e1acef6f3ab5bad3397e55bfea597a026c0",
"0xd07b3bd9b76b7d13ae61098969ffc23472d212eaf303fb3e049d9e0f1bb70a37",
"0x5b09f9bc2de5955f2225fb4225bae6c40ae1ea7ba8e1b3dc6c608d325c09f220",
"0xacdcd03e02e57ad31fe443da3af9dbe48e3d930f1d6823aab527d8d3b73e2789"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

