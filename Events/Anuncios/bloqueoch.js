const { Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, embedLength, EmbedBuilder, ButtonBuilder, ButtonStyle, Message, StringSelectMenuBuilder, AttachmentBuilder, MessageSelectMenu } = require('discord.js');
const dotenv = require('dotenv');
const notify = require('./notify');


dotenv.config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        client.on("messageCreate", message => {

            const Cerrado = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Aviso')
                .setDescription('Se ha cerrado los canales temporalmente debido a la actitud de algunos usuarios, en un rato volverá a estar abierto al publico.')
                .setImage('https://media.tenor.com/eZOZrY0myDcAAAAd/pato-girando.gif')
                .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
            if (/asdxczb6452ce51/i.test(message.content)) {
                const channel = client.channels.cache.find(channel => channel.id === "1058921412632518754")
                channel.send({ embeds: [Cerrado] });
                //message.author.send({ embeds: [Anuncio] }).catch(console.error)
                message.delete()
                console.log('[', '!'.green, ']', 'Anuncio enviado exitosamente por', message.author.username)
                const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                log.send('[ ! ] ' + 'Anuncio enviado exitosamente por ' + message.author.username);
            }
        })
}}