const { EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits, VoiceChannel, GuildEmoji } = require('discord.js');
const client = require('../../index');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rocola')
        .setDescription('Sistema de Musica')
        .addSubcommand(subcommand =>
            subcommand.setName('play')
            .setDescription('Reproduce una cancion')
            .addStringOption(option => 
                option.setName('query')
                    .setDescription('URL o Nombre de la cancion')
                    .setRequired(true)
            )
        )
        .addSubcommand(subcommand =>
            subcommand.setName('volumen')
                .setDescription('Ajusta el volumen general')
                .addIntegerOption(option=>
                    option.setName('porcentaje')
                        .setDescription('10 = 10%')
                        .setMinValue(1)
                        .setMaxValue(100)
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand.setName('opciones')
                .setDescription('Elige una Opcion')
                .addStringOption(option =>
                    option.setName('opciones')
                        .setDescription('Elige una Opcion')
                        .setRequired(true)
                        .addChoices(
                            { name: 'lista', value: 'queue'},
                            { name: 'siguente', value: 'skip'},
                            { name: 'pausa', value: 'pause' },
                            { name: 'continuar', value: 'resume'},
                            { name: 'detener', value: 'stop'},
                        )
                )
        ),
        async execute(interaction) {
            const {options, member, guild, channel} = interaction;

            const subcommand = options.getSubcommand();
            const query = options.getString('query');
            const volume = options.getInteger('porcentaje');
            const option = options.getString('opciones');
            const VoiceChannel = member.voice.channel;

            const embed = new EmbedBuilder();

            if (!VoiceChannel) {
                embed.setColor('Red').setDescription('Debes estar en un canal de voz para poder ejecutar este comando! <:no:1089275578621886546>');
                return interaction.reply({ embeds: [embed], ephemeral: true});
            }

            if (!member.voice.channelId == guild.members.me.voice.channelId) {
                embed.serColor('Red').setDescription('No puedes utilizar la rocola en este canal porque ya se encuentra activa en <#${guild.members.me.voice.channelId}> <:no:1089275578621886546>')
                return interaction.reply({embeds: [embed], ephemeral: true});
            }

            try{
                switch (subcommand) {
                    case 'play':
                        client.distube.play(VoiceChannel, query, {textChannel: channel, member: member});
                        return interaction.reply({content: '🎵 Solicitud Recibida'});
                    case 'volumen':
                        client.distube.setVolume(VoiceChannel, volume);
                        return interaction.reply({ content: '🔉 El volumen ha sido establecido a ${volume}%'});
                    case 'opciones':
                        const queue = await client.distube.getQueue(VoiceChannel);

                        if(!queue) {
                            embed.setColor('Red').setDescription('No hay una lista de canciones activa en este momento...')
                            return interaction.reply({ embeds: [embed], ephemeral: true});
                        }

                        switch(option) {
                            case 'skip':
                                await queue.skip(VoiceChannel);
                                embed.setColor('Green').setDescription('⏭️ La cancion ha sido saltada');
                                return interaction.reply({ embeds: [embed]})
                            case 'stop':
                                await queue.stop(VoiceChannel);
                                embed.setColor('Red').setDescription('⏹️ La lista ha sido eliminada');
                                return interaction.reply({ embeds: [embed]})
                            case 'pause':
                                await queue.pause(VoiceChannel);
                                embed.setColor('Green').setDescription('⏯️ La cancion ha sido pausada');
                                return interaction.reply({ embeds: [embed]})
                            case 'resume':
                                await queue.resume(VoiceChannel);
                                embed.setColor('Green').setDescription('▶️ La cancion ha sido reanudada');
                                return interaction.reply({ embeds: [embed]})
                            case 'queue':
                                embed.setColor('Green').setDescription(`${queue.songs.map(
                                    (song, id) => `\n**${id + 1}.** ${song.name} -\`${song.formattedDuration}\``
                                )}`);
                                return interaction.reply({ embeds: [embed]})                                
                        }
                }
            } catch (err) {
                console.log(err);
            }
        }
}
