const { Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, embedLength, EmbedBuilder, ButtonBuilder, ButtonStyle, Message, StringSelectMenuBuilder, AttachmentBuilder, MessageSelectMenu } = require('discord.js');
const dotenv = require('dotenv');



dotenv.config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        client.on("messageCreate", message => {

            const Anuncio = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Modpack Survival #1 \n \n _(Modeado 1.12.2)_')
                .setImage('https://cdn.discordapp.com/attachments/1065028049877348382/1072349024704806932/rgb.gif')
            const Anuncioboton = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel('Descargar')
                        .setURL("https://github.com/JEFTEDARIEL123/modpack/zipball/master/")
                        .setStyle(ButtonStyle.Link),
                ) 
            if (/assddaszxxxxdddcvzxxnopiqn3d45f/i.test(message.content)) {
                const channel = client.channels.cache.find(channel => channel.id === "1074320286079533188")
                channel.send({ embeds: [Anuncio], components: [Anuncioboton] });
                message.delete()
                console.log('[', '!'.green, ']', 'Anuncio enviado exitosamente por', message.author.username)
                const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                log.send('[ ! ] ' + 'Anuncio enviado exitosamente por ' + message.author.username);
    
            }
            if (/assddasasdasdasdasdaszxxxxdddc2dasdaxzvzxxnopiqn3d45f/i.test(message.content)) {
                const channeltest = client.channels.cache.find(channel => channel.id === "1065028049877348382")
                channeltest.send({ embeds: [Anuncio], components: [Anuncioboton] });
                message.delete()
                console.log('[', '!'.green, ']', 'Anuncio enviado exitosamente por', message.author.username)
                const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                log.send('[ ! ] ' + 'Anuncio enviado exitosamente por ' + message.author.username);
    
            }
        })
}}
