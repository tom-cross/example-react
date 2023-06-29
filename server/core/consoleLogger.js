const chalk = require('chalk')

const { log } = console

class ConsoleLogger {
  static info(message) {
    log(chalk.blue(chalk.bold(message)))
  }

  static warn(message) {
    log(chalk.yellowBright(chalk.bold(message)))
  }

  static error(message) {
    log(chalk.redBright(chalk.bold(message)))
  }

  static success(message) {
    log(chalk.green(chalk.bold(message)))
  }

  static verbose(message) {
    log(chalk.hex('#8b4ccf').bold(message))
  }
}

module.exports = ConsoleLogger
