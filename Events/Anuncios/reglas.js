const { Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, embedLength, EmbedBuilder, ButtonBuilder, ButtonStyle, Message, StringSelectMenuBuilder, AttachmentBuilder, MessageSelectMenu } = require('discord.js');
const dotenv = require('dotenv');


dotenv.config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        client.on("messageCreate", message => {

            const Titulo = new EmbedBuilder()
                .setColor(5763719)
                .setTitle('Reglas Survival medieval MC KarmaFans')
            const R1 = new EmbedBuilder()
                .setColor(3447003)
                .setTitle('Rendimiento')
                .setDescription('**1- Granjas automáticas (Máquina o mecánicas)** \n \n Prohibido el uso de cualquier tipo de granja automática, el uso de artefacto que cause lag, afecta el rendimiento del servidor. \n \n **2- Bugs y glitches** \n \n No está permitido el uso de bug o glitches si encuentra con uno, por favor reportarlo lo más rápido y será premiado.')
                .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
            const R2 = new EmbedBuilder()
                .setColor(10181046)
                .setTitle('Survival General')
                .setDescription('**1- Roleo general** \n \n Todo lo que tenga que ver con rol y parte del rol como insultos, etc estará permitido siempre cuando no sobrepase fuera del rol, la amenazas, racismo, xenofobia, sexista y más será vetado temporal o permanente dependiendo de la gravedad. \n \n **2- Saqueos** \n \n Está permitido el saqueo entre reinos siempre cuando el otro reino tenga la misma cantidad de gente. \n \n **3- PVP** \n \n El pvp estará permitido para todos, pero con igualdad de gente, siempre cuando haga un rol. No estará permitido atacar por atacar, para activar un rol tiene que haber cambios de palabras o actos. \n \n **4- TPA kill / Spawn kill** \n \n Prohibido el uso de comando para hacer una kill y desaparecer, al hacerlo se llevará un baneo temporal sin aviso alguno. \n \n **5 - Respeto a los líderes** \n \n La falta de respeto a los líderes no está permitido, la primera se llevará una llamada de atención. Si no se lleva bien con sus líderes y quieren separarse, crear un ticket y el motivo.  \n \n **6- Traiciones** \n \n Las traiciones estarán permitidos, pero se llevará un castigo. El reino con más fidelidad será premiado por semanas. \n \n **7- stream sniping** \n \n No está permitido el stream sniping las pruebas se hace mediante rol o captura si quieren acusar a alguien, pero si es prueba con la regla número 1 es válido. \n \n **8- X-Ray** \n \n El uso de X-Ray será sancionado fuertemente se aplica para todos.')
                .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
            const R3 = new EmbedBuilder()
                .setColor(15844367)
                .setTitle('Jugar en Solitario')
                .setDescription('El servidor está basado en un tema medieval, por lo tanto, las reglas de arriba también se le aplica a ustedes. \n \n **1- Impuestos** \n \n Para que puedan jugar en armonía y encajar entre todo se deberá pagar un impuesto a los 4 reinos para que no pueda ser atacado. Los impuestos van de minerales (hierro, oro, etc) o alimentos, dependiendo de la exigencia. El pago será cada 4 días. \n \n **2- Provocaciones** \n \n  Las provocaciones a los reinos es una falta de respeto para ellos, así que cuida sus actos para que no sean atacados. \n \n **3- Posible reinos** \n \n Si la cantidad de jugadores es mayor a los reinos se pensará un reino dependiendo de los jugadores. (La idea no está todo clara, aún se está pensando) ')
                .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
            const info = new EmbedBuilder()
                .setColor(15548997)
                .setDescription('Se agradecería respetar las reglas, los ítems de armadura y armas y una que otra cosa está bloqueado temporalmente. Cada cierto tiempo se desbloqueará, se hace para equilibrar a los jugadores. \n \n Habrá eventos y torneos, espero poder verlos!  \n \n Se acepta sugerencia para las reglas y donaciones (xd).')
                .setImage('https://media.giphy.com/media/6Ri6Pj0sgJMlTwrr7p/giphy.gif')
                .setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
            if (/asdxczxnj0k063413s/i.test(message.content)) {
                const channel = client.channels.cache.find(channel => channel.id === "1070535523980038225")
                channel.send({ embeds: [Titulo, R1, R2, R3, info] });
                channel.send('@everyone');
                //message.author.send({ embeds: [Titulo, R1, R2, R3, info] }).catch(console.error)
                message.delete()
                console.log('[', '!'.green, ']', 'Reglas enviadas exitosamente por', message.author.username)
                const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
                log.send('[ ! ] ' + 'Reglas enviadas exitosamente por ' + message.author.username);
        
            }
        })
}}