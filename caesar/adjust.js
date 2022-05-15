'use strict'

const { pipeline } = require('stream');
const { readStream, writeStream, errorHandle } = require('./flow');
const { validation } = require('./validation')
const { Transformed } = require('./transformed');

const adjust = (action, shift, input, output) => {
    validation(action, shift);
    pipeline(
        readStream(input),
        new Transformed(action, shift),
        writeStream(output),
        errorHandle
    );
}

module.exports = {
    adjust
};