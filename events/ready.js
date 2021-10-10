const { prefix } = require('../config.json');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`${client.user.tag} is ready!`);
        client.user.setActivity(`${prefix}help || Amilkez is Coding me...`);
    },
};
