const { ALPHABET, ALPHABET_LENGTH } = require('./constants/constants');
const alphabetPosition = require('./utils/alphabetPosition');



const decodeStr = 'abc' //

let shift = 1;
const res = [];

for (const iterator of decodeStr) {
    const indexLetterInAlphabet = alphabetPosition(iterator);

    if (!indexLetterInAlphabet || indexLetterInAlphabet < 0) {
        res.push(iterator);
        continue
    }

    let cipherIndex = +indexLetterInAlphabet + shift;

    if (cipherIndex > ALPHABET_LENGTH) {
        cipherIndex = cipherIndex % ALPHABET_LENGTH;
    }


    if (iterator.match(/[A-Z]/)) {
        res.push(ALPHABET[cipherIndex]);
    } else if (iterator.match(/[a-z]/)) {
        res.push(ALPHABET[cipherIndex].toLowerCase());
    } else {
        res.push(iterator);
    }
}

console.log(res.join(""));
