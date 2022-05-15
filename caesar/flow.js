'use strict'
const os = require('os');
const fs = require('fs');

const readStream = (path) => {
    if (path === undefined) {
        console.log('Would you please enter your text. Finish your entering by press Ctrl + Enter. To exit, press CTRL + C.');
        return process.stdin;
    };
    return fs.createReadStream(path)
};

const writeStream = (path) => {
    if (path === undefined) return process.stdout;
    const stream = fs.createWriteStream(path, { flags: 'a+' }).on('close', () => {
        fs.createWriteStream(path, { flags: 'a+' }).write(os.EOL);
    });
    return stream;
}

const errorHandle = (err) => {
    if (err) {
        console.error('Pipeline failed', err);
    } else {
        console.log('Pipeline succeeded');
    }
}

module.exports = {
    readStream,
    writeStream,
    errorHandle
}

