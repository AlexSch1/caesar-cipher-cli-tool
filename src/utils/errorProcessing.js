const chalk = require('chalk');

module.exports = (message) => {
    console.log(chalk.red(message));
    process.exit();
}
