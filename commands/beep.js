const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('beep')
        .setDescription('Replies with pong and a button.'),
    async execute(interaction) {
        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('primary')
                .setLabel('Primary')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('secondary')
                .setLabel('Secondary')
                .setStyle('SECONDARY')
                .setDisabled(false),
            new MessageButton()
                .setCustomId('Success')
                .setLabel('Success')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('danger')
                .setLabel('Danger')
                .setStyle('DANGER'),
            new MessageButton()
                .setLabel('Link')
                .setStyle('LINK')
                .setURL('https://twitter.com/Amilkez')
        );

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Embed')
            .setURL('https://twitter.com/Amilkez')
            .setDescription('Sends my twitter link');

        await interaction.reply({
            content: 'boop!',
            components: [row],
            embeds: [embed],
        });
    },
};

// https://discordjs.guide/interactions/buttons.html#buttons