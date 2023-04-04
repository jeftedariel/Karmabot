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
                            const rolep = interaction.options.getRole('rol').id;

                            if (choice == 'join_option') {
                                if (member.roles.cache.some(role => role.id == rolep)) {
                                    await interaction.reply({ content: "No puedes unirte de nuevo porque ya formas parte del evento. <:no:1089275578621886546>", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' ya es parte del evento.')
                                }
                                else {
                                    member.roles.add(rolep)
                                    await interaction.reply({ content: "Has sido agregado a la lista de Participantes. <:si:1089275579221676035>", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió el rol de Participante')
                                }
                            }
                        }
                    })
                }
            }
