const {client, ModalBuilder} = require('discord.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Levels = require('discord.js-leveling');
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

    }
}    