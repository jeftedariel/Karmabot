const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hola')
		.setDescription('Se vienen cositas'),
	async execute(interaction) {
		return interaction.reply({ content: 'Se vienen cositas...👀', ephemeral: true });
	},
};