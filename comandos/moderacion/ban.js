const { EmbedBuilder } = require('@discordjs/builders');
const {SlashCommandBuilder, Embedbuilder, PermissionFlagsBits, Embed} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Banea a un usuario de este Servidor.')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(option =>
        option.setName('usuario')
        .setDescription('El usuario que desea banear')
        .setRequired(true)
        )

    .addStringOption(option => 
        option.setName('razon')
        .setDescription('Motivo del Ban.')
        .setRequired(false)
        ),
    
        async execute(interaction) {
            const {channel, options} = interaction;

            const usuario = options.getUser('usuario')
            const razon = options.getString('razon') || "No se especificó un motivo.";

            const member = await interaction.guild.members.fetch(usuario.id)

            const errEmbed = new EmbedBuilder()
                .setDescription(`No puedes banear a ${usuario.username} porque tiene un rol igual o mayor al tuyo`)
                .setColor(15548997);

            if (member.roles.highest.position >= interaction.member.roles.highest.position)
                return interaction.reply({embeds: [errEmbed], ephemeral: true});

            await member.ban({razon});

            const embed = new EmbedBuilder()
                .setDescription(`Se ha baneado al usuario ${usuario} \n Motivo: ${razon}`)
                .setColor(5763719)
                .setTimestamp()

            await interaction.reply({ embeds:[embed] });
        }   
}