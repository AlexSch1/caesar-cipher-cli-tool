const { ALPHABET_LENGTH } = require('./constants/constants');
const alphabetPosition = require('./utils/alphabetPosition');
const getCipherLetter = require('./utils/getCipherLetter');

/*
 * @param text:string - required
 * @param shift:number - required - positive integer number
 * @param encode:boolean - required
 * @returns string
 * */
function cipher({ text, shift, encode }) {
  let res = '';

  for (const letter of text) {
    const indexLetterInAlphabet = +alphabetPosition(letter);

    if (!indexLetterInAlphabet || indexLetterInAlphabet < 0) {
      res += letter;
      continue;
    }

    let cipherIndex = encode
      ? indexLetterInAlphabet + shift
      : indexLetterInAlphabet - shift;

    if (cipherIndex <= 0) {
      cipherIndex = ALPHABET_LENGTH + cipherIndex;
    }
    if (cipherIndex > ALPHABET_LENGTH) {
      cipherIndex = cipherIndex % ALPHABET_LENGTH;
    }

    res += getCipherLetter(letter, cipherIndex);
  }

  return res;
}

module.exports = cipher;
