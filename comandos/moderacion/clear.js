const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, EmbedBuilder, Client} = require('discord.js')
const { execute } = require('../../Events/Anuncios/anuncio')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Elimina una cantidad predeterminada de mensajes en un chat.')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addIntegerOption(option =>
        option.setName('cantidad')
        .setDescription('Cantidad de Mensajes a borrar')
        .setRequired(true)
        )

    .addUserOption(option => 
        option.setName('usuario')
        .setDescription('Elimina msg de un usuario especifico.')
        .setRequired(false)
        ),

    async execute(interaction) {
        const {channel, options} = interaction;

        const cantidad = options.getInteger('cantidad');
        const usuario = options.getUser('usuario')

        const messages = await channel.messages.fetch({
            limit: cantidad +1,
        });

        const res = new EmbedBuilder()
            .setColor('Random')

        if(usuario) {
            let i = 0;
            const filtered = [];

            (await messages).filter((msg) => {
                if(msg.author.id === usuario.id && cantidad > i) {
                    filtered.push(msg);
                    i++;
                }
            })

            await channel.bulkDelete(filtered).then(messages => {
                res.setDescription(`Se eliminaron correctamente ${messages.size} mensajes del usuario ${usuario}`);
                interaction.reply({embeds: [res], ephemeral: true});
                console.log('[', '!'.green, ']', `El usuario ${interaction.user.username} eliminó ${messages.size} mensajes del usuario ${usuario} con el /clear`)
            });
        } else {
            await channel.bulkDelete(cantidad, true).then(messages => {
                res.setDescription(`Se eliminaron correctamente ${messages.size} mensajes`);
                interaction.reply({embeds: [res], ephemeral: true});
                console.log('[', '!'.green, ']', `El usuario ${interaction.user.username} eliminó ${messages.size} mensajes con el /clear`)
            })
        }
    }
}