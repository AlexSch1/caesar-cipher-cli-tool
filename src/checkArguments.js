const getPathToFile = require('./utils/getPathToFile');
const fileExist = require('./utils/fileExist');
const { stdStream, cipherStream } = require('../src/streams');
const errorProcessing = require('./utils/errorProcessing');
const checkNumber = require('./utils/checkNumber');

module.exports = (arguments) => {
  const { s, i, o, a } = arguments;

  if (!s) {
    errorProcessing('-s обязательный параметр');
  }
  if (!checkNumber(+s)) {
    errorProcessing('-s не верное значение');
  }
  if (!a) {
    errorProcessing('-a обязательный параметр');
  }
  if (a !== 'decode' && a !== 'encode') {
    errorProcessing(
      '-a не верное значение, допустимые значения "decode", "encode"',
    );
  }

  const action = a === 'encode';

  if (!i && !o) {
    stdStream(s, action);
    return;
  }

  let inputPath;
  let outputPath;

  if (i) {
    inputPath = getPathToFile(i);
    fileExist(inputPath, 'input');
  }

  if (o) {
    outputPath = getPathToFile(o);
    fileExist(outputPath, 'output');
  }

  cipherStream(inputPath, outputPath, s, action);
};
