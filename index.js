const minimist = require('minimist');

const cipher = require('./src/cipher');


const rawArguments = process.argv.slice(2);
const arguments = minimist(rawArguments, {
    alias: {
        s: 'shift',
        i: 'input',
        o: 'output',
        a: 'action'
    }
});

console.log('arguments:', arguments);


