const { CommandInteraction } = require('discord.js');

module.exports = {
    name: 'interactionCreate',

    async execute(interaction, client) {
        const { customId, values, guild, member} = interaction;
        const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")

        if(interaction.isStringSelectMenu()) {
            if (customId == 'reaction-roles') {
                for (let i = 0; i < values.length; i++) {
                    const roleId = values[i];

                    const role = guild.roles.cache.get(roleId);
                    const hasRole = member.roles.cache.has(roleId);

                    switch(hasRole) {
                        case true:
                            member.roles.remove(role);
                            break;
                        case false:
                            member.roles.add(role);
                            break;
                    }
                }

                interaction.reply({ content: '<:si:1089275579221676035>  Tus roles han sido actualizados!', ephemeral: true});
                console.log('[', '!'.green, ']', `Se han actualizado los roles de ${interaction.user.tag}`);
                log.send('[ ! ] ' + `Se han actualizado los roles de ${interaction.user}`)
            }
        } else {
            return;
        }
    },
};
