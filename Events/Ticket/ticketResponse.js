const { ChannelType, ButtonInteraction, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits, MembershipScreeningFieldType, Embed} = require('discord.js')
const ticketSchema = require('../../Models/Ticket');
const { mapReduce } = require('discord.js-leveling/models/levels');
const everyone = process.env.EVERYONE
const cticket = process.env.CTICKET
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    name: 'InteractionCreate',
    
    async execute(interaction) {
        const { guild, member, customId, channel } = interaction;
        const { ViewChannel, SendMessages, ManageChannels, ReadMessageHistory } = PermissionFlagsBits;
        const ticketId = Math.floor(Math.random() * 9000) + 10000;

        if (!interaction.isButton()) return;

        if(!['reportar', 'bugs', 'otro'].includes(customId)) return;

        if (!guild.members.me.permission.has(ManageChannels))
            interaction.reply({ content: 'No tengo permiso para hacer eso.', ephemeral: true});

        try{
            
            await guild.channels.create({
                name: `${member.user.username}-ticket${ticketId}`,
                type: ChannelType.GuildText,
                parent: cticket,
                permissionOverwrites: [
                    {
                        id: everyone,
                        deny: [ViewChannel, SendMessages, ReadMessageHistory],
                    },
                    {
                        id: member.id,
                        allow: [ViewChannel, SendMessages, ReadMessageHistory],
                    },
                ],
            }).then(async (channel) => {
                const newTicketSchema = await ticketSchema.create({
                    GuildID: guild.id,
                    MemberID: member.id,
                    TicketID: ticketId,
                    ChannelID: channel.id,
                    Closed: false,
                    Locked: false,
                    Type: customId,
                });

                const embed = new EmbedBuilder()
                    .setTitle(`${guild.name} - Ticket: ${customId}`)
                    .setDescription('Cuentanos como podemos ayudarte mientras un miembro del staff atiende el ticket.')
                    .setColor('Orange')
                    .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });

                const button = new ActionRowBuilder().setComponents(
                    new ButtonBuilder().setCustomId('close').setLabel('Cerrar Ticket').setStyle(ButtonStyle.Primary).setEmoji('❌'),
                    new ButtonBuilder().setCustomId('lock').setLabel('bloquear').setStyle(ButtonStyle.Secondary).setEmoji('🔒'),
                    new ButtonBuilder().setCustomId('unlock').setLabel('desbloquear').setStyle(ButtonStyle.Secondary).setEmoji('🔓'),                    
                );

                channel.send({
                    embeds: ([embed]),
                    components: [button]
                });

                interaction.reply({ content: 'Se ha abierto un ticket.', ephemeral: true});
            });

        } catch (err) {
            return console.log(err);
        }
    }
}
