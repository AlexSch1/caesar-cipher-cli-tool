const { Transform, pipeline } = require('stream');
const chalk = require('chalk');
const cipher = require('../src/cipher');

class CaesarCipherTransformPipe extends (
  Transform
) {
  constructor(props, shift, action) {
    super(props);
    this.shift = shift;
    this.action = action;
  }

  _transform(chunk, encoding, callback) {
    try {
      console.log('cipherText')

      let text = chunk.toString('utf8');
      const cipherText = cipher({
        text,
        shift: this.shift,
        encode: this.action,
      });
      callback(null, cipherText);
    } catch (err) {
      callback(err);
    }
  }
}


module.exports.stdStream = (shift, action) => {
  process.stdin.setEncoding('utf8');
  pipeline(
    process.stdin,
    new CaesarCipherTransformPipe({}, shift, action),
    process.stdout,
    (err) => {
      if (err) {
        process.stderr.write(err);
      }
    },
  );
};

module.exports.cipherStream = (i, o) => {

}

module.exports.CaesarCipherTransformPipe = CaesarCipherTransformPipe;
