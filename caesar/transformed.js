'use strict'

const { Transform } = require('stream');
const { encryption } = require('./encryption');

class Transformed extends Transform {
    constructor(action, shift) {
        super();
        this.action = action;
        this.shift = Number(shift);
    }

    _transform(chunk, encoding, callback) {
        const strToCipher = chunk.toString('utf8');
        const cipheredStr = encryption(strToCipher, this.action === 'encode' ? this.shift : -this.shift);
        this.push(cipheredStr);
        callback();
    }
}

module.exports = {
    Transformed
};
