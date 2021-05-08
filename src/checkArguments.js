const fs = require('fs');
const { pipeline } = require('stream');
const path = require('path');
const chalk = require('chalk');
const getPathToFile = require('./utils/getPathToFile');
const fileExist = require('./utils/fileExist');
const { stdStream, cipherStream } = require('../src/streams');
const { CaesarCipherTransformPipe } = require('../src/streams');
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
        errorProcessing('-a не верное значение, допустимые значения "decode", "encode"');
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
        fileExist(inputPath, 'input')
        // console.log(chalk.blue(inputPath));
    }

    if (o) {
        outputPath = getPathToFile(o);
        fileExist(outputPath, 'output');
        // console.log(chalk.blue(outputPath))
    }

    cipherStream(inputPath, outputPath, s, action);

    // if (!i && o) {
    //     pipeline(
    //         process.stdin,
    //         new CaesarCipherTransformPipe({}, s, action),
    //         fs.createWriteStream(outputPath, { flags: 'a' }),
    //         (err) => {
    //             if (err) {
    //                 process.stderr.write(err);
    //             }
    //         },
    //     );
    // }
    //
    // if (i && !o) {
    //     console.log('+++')
    //     pipeline(
    //         fs.createReadStream(inputPath, { flags: 'a' }),
    //         new CaesarCipherTransformPipe({}, s, action),
    //         process.stdout,
    //         (err) => {
    //             if (err) {
    //                 process.stderr.write(err);
    //             }
    //         },
    //     );
    // }


    // console.log(s, i, o, a)

    // if (!i && !o) {
    //     stdStream(1, true);
    // }

}