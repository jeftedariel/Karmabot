const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Calcula tu latencia con Karmafans'),
	async execute(interaction) {
        const sent = await interaction.reply({ content: 'Determinando Latencia...', fetchReply: true });
        interaction.editReply(`Tu ping con Karmafans es de: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
	},
};