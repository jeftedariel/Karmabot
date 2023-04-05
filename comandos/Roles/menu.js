const rrSchema = require('../../Models/ReactionRoles');
const {SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Envia el menu de Auto Roles')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
        async execute(interaction) {
            const {options, guildId, guild, channel} = interaction;

            try {
                const data = await rrSchema.findOne({ GuildID: guildId});

                if (!data.roles.length > 0)
                    return interaction.reply({content: 'El servidor no tiene ninguna data guardada', ephemeral: true });

                const panelEmbed = new EmbedBuilder()
                    .setDescription('Selecciona uno de los roles')
                    .setColor('Blue')
                const options = data.roles.map(x => {
                    const role = guild.roles.cache.get(x.roleId);

                    return {
                        label: role.name,
                        value: role.id,
                        description: x.roleDescription,
                        emoji: x.roleEmoji || undefined
                    };
                });

                const menuComponents = [
                    new ActionRowBuilder().addComponents(
                        new SelectMenuBuilder()
                        .setCustomId('reaction-roles')
                        .setMaxValues(options.length)
                        .addOptions(options),
                    ),
                ];

                channel.send({ embeds: [panelEmbed], components: [menuComponents] });

                return interaction.reply({ content: 'El menu se ha enviado correctamente', ephemeral: true});
            
            } catch (err) {
                console.log(err);
            }
        }
}
