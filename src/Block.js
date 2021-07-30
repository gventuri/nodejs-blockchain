const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, currentTime, details, nextHash = " "){
        this.index = index;
        this.current_time = currentTime;
        this.details = details;
        this.nextHash = nextHash;
        this.hash = this.computeHash();
    }

    computeHash() {
        return SHA256(this.details + this.nextHash + this.current_time + JSON.stringify(this.details)).toString();
    }   
}

module.exports = Block;