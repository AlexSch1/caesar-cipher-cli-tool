const getPathToFile = require('./utils/getPathToFile');
const fileExist = require('./utils/fileExist');
const { stdStream, cipherStream } = require('../src/streams');
const errorProcessing = require('./utils/errorProcessing');
const { isIntegerNum, isNAN } = require('./utils/checkNumber');

module.exports = (arguments) => {
  const { s, i, o, a } = arguments;

  if (!s || !isNAN(s)) {
    errorProcessing('-s не указан, или использованы ошибочные значения');
  }
  if (!isIntegerNum(+s)) {
    errorProcessing('-s неверное значение, значение должно быть целым числом');
  }
  if (!a) {
    errorProcessing('-a обязательный параметр');
  }
  if (a !== 'decode' && a !== 'encode') {
    errorProcessing(
      '-a неверное значение, допустимые значения "decode", "encode"',
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
