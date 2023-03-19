const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder, ModalBuilder,ActionRowBuilder, TextInputBuilder, TextInputStyle, Embedbuilder, PermissionFlagsBits, Embed, client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anuncio')
		.setDescription('De uso administrativo.')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),


	async execute(interaction) {
			const modal = new ModalBuilder()
				.setCustomId('anunciom')
				.setTitle('Crea un Anuncio en este canal');


			const titleinput = new TextInputBuilder()
				.setCustomId('titleinput')
				.setLabel("Coloca un Titulo, Ej: Anuncio, Evento, etc.")
				.setStyle(TextInputStyle.Short)
				.setMaxLength(20);

			const descinput = new TextInputBuilder()
				.setCustomId('descinput')
				.setLabel("Redacta tu mensaje.")
				.setMaxLength(3500)
				.setStyle(TextInputStyle.Paragraph);

			const firstActionRow = new ActionRowBuilder().addComponents(titleinput);
			const secondActionRow = new ActionRowBuilder().addComponents(descinput);

			modal.addComponents(firstActionRow, secondActionRow);

			await interaction.showModal(modal);
		
		},
		
};
