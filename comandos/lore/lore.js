const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lore')
		.setDescription('Crea el lore de tu personaje y compartelo.'),
		async execute(interaction) {		
			
		},		
};