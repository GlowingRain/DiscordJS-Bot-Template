module.exports.randomValue = (array) => {
    return array[Math.random() * array.length | 0];
};

module.exports.MapCategories = (client, category) => {
    return client.commands.filter(cmd => cmd.category === category).map(cmd => cmd.name).join(", ");
};