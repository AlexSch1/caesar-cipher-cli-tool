'use strict'

const validation = (action, shift) => {
    if (action !== 'encode' && action !== 'decode') {
        console.error('action should be equal to "encode" or "decode"');
        process.exit(1);
    }

    if (shift && (Number(shift) === NaN)) {
        console.error('shift should be integer');
        process.exit(1);
    }

};

module.exports = { validation };