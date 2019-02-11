const Discord = require("discord.js");
const category = require("../storage/categories.json");
const tools = require("../modules/Tools.js");
const { prefix } = require('../config.json');

module.exports = {
    // CMD INFORMATION
    name: 'help',
    aliases: ["cmds", "halp", "cmds"],
    description: "Show's the commands of the bot",
    category: category[1],

    // THE ACTUAL CODE
    execute(client, message, args) {
        const embed = new Discord.RichEmbed()
            .setColor("BLUE");

        if (!args.length) {
            embed.setDescription(`Here are all my commands!`)
            embed.addField(category[1], `${tools.MapCategories(client, category, 1)}`, true);
            embed.setFooter(`You can do ${prefix}help [command] to see aditional info!`);
            return message.channel.send(embed) // Sends the embed with all the commands and their categories
        }

        const name = args[0].toLowerCase();
        const command = client.commands.get(name) || client.commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.channel.send("That's not a valid command!");
        }

        embed.setTitle(`Info about ${name}`)

        if (command.description) {
            embed.setDescription(command.description)
        } else {
            embed.setDescription("No description available.")
        }

        if (command.aliases) {
            embed.addField("Aliases", command.aliases.join(", "));
        }

        if (command.usage) {
            embed.addField("Usage", command.usage);
        }

        embed.setFooter("<> means required, [] means optional.")
        return message.channel.send(embed);
    },
};
