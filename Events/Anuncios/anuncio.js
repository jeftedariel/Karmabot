const { Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, embedLength, EmbedBuilder, ButtonBuilder, ButtonStyle, Message, StringSelectMenuBuilder, AttachmentBuilder, MessageSelectMenu } = require('discord.js');
const dotenv = require('dotenv');



dotenv.config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {

        //============================
        //Anuncio con Everyone
        //============================

        client.on("messageCreate", message => {

            const Anuncio = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Mantenimiento')
                .setDescription('Hola Karmafans! \n \n El servidor va a estar en mantenimiento por aproximadamente una hora para cambiar algunos mods y tratar de mejorar los FPS de los jugadores.')
                .setImage('https://media.giphy.com/media/zDuStFVpRJIZ2/giphy.gif')
                .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
            const Anuncioboton = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel('Descargar')
                        .setURL("https://www.mediafire.com/file/ike6w9js188e408/mods_y_nada_mas_que_mod.rar/file")
                        .setStyle(ButtonStyle.Link),
                )
            if (/everyoneiaonc1938hdaoc1-qjdna/i.test(message.content)) {
                const channel = client.channels.cache.find(channel => channel.id === "1058921412632518748")
                const channeltest = client.channels.cache.find(channel => channel.id === "1065028049877348382")
                channel.send({ embeds: [Anuncio] });
                channel.send('@everyone');
                //channeltest.send({ embeds: [Anuncio], components: [Anuncioboton] });
                message.delete()
                console.log('[', '!'.green, ']', 'Anuncio enviado exitosamente por', message.author.username)
                const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                log.send('[ ! ] ' + 'Anuncio enviado exitosamente por ' + message.author.username);
    
            }
        })

        //============================
        //Anuncio Java
        //============================

        client.on("messageCreate", message => {

            const Anuncio = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Mantenimiento')
                .setDescription('Hola Karmafans! \n \n El servidor va a estar en mantenimiento por aproximadamente una hora para cambiar algunos mods y tratar de mejorar los FPS de los jugadores.')
                .setImage('https://media.giphy.com/media/zDuStFVpRJIZ2/giphy.gif')
                .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
            const Anuncioboton = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel('Descargar')
                        .setURL("https://www.mediafire.com/file/ike6w9js188e408/mods_y_nada_mas_que_mod.rar/file")
                        .setStyle(ButtonStyle.Link),
                )
            if (/Javaaposm110-3d8j4f9pw09qwjd1oi/i.test(message.content)) {
                const channel = client.channels.cache.find(channel => channel.id === "1058921412632518748")
                const channeltest = client.channels.cache.find(channel => channel.id === "1065028049877348382")
                channel.send({ embeds: [Anuncio] });
                channel.send('<@1072738166064287845>');
                //channeltest.send({ embeds: [Anuncio], components: [Anuncioboton] });
                message.delete()
                console.log('[', '!'.green, ']', 'Anuncio enviado exitosamente por', message.author.username)
                const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                log.send('[ ! ] ' + 'Anuncio enviado exitosamente por ' + message.author.username);
    
            }
        })


        //============================
        //Anuncio Bedrock
        //============================
        client.on("messageCreate", message => {

            const Anuncio = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Mantenimiento')
                .setDescription('Hola Karmafans! \n \n El servidor va a estar en mantenimiento por aproximadamente una hora para cambiar algunos mods y tratar de mejorar los FPS de los jugadores.')
                .setImage('https://media.giphy.com/media/zDuStFVpRJIZ2/giphy.gif')
                .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
            const Anuncioboton = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel('Descargar')
                        .setURL("https://www.mediafire.com/file/ike6w9js188e408/mods_y_nada_mas_que_mod.rar/file")
                        .setStyle(ButtonStyle.Link),
                )
            if (/Bedrockasdoqindoqnid3asda122/i.test(message.content)) {
                const channel = client.channels.cache.find(channel => channel.id === "1058921412632518748")
                const channeltest = client.channels.cache.find(channel => channel.id === "1065028049877348382")
                channel.send({ embeds: [Anuncio] });
                channel.send('<@1072738200906387496>');
                //channeltest.send({ embeds: [Anuncio], components: [Anuncioboton] });
                message.delete()
                console.log('[', '!'.green, ']', 'Anuncio enviado exitosamente por', message.author.username)
                const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                log.send('[ ! ] ' + 'Anuncio enviado exitosamente por ' + message.author.username);
    
            }
        })    

        //============================
        //Anuncio Discord
        //============================

        client.on("messageCreate", message => {

            const Anuncio = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Mantenimiento')
                .setDescription('Hola Karmafans! \n \n El servidor va a estar en mantenimiento por aproximadamente una hora para cambiar algunos mods y tratar de mejorar los FPS de los jugadores.')
                .setImage('https://media.giphy.com/media/zDuStFVpRJIZ2/giphy.gif')
                .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
            const Anuncioboton = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel('Descargar')
                        .setURL("https://www.mediafire.com/file/ike6w9js188e408/mods_y_nada_mas_que_mod.rar/file")
                        .setStyle(ButtonStyle.Link),
                )
            if (/discordaofinj3oinf3oinalkmasfq3d/i.test(message.content)) {
                const channel = client.channels.cache.find(channel => channel.id === "1058921412632518748")
                const channeltest = client.channels.cache.find(channel => channel.id === "1065028049877348382")
                channel.send({ embeds: [Anuncio] });
                channel.send('<@1072738044718886952>');
                //channeltest.send({ embeds: [Anuncio], components: [Anuncioboton] });
                message.delete()
                console.log('[', '!'.green, ']', 'Anuncio enviado exitosamente por', message.author.username)
                const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                log.send('[ ! ] ' + 'Anuncio enviado exitosamente por ' + message.author.username);
    
            }
        })
}}	






    
