const minimist = require('minimist');
const checkArguments = require('./src/checkArguments');

const rawArguments = process.argv.slice(2);
const arguments = minimist(rawArguments, {
    alias: {
        s: 'shift',
        i: 'input',
        o: 'output',
        a: 'action'
    }
});
checkArguments(arguments);
