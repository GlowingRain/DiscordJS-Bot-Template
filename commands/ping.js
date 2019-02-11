const Discord = require('discord.js');
const category = require('../storage/categories.json');

module.exports = {
    /* CMD INFORMATION */
    name: 'ping',
    aliases: ["pong", "pango", "pingo", "pongo"],
    description: "Shows the bot's ping.",
    category: category[1],

    /* CODE */
    execute(client, message, args) {
        let msgping1 = new Date();
        let botping = new Date() - message.createdAt;
	let msgping2 = new Date() - msgping1;

        message.channel.send(`Calculating!`).then(msg => {
            msg.edit(`❤️ ${Math.round(botping)}ms\n⌚️ ~${Math.round(msgping2)}ms`)
        })
    
    },
};
