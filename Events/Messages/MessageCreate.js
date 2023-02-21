const { EmbedBuilder, RequestManager } = require('discord.js');
const Levels = require('discord.js-leveling');
const { execute } = require('../Client/ready');

module.exports = {
    name: 'MessageCreate',

    async execute(message) {
        if (!message.guild || message.author.bot) return;

        if (message.content.lenght < 3) return;

        const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; //min1 max30
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);

        if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id);

            const levelEmbed = new EmbedBuilder()
                .setTitle('¡Subiste de Nivel!')
                .setDescription(`Felicidades ${message.author} Subiste al nivel **${user.level + 1}**!`)
                .setColor('Random')
                .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
            const sendEmbed = await message.channel.send({embeds: [embed]})
            sendEmbed.react('⚡')
        }
    }
}