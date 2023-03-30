const { SlashCommandBuilder, ModalBuilder,ActionRowBuilder, TextInputBuilder, TextInputStyle, Embedbuilder, PermissionFlagsBits, Embed, client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('confesion')
		.setDescription('Cuenta una historia de forma Anonima en el servidor.'),
		async execute(interaction) {		
		    const modal = new ModalBuilder()
				.setCustomId('confesion')
				.setTitle('Cuenta una historia Anonima.');

			const descinput = new TextInputBuilder()
				.setCustomId('descinput')
				.setLabel("Cuenta tu historia.")
				.setMaxLength(2500)
				.setStyle(TextInputStyle.Paragraph);

			const firstActionRow = new ActionRowBuilder().addComponents(descinput);

			modal.addComponents(firstActionRow);

			await interaction.showModal(modal);
		},		
};
