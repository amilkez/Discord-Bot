const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!')
        .addStringOption((option) =>
            option.setName('input').setDescription('Enter a string')
        )
        .addIntegerOption((option) =>
            option.setName('int').setDescription('Enter an integer')
        )
        .addNumberOption((option) =>
            option.setName('num').setDescription('Enter a number')
        )
        .addBooleanOption((option) =>
            option.setName('choice').setDescription('Select a boolean')
        )
        .addUserOption((option) =>
            option.setName('target').setDescription('Select a user')
        )
        .addChannelOption((option) =>
            option.setName('destination').setDescription('Select a channel')
        )
        .addRoleOption((option) =>
            option.setName('muted').setDescription('Select a role')
        )
        .addMentionableOption((option) =>
            option.setName('mentionable').setDescription('Mention something')
        ),
    async execute(interaction) {
        const wait = require('util').promisify(setTimeout);
        const string = interaction.options.getString('input');
        const integer = interaction.options.getInteger('int');
        const number = interaction.options.getNumber('num');
        const boolean = interaction.options.getBoolean('choice');
        const user = interaction.options.getUser('target');
        const member = interaction.options.getMember('target');
        const channel = interaction.options.getChannel('destination');
        const role = interaction.options.getRole('muted');
        const mentionable = interaction.options.getMentionable('mentionable');

        await interaction.reply('Pong!');
        await interaction.editReply('Pong again!');
        await interaction.followUp('Pongies!');
        await wait(500);
        // await interaction.followUp(
        //     string +
        //         integer +
        //         number +
        //         boolean +
        //         user +
        //         member +
        //         channel +
        //         role +
        //         mentionable
        // );
        const message = await interaction.fetchReply();
        // console.log(message);
        await wait(1000);
        await interaction.deleteReply();
    },
};

//for tasks that take  longer to execute use interaction.deferReply() instead of responding to them initially
// use interaction.followUp() for more than one response
// ephemeral true is usable on both of above actions
