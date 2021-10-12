const {
    MessageActionRow,
    MessageSelectMenu,
    MessageEmbed,
} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('selectmenu')
        .setDescription('Use of a select menu'),

    async execute(interaction) {
        // const selectMenuId = interaction.customId;
        // const selectMenu = interaction.client.selectMenu.get(selectMenuId);

        const row = new MessageActionRow().addComponents(
            new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('Select an option')
                // .setMinValues(2)
                // .setMaxValues(3)
                .addOptions([
                    {
                        label: 'Select me',
                        description: 'This is the option description',
                        value: 'first_option',
                    },
                    {
                        label: 'You can select me too',
                        description: 'This is also the option description',
                        value: 'second_option',
                    },
                ])
        );

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setDescription('Embed description here');

        await interaction.reply({
            content: 'Select an option!',
            embeds: [embed],
            components: [row],
            ephemeral: false,
        });

        // if (interaction.customId === 'select') {
        //     await interaction.update({
        //         content: 'something was selected',
        //         components: [],
        //     });
        // }
    },
};

//https://discordjs.guide/interactions/select-menus.html#updating-the-select-menu-s-message
