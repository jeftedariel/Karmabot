const { ActivityType } = require('discord.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Levels = require('discord.js-leveling')

//=======================================
//     DEBUG MODE, 0 OR 1
//=======================================

const debuglog = 0

dotenv.config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGODB || '', {
            keepAlive: true,
            
        });

        if (mongoose.connect) {
            console.log('[', '!'.green, ']', 'MongoDB Conectado exitosamente.')
        }

        Levels.setURL(process.env.MONGODB)

        const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")

        console.log('[', '!'.green, ']', `Listo!, ${client.user.username} iniciado correctamente`)
        console.log('[', '!'.green, ']', `El bot está en ${client.guilds.cache.size} servidores`)
        log.send('[ ! ] ' + `Listo!, ${client.user.username} iniciado correctamente`);
        log.send('[ ! ] ' + `El bot está en ${client.guilds.cache.size} servidores`);
        
        client.user.setPresence({ activities: [{ name: `KarmaBugs🤑`, type: ActivityType.Watching }], status: 'online' });

        client.on("error", (e) => console.error('[', '!'.red, ']', e));
        client.on("warn", (e) => console.warn('[', '!'.yellow, ']', e));
        if (debuglog === 1) {
            client.on("debug", (e) => console.info('[', '!'.blue, ']', e));
        }
    }
}    
