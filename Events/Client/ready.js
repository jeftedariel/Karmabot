const { ActivityType} = require('discord.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        await mongoose.connect(process.env.MONGODB || '', {
            keepAlive: true,
        });

        if (mongoose.connect) {
            console.log('[', '!'.green, ']', 'MongoDB Conectado exitosamente.')
        }

        const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
        console.log('[', '!'.green, ']', `Listo!, ${client.user.username} iniciado correctamente`)
	    log.send('[ ! ] ' + `Listo!, ${client.user.username} iniciado correctamente`);
        client.user.setPresence({ activities: [{ name: `MC 1.16.5 👀`, type: ActivityType.Playing }], status: 'idle'});
    }
}    