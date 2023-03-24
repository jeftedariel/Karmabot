const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Levels = require('discord.js-leveling');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('top')
		.setDescription('Muestra el top XP del discord'),
	async execute(interaction, client) {

        const { guildId } = interaction;

		const rawLeaderboard = await Levels.fetchLeaderboard(guildId, 10)

		if (rawLeaderboard.length < 1) return interaction.reply('Aun no hay nadie en el top');

		const embed = new EmbedBuilder();

		const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);

		const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\n nivel: ${e.level}\n XP: ${e.xp.toLocalString()}.` )

		embed.setTitle('Top Karmafans').setDescription(lb.join('\n\n')).setColor('random').setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });

		return interaction.reply({ embeds: [embed]});
	},
};