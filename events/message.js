const Discord = require("discord.js");
const { prefix, ownerID } = require("../config.json");
const { guildOnly, dmOnly } = require("../modules/Errors");

module.exports = (client, message) => {
    // EMBED
    const embed = new Discord.RichEmbed()
        .setColor("BLUE");

    // CHECKS
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    // Transforms the cmd's name to lower case. e.g. "USERINFO" transforms into "userinfo"
    // You literally can do uSeRiNFo without problems.
    const commandName = args.shift().toLowerCase();

    // GET COMMAND
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)); // Gets CMD names + aliases
    if (!command) return;

    // FEATURES

    // Only usable in servers.
    if (command.guildOnly) {
        if (message.channel.type === "dm") return guildOnly();
    }

    if (command.dmOnly) {
        if (message.channel.type === "text") return dmOnly();
    }

    // More like a Mod-Role.
    if (command.permLevel === 4) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
    }

    // More like a role with Admin perms.
    if (command.permLevel === 5) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
    }

    // Guild Owner.
    if (command.permLevel === 6) {
        if (message.author.id !== message.guild.ownerID) return;
    }
    
    // You.
    if (command.permLevel === 10) {
        if (message.author.id !== ownerID) return;
    }

    // Using [permLevel: 10] to protect very dangerous commands like eval, is very important. You don't want anyone
    // to snitch into your pc and have full access through a bot.

    if (command.args && !args.length) {
        embed.setTitle(`Didn't find arguments for that command!`);
        if (command.usage) {
            embed.setDescription(`The right usage would be: \`${prefix}${command.name} ${command.usage}\``);
            embed.setFooter("<> means obligatory, [] means optional");
        }
        return message.channel.send({ embed });
    }

    // EXECUTE COMMAND
    try {
        command.execute(client, message, args);
        client.logger.cmd(`${message.author.tag} has used ${commandName}`);
    }
    catch (e) {
        console.error(e);
        client.errors.cmdError(message);
    }
};