const { Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, embedLength, EmbedBuilder, ButtonBuilder, ButtonStyle, Message, StringSelectMenuBuilder, AttachmentBuilder, MessageSelectMenu } = require('discord.js');
const dotenv = require('dotenv');
const notify = require('./notify');


dotenv.config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        client.on("messageCreate", message => {

            const Anuncio = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('IP y Modpack Java 1.16.5')
                .setDescription('```mc.karmafans.xyz```')
            const Anuncioboton = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel('Descargar')
                        .setURL("https://www.mediafire.com/file/ike6w9js188e408/mods_y_nada_mas_que_mod.rar/file")
                        .setStyle(ButtonStyle.Link),
                )
            if (/assddaszxxxxdddcvzxxnopiqn3d45f/i.test(message.content)) {
                const channel = client.channels.cache.find(channel => channel.id === "1074320286079533188")
                const channeltest = client.channels.cache.find(channel => channel.id === "1065028049877348382")
                channel.send({ embeds: [Anuncio], components: [Anuncioboton] });
                message.delete()
                console.log('[', '!'.green, ']', 'Anuncio enviado exitosamente por', message.author.username)
                const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                log.send('[ ! ] ' + 'Anuncio enviado exitosamente por ' + message.author.username);
    
            }
        })
}}
