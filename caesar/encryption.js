'use strict'

const {
    DOUBLE_ALPHABET,
    LENGTH_ALPHABET
} = require('./constants')

const encryption = (phrase, shift) => {
    const amount = ((shift > LENGTH_ALPHABET) || (shift < 0)) ? shift % LENGTH_ALPHABET : shift;
    let result = '';
    for (let i = 0; i < phrase.length; i++) {
        const letter = phrase.charAt(i)
        if (DOUBLE_ALPHABET.includes(letter)) {
            const code = DOUBLE_ALPHABET.indexOf(letter);
            const diff = (code + amount) < 0 ? code + amount + LENGTH_ALPHABET : code + amount
            const codedLetter = DOUBLE_ALPHABET.charAt(diff);
            result = result.concat(codedLetter)
        } else {
            result = result.concat(letter);
        }
    }
    return result
}

module.exports = {
    encryption
};