const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const ip = new EmbedBuilder()
	.setTitle('Direccion del servidor')
	.setDescription('ks.holy.gg:25781')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ip')
		.setDescription('Muestra la ip del servidor'),
	async execute(interaction) {
		return interaction.reply({embeds: [ip]});
	},
};