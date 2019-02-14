/*
*   Main file, used to create the client and define
*   some values.
*/

const Discord = require("discord.js");
const client = new Discord.Client();

const { token } = require("./config.json");

const fs = require("fs");
const glob = require("glob");

client.logger = require("./modules/Logger.js");
client.errors = require("./modules/Errors.js");
client.tools = require("./modules/Tools.js");

/*
** Here I have made the events and the commands a collection, those are the
** handlers the bot will need to function correctly.
*/

// Event Handler
client.events = new Discord.Collection();

const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.logger.event(`Loading EVT - ${eventName}`);
    client.on(eventName, event.bind(null, client));
}

// Command Handler
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    client.logger.load(`Loading CMD - ${command.name}`);
}

client.login(token);