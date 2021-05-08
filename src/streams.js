const { Transform } = require('stream');
const cipher = require('../src/cipher');

class CaesarCipherTransformPipe extends Transform {
  constructor(props, shift, action) {
    super(props);
    this.shift = shift;
    this.action = action;
  }

  _transform(chunk, encoding, callback) {
    try {
      let text = chunk.toString('utf8');
      const cipherText = cipher({
        text,
        shift: this.shift,
        action: this.action,
      });
      callback(null, cipherText);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = CaesarCipherTransformPipe;
