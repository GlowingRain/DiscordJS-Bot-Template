const { prefix } = require("../config.json");
const channels = require("../storage/channels.json");

const chalk = require("chalk"); // For practical logging... and some styling.

module.exports = (client) => {
    try {
        for (const key in prefix) {
            if (prefix.hasOwnProperty(key)) {
                const value = prefix[key];
                client.logger.setup(`Prefix -` + ` ${chalk.black.bgGreen(value)}`);
            }
        }

        for (const key in channels) {
            if (channels.hasOwnProperty(key)) {
                const value = channels[key];
                client.logger.setup(`Channels - ${key}:` + ` ${chalk.black.bgGreen(value)}`);
            }
        }

        client.logger.ready(`${client.user.tag} is now up and running!`);
    }
 catch (e) {
        console.log(e);
    }
};