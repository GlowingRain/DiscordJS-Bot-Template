const Discord = require("discord.js");

module.exports.cmdError = (message) => {
    let cmdEmbed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("¡Ups!")
        .setDescription("**Ha ocurrido un error al ejecutar el comando...**")
        .setFooter("Si el problema persiste, por favor repórtalo.");

    message.channel.send(cmdEmbed);
}

module.exports.noPerms = (message) => {
    let Denied = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("¡Ups!")
        .setDescription("**No tienes acceso a esto...**")
    message.channel.send(Denied).then(m => m.delete(2000));
};

module.exports.guildOnlyCMD = (message) => {
    let GuildOnly = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("¡Ups!")
        .setDescription("**No puedes usar este comando en mis mensajes privados...**")

    message.channel.send(GuildOnly);
};

module.exports.MissingLogChannel = (message) => {
    let MissingEmbed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("¡Ups!")
        .setDescription("**No he podido encontrar el canal de logs...**")
        .setFooter("Si el problema persiste, por favor repórtalo.");
    message.channel.send(MissingEmbed);
}

module.exports.SelfError = (message) => {
    let selfEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setDescription("**Estaría orgullosa de hacerte cosas, pero no creo que así funcionen las cosas...**");
    return message.channel.send(selfEmbed);
}

module.exports.MissingUser = (message) => {
    let selfEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setDescription("**Estaría orgullosa de hacerte cosas, pero no creo que así funcionen las cosas...**");
    return message.channel.send(selfEmbed);
}