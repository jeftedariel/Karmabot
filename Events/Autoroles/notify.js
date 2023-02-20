const { Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, embedLength, EmbedBuilder, ButtonBuilder, ButtonStyle, Message, StringSelectMenuBuilder, AttachmentBuilder, MessageSelectMenu } = require('discord.js');
const { rolmaster, rollautaco, rolnate, rolghost, roljava, rolbedrock, roldiscord, us, mx, gt, hn, sv, ni, cr, pa, co, ve, ec, pe, bo, py, uy, cl, ar, es, r1m, r2m, r3m, r4m } = require('../../roles.json');
const dotenv = require('dotenv');


dotenv.config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
                    client.on(Events.InteractionCreate, async interaction => {
                        if (!interaction.isStringSelectMenu()) return;
                        if (interaction.customId === 'pings') {
                            let choice = interaction.values[0]
                            const member = interaction.member

                            if (choice == 'mcnotify_option') {
                                if (member.roles.cache.some(role => role.id == roljava)) {
                                    member.roles.remove(roljava)
                                    await interaction.reply({ content: "Ya no recibirás notificaciones relacionadas con Minecraft Java.❌", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' eliminó su rol de Minecraft Java')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' eliminó su rol de Minecraft Java')
                                }
                                else {
                                    member.roles.add(roljava)
                                    await interaction.reply({ content: "Ahora recibirás notificaciones relacionadas con Minecraft Java.✅", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió el rol de Minecraft Java')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió el rol de Minecraft Java');
                                }
                            }

                            else if (choice == 'bdnotify_option') {
                                if (member.roles.cache.some(role => role.id == rolbedrock)) {
                                    member.roles.remove(rolbedrock)
                                    await interaction.reply({ content: "Ya no recibirás notificaciones relacionadas con Minecraft Bedrock.❌", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' eliminó su rol de Minecraft Bedrock')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' eliminó su rol de Minecraft Bedrock')
                                }
                                else {
                                    member.roles.add(rolbedrock)
                                    await interaction.reply({ content: "Ahora recibirás notificaciones relacionadas con Minecraft Bedrock.✅", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió el rol de Minecraft Bedrock')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió el rol de Minecraft Bedrock');
                                }
                            }

                            else if (choice == 'dcnotify_option') {
                                if (member.roles.cache.some(role => role.id == roldiscord)) {
                                    member.roles.remove(roldiscord)
                                    await interaction.reply({ content: "Ya no recibirás notificaciones relacionadas con Discord.❌", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' eliminó su rol de Discord')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' eliminó su rol de Discord')
                                }
                                else {
                                    member.roles.add(roldiscord)
                                    await interaction.reply({ content: "Ahora recibirás notificaciones relacionadas con Discord.✅", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió el rol de Discord')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió el rol de Discord');
                                }
                            }

                        }
                    })
                }
            }