const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Select a member and kick them (but not really).')
        .addUserOption((option) =>
            option.setName('target').setDescription('The member to kick')
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('target');

        if (!user) {
            return interaction.reply({
                content: 'You have to select a target to kick an user',
                ephemeral: true,
            });
        }

        // user.kick();
        return interaction.reply({
            content: `You kicked: ${user.username}`,
            ephemeral: true,
        });
    },
};
