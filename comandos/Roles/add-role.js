const rrSchema = require('../../Models/ReactionRoles');
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addrole')
        .setDescription('Agrega un Rol Custom')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
        .addRoleOption(option =>
            option.setName('role')
                .setDescription('Roles que desea asignar')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('descripcion')
                .setDescription('Descripcion del Role')
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('emoji')
                .setDescription('Emoji para el role')
                .setRequired(false)
        ),
        async execute(interaction){
            const {options, guildId, member} = interaction;

            const role = options.getRole('role');
            const description = options.getString('descripcion');
            const emoji = options.getString('emoji');

            try {
                
                if (role.position >= member.roles.highest.position)
                    return interaction.reply({content: 'No tengo permisos para hacer eso', ephemeral: true});
                
                const data = await rrSchema.findOne({ guilID: guildId });

                const newRole = {
                    roleId: role.id,
                    roleDescription: description || "Sin descripcion",
                    roleEmoji: emoji || "",
                }

                if (data) {
                    let roleData = data.roles.find((x) => x.roleId === role.id);

                    if (roleData) {
                        roleData = newRoleData;
                    } else {
                        data.roles = [...data.roles, newRole]
                    }

                    await data.save();
                } else {
                    await rrSchema.create({
                        GuildID: guildId,
                        roles: newRole,
                    });
                }

                return interaction.reply({ content: `Se ha creado el role: **${role.name}**` })

            } catch (err) {
                console.log(err);
            }
        }
}
