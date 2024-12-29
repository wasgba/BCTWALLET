// Importando as dependências necessárias
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Definindo a rede a ser utilizada
// bitcoin - rede principal - mainnet
// testnet - rede de teste - testnet
const network = bitcoin.networks.testnet;

// Derivação da carteira HD
const path = "m/49'/1'/0'/0'";

// Criando o mnemônico para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic(); // Gera um mnemônico aleatório
const seed = bip39.mnemonicToSeedSync(mnemonic); // Converte o mnemônico em seed

// Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network);

// Criando uma conta a partir de chaves privadas e públicas
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

// Gerando o endereço Bitcoin
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey, // Corrigido para 'node.publicKey'
    network: network
}).address;

// Exibindo as informações da carteira gerada
console.log("Carteira gerada");
console.log("Endereço:", btcAddress);
console.log("Chave privada:", node.toWIF()); // Corrigido para 'node.toWIF()'
console.log("Seed:", mnemonic);