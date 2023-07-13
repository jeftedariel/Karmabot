const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, Embed, client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Envia un mensaje como Karmabot.')
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
		.addStringOption(option =>
			option.setName('msg')
				.setDescription('mensaje a enviar')
				.setRequired(true)
		),
	async execute(interaction) {
			const {channel, options} = interaction;
		    const mensaje = options.getString('msg');
            
			const embed = new EmbedBuilder()
				.setDescription(mensaje);
			
			await channel.send({ embeds: [embed] });
			await interaction.reply({content: "⚡", ephemeral: true})

	}
};
