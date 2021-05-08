const fs = require('fs');
const errorProcessing = require('../utils/errorProcessing');

module.exports = (path, namePath) => {
    fs.stat(path, (err, stat) => {
        if (err || !stat.isFile()) {
            errorProcessing(`No such ${namePath} file`)
        }
    })
}
