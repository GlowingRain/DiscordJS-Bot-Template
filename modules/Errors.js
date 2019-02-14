const Discord = require("discord.js");

// Command ERROR
module.exports.cmdError = (message) => {
    const cmdEmbed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("Oops!")
        .setDescription("**There was a problem running that command.**");

    message.channel.send(cmdEmbed);
};

// Insufficient Permissions
module.exports.noPerms = (message) => {
    const Denied = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("Oops!")
        .setDescription("**You can't do this!**");
    message.channel.send(Denied).then(m => m.delete(2000));
};

// Only usable in SERVERS
module.exports.guildOnly = (message) => {
    const GuildOnly = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("Oops!")
        .setDescription("**You cannot use that here pal!**");

    message.channel.send(GuildOnly);
};

// Only usable in DIRECT MESSAGES (DM)
module.exports.dmOnly = (message) => {
    const dmOnly = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("Oops!")
        .setDescription("**You cannot use that here pal!**");

    message.channel.send(dmOnly);
};

// Missing a log channel
module.exports.MissingLogChannel = (message) => {
    const MissingEmbed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("Oops!")
        .setDescription("**I couldnt find the logs channel for the solicited request.**");

    message.channel.send(MissingEmbed);
};

// Tried to use a command towards themselves.
module.exports.SelfError = (message) => {
    const selfEmbed = new Discord.RichEmbed()
        .setColor("RED")
        .setDescription("**I don't think that is how things work...**");
    return message.channel.send(selfEmbed);
};