const { Console } = require('console');

const logError = new Console({
  stdout: process.stdout,
  stderr: process.stderr,
  colorMode: true,
});

module.exports = (message) => {
  logError.error('\033[31m' + message, '\x1b[0m');
  process.exit(1);
};
