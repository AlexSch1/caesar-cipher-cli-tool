const { Transform, pipeline } = require('stream');
const fs = require('fs');
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

module.exports.cipherStream = (inputPath, outputPath, s, a) => {
  pipeline(
      inputPath ? fs.createReadStream(inputPath) : process.stdin,
      new CaesarCipherTransformPipe({}, s, a),
      outputPath ? fs.createWriteStream(outputPath, { flags: 'a' }) : process.stdout,
      (err) => {
        if (err) {
          process.stderr.write(err);
        }
      },
  );
}

module.exports.CaesarCipherTransformPipe = CaesarCipherTransformPipe;
