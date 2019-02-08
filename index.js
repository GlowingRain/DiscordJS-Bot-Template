/*
*   Main file, used to create the client and define
*   some values. The token is located at "./config.json" 
*/

const Discord = require("discord.js");
const client = new Discord.Client();
const { token } = require("./config.json");

const { readdirSync } = require("fs");

client.logger = require("./modules/Logger"); // Require Logger for logging things, obviously.

// Handlers

client.events = new Discord.Collection(); // Creates the collection of events.

const eventFiles = readdirSync('./events/').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
}; // EVENT HANDLER


client.commands = new Discord.Collection(); // Creates the collection of commands.

const commandFiles = readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    client.logger.load(`Cargando CMD - ${command.name}`);
} // COMMAND HANDLER

client.login(token);