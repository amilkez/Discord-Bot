const { prefix } = require('../config.json');

module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        if (command === 'ping') {
            message.channel.send('Pong.');
        } else if (command === 'args-info') {
            if (!args.length) {
                return message.channel.send(
                    `You didn't provide any arguments, ${message.author}!`
                );
            }

            message.channel.send(
                `Command name: ${command}\nArguments: ${args}`
            );
        }
    },
};
