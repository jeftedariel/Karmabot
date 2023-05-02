const {Client, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits} = require('discord.js')
const dotenv = require('dotenv');
dotenv.config();

const openticket = process.env.OPTICKET
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('Activa el sistema de Tickets')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

    async execute(interaction) {
        const {guild} = interaction;
        const embed = new EmbedBuilder()
            .setDescription('Tickets 🎫')
            .setColor('Blue')
            .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
        
        const button = new ActionRowBuilder().setComponents(
            new ButtonBuilder().setCustomId('reportar').setLabel('Reportar Usuario').setStyle(ButtonStyle.Danger).setEmoji('⚠️'),
            new ButtonBuilder().setCustomId('bugs').setLabel('Bugs').setStyle(ButtonStyle.Primary).setEmoji('🔧'),
            new ButtonBuilder().setCustomId('otro').setLabel('Otro').setStyle(ButtonStyle.Success).setEmoji('📦'),
        );

        await guild.channels.cache.get(openticket).send({
            embeds: ({embed}),
            components:[ button ]
        });

        interaction.reply({ content: 'Se han activado los tickets.'})


    }
}