const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prueba')
		.setDescription('Formulario de prueba'),
		async execute(interaction) {		
			
		},		
};