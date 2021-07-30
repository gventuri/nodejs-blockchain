const SHA256 = require('crypto-js/sha256');
const Block = require('./Block');

class Blockchain {
  constructor() {
    this.blockchain = [
        this.initGenesisBlock()
    ];
    this.difficulty = 4;
  }

  initGenesisBlock() {
    return new Block(0, "31/07/21", "Here's the genesis block", "0");
  }

  findLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  addNewBlock(newBlock) {
    newBlock.nextHash = this.findLatestBlock().hash;
    newBlock.hash = newBlock.computeHash();
    this.blockchain.push(newBlock);
  }

  checkChainValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const nextHash = this.blockchain[i - 1];

      if (currentBlock.hash !== currentBlock.computeHash()) return false;
      if (currentBlock.nextHash !== nextHash.hash) return false;
    }

    return true;
  }
}
module.exports = Blockchain;