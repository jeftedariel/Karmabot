const { Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, embedLength, EmbedBuilder, ButtonBuilder, ButtonStyle, Message, StringSelectMenuBuilder, AttachmentBuilder, MessageSelectMenu } = require('discord.js');
const { rolmaster, rollautaco, rolnate, rolghost, roljava, rolbedrock, roldiscord, us, mx, gt, hn, sv, ni, cr, pa, co, ve, ec, pe, bo, py, uy, cl, ar, es,  r1m, r2m, r3m, r4m } = require('../../roles.json');
const dotenv = require('dotenv');


dotenv.config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
                    client.on(Events.InteractionCreate, async interaction => {
                        if (!interaction.isStringSelectMenu()) return;
                        if (interaction.customId === 'paises') {
                            let choice = interaction.values[0]
                            const member = interaction.member

                            if (choice == 'us_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(us)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Estados Unidos')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Estados Unidos');
                                }
                                else {
                                    member.roles.add(us)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Estados Unidos')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Estados Unidos');
                                }
                            }

                            else if (choice == 'mx_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(mx)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais México')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais México');
                                }
                                else {
                                    member.roles.add(mx)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais México')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais México');
                                }
                            }
                            else if (choice == 'gt_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(gt)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Guatemala')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Guatemala');
                                }
                                else {
                                    member.roles.add(gt)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Guatemala')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Guatemala');
                                }
                            }
                            else if (choice == 'hn_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(hn)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Honduras')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Honduras');
                                }
                                else {
                                    member.roles.add(hn)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Honduras')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Honduras');
                                }
                            }
                            else if (choice == 'sv_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(sv)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais El salvador')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais El salvador');
                                }
                                else {
                                    member.roles.add(sv)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais El salvador')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais El salvador');
                                }
                            }
                            else if (choice == 'ni_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(ni)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Nicaragua')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Nicaragua');
                                }
                                else {
                                    member.roles.add(ni)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Nicaragua')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Nicaragua');
                                }
                            }
                            else if (choice == 'cr_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(cr)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Costa Rica')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Costa Rica');
                                }
                                else {
                                    member.roles.add(cr)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Costa Rica')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Costa Rica');
                                }
                            }
                            else if (choice == 'pa_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(pa)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Panama')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Panama');
                                }
                                else {
                                    member.roles.add(pa)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Panama')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Panama');
                                }
                            }
                            else if (choice == 'co_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(co)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Colombia')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Colombia');
                                }
                                else {
                                    member.roles.add(co)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Colombia')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Colombia');
                                }
                            }
                            else if (choice == 've_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(ve)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Venezuela')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Venezuela');
                                }
                                else {
                                    member.roles.add(ve)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Venezuela')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Venezuela');
                                }
                            }
                            else if (choice == 'ec_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(ec)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Ecuador')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Ecuador');
                                }
                                else {
                                    member.roles.add(ec)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Ecuador')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Ecuador');
                                }
                            }
                            else if (choice == 'pe_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(pe)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Peru')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Peru');
                                }
                                else {
                                    member.roles.add(pe)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Peru')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Peru');
                                }
                            }
                            else if (choice == 'bo_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(bo)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Bolivia')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Bolivia');
                                }
                                else {
                                    member.roles.add(bo)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Bolivia')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Bolivia');
                                }
                            }
                            else if (choice == 'py_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(py)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Paraguay')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Paraguay');
                                }
                                else {
                                    member.roles.add(py)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Paraguay')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Paraguay');
                                }
                            }
                            else if (choice == 'uy_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(uy)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Uruguay')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Uruguay');
                                }
                                else {
                                    member.roles.add(uy)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Uruguay')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Uruguay');
                                }
                            }
                            else if (choice == 'cl_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(cl)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Chile')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Chile');
                                }
                                else {
                                    member.roles.add(cl)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Chile')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Chile');
                                }
                            }
                            else if (choice == 'ar_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(ar)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Argentina')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Argentina');
                                }
                                else {
                                    member.roles.add(ar)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais Argentina')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais Argentina');
                                }
                            }
                            else if (choice == 'es_option') {
                                if (member.roles.cache.some(role => role.id == us || role.id == mx || role.id == gt || role.id == hn || role.id == sv || role.id == ni || role.id == cr || role.id == pa || role.id == co || role.id == ve || role.id == ec || role.id == pe || role.id == bo || role.id == py || role.id == uy || role.id == cl || role.id == ar || role.id == es)) {
                                    if (member.roles.cache.some(role => role.id == us)) {
                                        member.roles.remove(us)
                                    }
                                    if (member.roles.cache.some(role => role.id == mx)) {
                                        member.roles.remove(mx)
                                    }
                                    if (member.roles.cache.some(role => role.id == gt)) {
                                        member.roles.remove(gt)
                                    }
                                    if (member.roles.cache.some(role => role.id == hn)) {
                                        member.roles.remove(hn)
                                    }
                                    if (member.roles.cache.some(role => role.id == sv)) {
                                        member.roles.remove(sv)
                                    }
                                    if (member.roles.cache.some(role => role.id == ni)) {
                                        member.roles.remove(ni)
                                    }
                                    if (member.roles.cache.some(role => role.id == cr)) {
                                        member.roles.remove(cr)
                                    }
                                    if (member.roles.cache.some(role => role.id == pa)) {
                                        member.roles.remove(pa)
                                    }
                                    if (member.roles.cache.some(role => role.id == co)) {
                                        member.roles.remove(co)
                                    }
                                    if (member.roles.cache.some(role => role.id == ve)) {
                                        member.roles.remove(ve)
                                    }
                                    if (member.roles.cache.some(role => role.id == ec)) {
                                        member.roles.remove(ec)
                                    }
                                    if (member.roles.cache.some(role => role.id == pe)) {
                                        member.roles.remove(pe)
                                    }
                                    if (member.roles.cache.some(role => role.id == bo)) {
                                        member.roles.remove(bo)
                                    }
                                    if (member.roles.cache.some(role => role.id == py)) {
                                        member.roles.remove(py)
                                    }
                                    if (member.roles.cache.some(role => role.id == uy)) {
                                        member.roles.remove(uy)
                                    }
                                    if (member.roles.cache.some(role => role.id == cl)) {
                                        member.roles.remove(cl)
                                    }
                                    if (member.roles.cache.some(role => role.id == ar)) {
                                        member.roles.remove(ar)
                                    }
                                    if (member.roles.cache.some(role => role.id == es)) {
                                        member.roles.remove(es)
                                    }

                                    member.roles.add(es)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais España')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais España');
                                }
                                else {
                                    member.roles.add(es)
                                    await interaction.reply({ content: "Recibiste el rol correctamente!", ephemeral: true })
                                    console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' recibió correctamente un rol de pais España')
                                    const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                                    log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' recibió correctamente un rol de pais España');
                                }
                            }
                        }
                    })


                }
            }

