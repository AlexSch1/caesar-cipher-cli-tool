'use strict'; //"main": "caesar.js",

const { Command } = require('commander');
const { adjust } = require('./adjust')

const program = new Command();

program
    .storeOptionsAsProperties(false)
    .requiredOption('-s, --shift <number>', 'a shift')
    .option('-i, --input <path>', 'an input file')
    .option('-o, --output <path>', 'an output file')
    .requiredOption('-a, --action <encode/decode>', 'an action encode/decode')
    .parse(process.argv)

const { action, input, output, shift } = program.opts();

adjust(action, shift, input, output)
