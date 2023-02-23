const {SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits} = require('discord.js');
const { execute } = require('./clear');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unban')
        .setDescription('Desbanea a un usuario especifico de este Discord.')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addStringOption(option => 
            option.setName('userid')
            .setDescription('Coloca la ID del usuario que deseas desbanear')
            .setRequired(true)
        ),
    
    async execute(interaction) {
        const {channel, options } = interaction;

        const userId = options.getString('userid');

        try {
            await interaction.guild.members.unban(userId);

            const embed = new EmbedBuilder()
                .setDescription(`Se ha desbaneado al usuario <@${userId}> de este servidor`)
                .setColor(5763719)
                .setTimestamp();

            await interaction.reply({ embeds: [embed], ephemeral: true});
        } catch (err) {
            const errEmbed = new EmbedBuilder()
                .setDescription(`Debes colocar un ID de usuario valido o que esté baneado del servidor.`)
                .setColor(15548997);
            interaction.reply({ embeds: [errEmbed], ephemeral: true});
        }
    }
        
}