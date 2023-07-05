const { EmbedBuilder } = require('@discordjs/builders');
const {SlashCommandBuilder, Embedbuilder, PermissionFlagsBits, Embed} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ip')
    .setDescription('Ip Karmafans.')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    
        async execute(interaction) {
            const {channel} = interaction;

            const embed = new EmbedBuilder()
                .setDescription('IP: \n ```mc.karmafans.xyz``` \n Puerto BedrocK: \n ```25565``` \n Version: \n ```1.16.5 - 1.20.x```')
                .setColor(0x0099FF)
                .setTimestamp()
                .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });

            await interaction.reply({ embeds:[embed] });
        }   
}