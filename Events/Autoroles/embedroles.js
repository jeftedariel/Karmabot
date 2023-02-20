const { Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, embedLength, EmbedBuilder, ButtonBuilder, ButtonStyle, Message, StringSelectMenuBuilder, AttachmentBuilder, MessageSelectMenu } = require('discord.js');
const dotenv = require('dotenv');
const notify = require('./notify');


dotenv.config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
client.on("messageCreate", message => {
    const paisesembed = new EmbedBuilder()
        .setColor(15548997)
        .setTitle('¡Países!')
        .setDescription('Selecciona tu pais para recibir el rol')
        .setImage('https://cdn.discordapp.com/attachments/1065028049877348382/1072349024704806932/rgb.gif')
    const paises = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('paises')
                .setPlaceholder('-> Click aqui <-')
                .addOptions(
                    {
                        label: 'Estados unidos',
                        value: 'us_option',
                        emoji: {
                            name: '🇺🇸'
                        },
                    },
                    {
                        label: 'México',
                        value: 'mx_option',
                        emoji: {
                            name: '🇲🇽'
                        },
                    },
                    {
                        label: 'Guatemala',
                        value: 'gt_option',
                        emoji: {
                            name: '🇬🇹'
                        },
                    },
                    {
                        label: 'Honduras',
                        value: 'hn_option',
                        emoji: {
                            name: '🇭🇳'
                        },
                    },
                    {
                        label: 'El Salvador',
                        value: 'sv_option',
                        emoji: {
                            name: '🇸🇻'
                        },
                    },
                    {
                        label: 'Nicaragua',
                        value: 'ni_option',
                        emoji: {
                            name: '🇳🇮'
                        },
                    },
                    {
                        label: 'Costa Rica',
                        value: 'cr_option',
                        emoji: {
                            name: '🇨🇷'
                        },
                    },
                    {
                        label: 'Panamá',
                        value: 'pa_option',
                        emoji: {
                            name: '🇵🇦'
                        },
                    },
                    {
                        label: 'Colombia',
                        value: 'co_option',
                        emoji: {
                            name: '🇨🇴'
                        },
                    },
                    {
                        label: 'Venezuela',
                        value: 've_option',
                        emoji: {
                            name: '🇻🇪'
                        },
                    },
                    {
                        label: 'Ecuador',
                        value: 'ec_option',
                        emoji: {
                            name: '🇪🇨'
                        },
                    },
                    {
                        label: 'Perú',
                        value: 'pe_option',
                        emoji: {
                            name: '🇵🇪'
                        },
                    },
                    {
                        label: 'Bolivia',
                        value: 'bo_option',
                        emoji: {
                            name: '🇧🇴'
                        },
                    },
                    {
                        label: 'Paraguay',
                        value: 'py_option',
                        emoji: {
                            name: '🇵🇾'
                        },
                    },
                    {
                        label: 'Uruguay',
                        value: 'uy_option',
                        emoji: {
                            name: '🇺🇾'
                        },
                    },
                    {
                        label: 'Chile',
                        value: 'cl_option',
                        emoji: {
                            name: '🇨🇱'
                        },
                    },
                    {
                        label: 'Argentina',
                        value: 'ar_option',
                        emoji: {
                            name: '🇦🇷'
                        },
                    },
                    {
                        label: 'España',
                        value: 'es_option',
                        emoji: {
                            name: '🇪🇸'
                        },
                    },
                ),
        );
        const pingsembed = new EmbedBuilder()
        .setColor(15844367)
        .setTitle('¡Notificaciones!')
        .setDescription('Selecciona las notificaciones que quieras recibir')
        .setImage('https://cdn.discordapp.com/attachments/1065028049877348382/1072349024704806932/rgb.gif')
    const pings = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('pings')
                .setPlaceholder('-> Click aqui <-')
                .addOptions(
                    {
                        label: 'Minecraft Java',
                        description: 'Pings sobre el srv de MC Java',
                        value: 'mcnotify_option',
                        emoji: {
                            name: 'java',
                            id: '1075610263098773524'
                        },
                    },
                    {
                        label: 'Minecraft Bedrock',
                        value: 'bdnotify_option',
                        description: 'Pings sobre el srv de MC Bedrock',
                        emoji: {
                            name: 'bedrock',
                            id: '1075610220987941004'
                        },
                    },
                    {
                        label: 'Discord',
                        value: 'dcnotify_option',
                        description: 'Pings sobre este Discord y Karmabot',
                        emoji: {
                            name: 'discord',
                            id: '1075610298473517167'
                        },
                    },
                ),
        );
    if (/gwegwwawd12edaW5y325wdgh54/i.test(message.content)) {
        const channel = client.channels.cache.find(channel => channel.id === "1072303969768046652")
        channel.send({ embeds: [pingsembed], components: [pings] });
        channel.send({ embeds: [paisesembed], components: [paises] });
        message.delete()
        console.log('[', '!'.green, ']', 'Menu enviado exitosamente por', message.author.username)
        const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
        log.send('[ ! ] ' + 'Menu enviado exitosamente por ' + message.author.username);
    }
})
}}