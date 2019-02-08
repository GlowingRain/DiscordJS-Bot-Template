/*
* Logger copied and pasted from Guide Bot (AnIdiotsGuide).
* Modified by Xem, just added a few more cases to the logger itself.
*/

const chalk = require("chalk");
const moment = require("moment");

exports.log = (content, type = "log") => {
  const timestamp = `[${moment().format("DD-MM-YYYY HH:mm:ss")}]:`;
  switch (type) {
    case "log": {
      return console.log(`${timestamp} ${chalk.bgBlue(type.toUpperCase())} ${content} `);
    }
    case "warn": {
      return console.log(`${timestamp} ${chalk.black.bgYellow(type.toUpperCase())} ${content} `);
    }
    case "error": {
      return console.log(`${timestamp} ${chalk.bgRed(type.toUpperCase())} ${content} `);
    }
    case "debug": {
      return console.log(`${timestamp} ${chalk.green(type.toUpperCase())} ${content} `);
    }
    case "cmd": {
      return console.log(`${timestamp} ${chalk.black.bgWhite(type.toUpperCase())} ${content}`);
    }
    case "ready": {
      return console.log(`${timestamp} ${chalk.black.bgGreen(type.toUpperCase())} ${content}`);
    }
    case "load": {
      return console.log(`${timestamp} ${chalk.bgMagenta(type.toUpperCase())} ${content} `);
    }
    case "client": {
      return console.log(`${timestamp} ${chalk.bgCyan(type.toUpperCase())} ${content} `);
    }
    default: throw new TypeError("Logger type must be either warn, debug, log, ready, client, cmd or error.");
  }
}; 

exports.error = (...args) => this.log(...args, "error");

exports.warn = (...args) => this.log(...args, "warn");

exports.debug = (...args) => this.log(...args, "debug");

exports.cmd = (...args) => this.log(...args, "cmd");

exports.ready = (...args) => this.log(...args, "ready");

exports.load = (...args) => this.log(...args, "load");

exports.client = (...args) => this.log(...args, "client");