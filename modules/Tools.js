module.exports.getUserFromMention = (client, mention) => {
    if (!mention) return;
    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);
        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }
        return client.users.get(mention);
    }
};

module.exports.getUserFromMentionRegex = (client, mention) => {
    const matches = mention.match(/^<@!?(\d+)>$/);
    const id = matches[1];
    return client.users.get(id);
};

module.exports.randomValue = (array) => {
    return array[Math.random() * array.length | 0];
};

module.exports.MapCategories = (client, category, number) => {
    return client.commands.filter(cmd => cmd.category === category[number]).map(cmd => cmd.name).join(", ");
}