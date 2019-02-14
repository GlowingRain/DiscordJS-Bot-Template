module.exports = {
    // CMD INFORMATION
    name: 'ping',
    aliases: ["pong"],
    description: "Shows the bot's ping.",
    category: "Information",

    // THE ACTUAL CODE
    execute(client, message) {
        const msgping1 = new Date();
        const botping = new Date() - message.createdAt;
        const msgping2 = new Date() - msgping1;

        message.channel.send(`Calculating!`).then(msg => {
            msg.edit(`❤️ ${Math.round(botping)}ms\n⌚️ ~${Math.round(msgping2)}ms`);
        });

    },
};
