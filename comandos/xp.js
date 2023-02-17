const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Levels = require('discord.js-leveling');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('xp')
		.setDescription('Muestra la xp y cantidad de puntos')
		.addUserOption(option =>
			option.setName('usuario')
				.setDescription('Elige un Usuario')
		),
	async execute(interaction) {

        const { options, guildId, user } = interactions;

		const member = options.getMember('usuario') || user;

		const levelUser = await Levels.fetch(member.id, guildId);

		const embed = new EmbedBuilder();

		if (!levelUser) return interaction.reply({ content: 'Parece que aun no tienes XP', ephemeral: true });
        
		embed.setDescription(`El usuario ${member.tag} actualmente es nivel ${levelUser.level} y tiene ${levelUser.xp.toLocalString()} xp.`)
			.setColor('random').setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });

		return interaction.reply({ embeds: [embed]});
	},
};