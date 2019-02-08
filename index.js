/*
*   Main file, used to create the client and define
*   some values.
*/

const Discord = require("discord.js");
const client = new Discord.Client();

const { token } = require("./config.json");

const fs = require("fs");

// Client properties

client.logger = require("./modules/Logger.js"); // Require Logger for logging things, obviously.
client.errors = require("./modules/Errors.js"); // Errors...

// Handlers

client.events = new Discord.Collection(); // Creates the collection of events.

const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.logger.event(`Loading EVT - ${eventName}`)
    client.on(eventName, event.bind(null, client));
}; // EVENT HANDLER


client.commands = new Discord.Collection(); // Creates the collection of commands.

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    client.logger.load(`Loading CMD - ${command.name}`);
} // COMMAND HANDLER

client.login(token);