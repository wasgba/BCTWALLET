# Resumo do Processo de Criação da Carteira BTC de Teste

## 1. Instalação das Dependências
Foram utilizadas três bibliotecas principais:
- **bip32**
- **bip39**
- **bitcoinjs-lib**

Essas bibliotecas são necessárias para a criação e manipulação de carteiras Bitcoin HD (Hierarchical Deterministic) e geração de chaves.

## 2. Geração do Mnemônico
Um mnemônico (frase de recuperação) foi gerado usando a biblioteca **bip39**, que fornece uma representação fácil de lembrar da seed (semente) da carteira.

## 3. Criação da Seed
O mnemônico foi convertido em uma seed utilizando a função `mnemonicToSeedSync`.

## 4. Derivação da Carteira HD
A carteira HD foi criada a partir da seed gerada, permitindo derivar chaves filhas (públicas e privadas) a partir dela.

## 5. Geração do Endereço Bitcoin
A partir da chave pública derivada, foi gerado um endereço Bitcoin no formato P2PKH (Pay-to-Public-Key-Hash).

## 6. Exibição das Informações
O código exibiu o endereço, a chave privada e a seed na saída do console.

## 7. Configuração do Repositório Git
- Inicializou um repositório Git no diretório do projeto e adicionou os arquivos.
- Criou um repositório no GitHub e conectou o repositório local ao remoto.
- Enviou os arquivos para o repositório GitHub.

## Resultados
- Uma carteira Bitcoin de teste foi gerada com sucesso, e as informações (endereço, chave privada e seed) foram exibidas.
- O projeto foi organizado e disponibilizado em um repositório GitHub para fácil acesso e versionamento.
