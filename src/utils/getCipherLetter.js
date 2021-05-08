const { ALPHABET } = require('../constants/constants');

module.exports = (letter, cipherIndex) => {
    if (letter.match(/[A-Z]/)) {
        return ALPHABET[cipherIndex]
    } else if (letter.match(/[a-z]/)) {
        return ALPHABET[cipherIndex].toLowerCase()
    } else {
        return letter;
    }
}
