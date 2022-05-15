const fs = require('fs');
const errorProcessing = require('../utils/errorProcessing');

module.exports = async (path, namePath) => {
  try {
    const stats = fs.statSync(path);
    if (!stats || !stats.isFile()) {
      errorProcessing(`No such ${namePath} file`);
    }
  } catch (e) {
    errorProcessing(`No such ${namePath} file`);
  }
};
