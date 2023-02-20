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
                .setTitle('Anuncio')
                .setDescription('Hola Karmafans! \n \n Se ha desarrollado un nuevo canal llamado <#1072303969768046652> \n \n En el podrán elegir algunos roles, se estarán integrando categorias en este canal en el transcurso de los dias, cualquier error o bug con Karmabot pueden enviarle un DM a <@370373584755097601>.')
                .setImage('https://media.giphy.com/media/BdZJKjOM2CKqIklqnH/giphy.gif')
                .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
            const Anuncioboton = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel('Descargar')
                        .setURL("https://www.mediafire.com/file/ike6w9js188e408/mods_y_nada_mas_que_mod.rar/file")
                        .setStyle(ButtonStyle.Link),
                )
            if (/7346sdaksasdsbggedaiub52536/i.test(message.content)) {
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
}}	
    
    
