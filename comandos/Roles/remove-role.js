const rrSchema = require('../../Models/ReactionRoles');
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remrole')
        .setDescription('Elimina un Rol Custom')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
        .addRoleOption(option =>
            option.setName('role')
                .setDescription('Roles que desea eliminar')
                .setRequired(true)
        ),
        async execute(interaction){
            const {options, guildId, member} = interaction;

            const role = options.getRole('role');

            try { 
                
                const data = await rrSchema.findOne({ guilID: guildId });

                if (!data) 
                    return interaction.reply({content: 'El servidor no tiene informacion sobre eso.', ephemeral: true});
                
                const roles = data.roles;
                const findRole = roles.find((r) => r.roleId === role.id);

                if (!findRole)
                    return interaction.reply({content: 'Ese role no existe.', ephemeral: true});
                    
                    const filteredRoles = roles.filter((r) => r.roleId !== role.id);
                    data.roles = filteredRoles;

                    await data.save();

                    return interaction.reply({ content: `Se ha removido el role: **${role.name}**` })

            } catch (err) {
                console.log(err);
            }
        }
}
