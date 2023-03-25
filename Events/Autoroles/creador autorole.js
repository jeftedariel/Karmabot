const { Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, embedLength, EmbedBuilder, ButtonBuilder, ButtonStyle, Message, StringSelectMenuBuilder, AttachmentBuilder, MessageSelectMenu } = require('discord.js');
const { participante } = require('../../roles.json');
const dotenv = require('dotenv');


dotenv.config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
                    client.on(Events.InteractionCreate, async interaction => {
                        if (!interaction.isStringSelectMenu()) return;
                        if (interaction.customId === 'autorole') {
                            let choice = interaction.values[0]
                            const member = interaction.member

                            if (choice == 'join_option') {
                                if (member.roles.cache.some(role => role.id == participante)) {
                                    member.roles.remove(participante)
                                    await interaction.reply({ content: "Has sido eliminado de la lista de Participantes. <:no:1089275578621886546>", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' eliminó su rol de Participante')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' eliminó su rol de Participante')
                                }
                                else {
                                    member.roles.add(participante)
                                    await interaction.reply({ content: "Has sido agregado a la lista de Participantes. <:si:1089275579221676035>", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió el rol de Participante')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió el rol de Participante');
                                }
                            }
                        }
                    })
                }
            }