const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anuncio')
		.setDescription('De uso administrativo.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {

	},
};