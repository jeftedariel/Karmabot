const {SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, Embed} = require('discord.js')
const ms = require('ms');
    
module.exports = {
    data: new SlashCommandBuilder()
    .setName('mute')
    .setDescription('Mutea a un usuario de este Servidor.')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(option =>
        option.setName('usuario')
        .setDescription('El usuario que desea mutear')
        .setRequired(true) 
    )
    .addStringOption(option =>
        option.setName('tiempo')
            .setDescription('Cuanto tiempo va a estar muteado el usuario')
            .setRequired(true)
    )
    .addStringOption(option =>
        option.setName('razon')
            .setDescription('Motivo por el cual va a mutear al usuario')
    ),

    async execute(interaction) {
        const {guild, options} = interaction;

        const user = options.getUser('usuario')
        const member = guild.members.cache.get(user.id);
        const time = options.getString('tiempo');
        const convertedTime = ms(time);
        const reason = options.getString('razon') || "No se especificó un motivo.";

        const errEmbed = new EmbedBuilder()
            .setDescription('Algo ha fallado, intentalo de nuevo!')
            .setColor(15548997);

        const Sembed = new EmbedBuilder()
            .setDescription(`El usuario ${user} ha sido muteado`)
            .addFields(
                {name: 'Motivo', value: `${reason}`, incline: true},
                {name: 'Duracion', value: `${time}`, incline: true}
            )
            .setColor(5763719)
            .setTimestamp();
        
        if (member.roles.highest.position >= interaction.member.roles.highest.position)
                return interaction.reply({embeds: [errEmbed], ephemeral: true});
        if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.ModerateMembers))
                return interaction.reply({embeds: [errEmbed], ephemeral: true});               
        if (!convertedTime)
                return interaction.reply({embeds: [errEmbed], ephemeral: true});
        try {
            await member.timeout(convertedTime, reason);
            interaction.reply({embeds: [Sembed] })
        } catch (err) {
            console.log(err);
        }
        
    }

}        
