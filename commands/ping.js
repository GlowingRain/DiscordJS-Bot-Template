const category = require('../storage/categories.json');

module.exports = {
    // CMD INFORMATION
    name: 'ping',
    aliases: ["ping"],
    description: "Shows the bot's ping.",
    category: category[1],

    // THE ACTUAL CODE
    execute(client, message, args) {
        const msgping1 = new Date();
        const botping = new Date() - message.createdAt;
        const msgping2 = new Date() - msgping1;

        message.channel.send(`Calculating!`).then(msg => {
            msg.edit(`❤️ ${Math.round(botping)}ms\n⌚️ ~${Math.round(msgping2)}ms`);
        });

    },
};
