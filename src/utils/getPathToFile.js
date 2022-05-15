const path = require('path');

module.exports = (pathStr) =>
  path.normalize(path.resolve(pathStr.replace(/['|"]/gi, '')));
