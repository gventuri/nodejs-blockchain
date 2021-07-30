const Block = require('./src/Block');
const Blockchain = require('./src/Blockchain');

let blockchain = new Blockchain();

blockchain.addNewBlock(new Block(1, "31/07/21", { sender: "Jon Doe", recipient: "Satoshi Nakamoto", amount: 100000 }));
blockchain.addNewBlock(new Block(2, "31/07/21", { sender: "Satoshi Nakamoto", recipient: "Jon Doe", amount: 20000 }));

console.log(JSON.stringify(blockchain, null, 4));