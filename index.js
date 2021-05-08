const minimist = require('minimist');
const chalk = require('chalk');

const cipher = require('./src/cipher');

console.log(chalk.blue(cipher('bdujpo: bo bdujpo fodpef/efdpef', 1, false)));
// console.log(chalk.blue(cipher('action: an action encode/decode', 1, true)))

const rawArguments = process.argv.slice(2);
const arguments = minimist(rawArguments, {
  alias: {
    s: 'shift',
    i: 'input',
    o: 'output',
    a: 'action',
  },
});

console.log('arguments:', arguments);

// encode ->   -1 <-
// decode <-   -1 ->

// -s, --shift: a shift                     - required - string
// -i, --input: an input file               - ? string path
// -o, --output: an output file             - ? string path
// -a, --action: an action encode/decode    - required - string
