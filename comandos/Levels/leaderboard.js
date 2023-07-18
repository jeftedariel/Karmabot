const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Levels = require('discord.js-leveling');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('top')
		.setDescription('Muestra el top XP del discord'),
	async execute(interaction) {

        const { guildId, client } = interaction;

		const rawLeaderboard = await Levels.fetchLeaderboard(guildId, 10)

		if (rawLeaderboard.length < 1) return interaction.reply('Aun no hay nadie en el top');

		const embed = new EmbedBuilder();

		const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);

		const lb = leaderboard.map(e => `<a:xp:1095199505986629714> ${e.position}. ${e.username}\n Nivel: ${e.level}\n XP: ${e.xp}` )

		embed.setTitle('Top Karmafans').setDescription(lb.join('\n\n')).setColor('Random').setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });

		return interaction.reply({ embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 10000));
	},
};
