const fs = require('node:fs');
const path = require('node:path');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const blacklisted = require('./blacklist.json');
//const mcping = require('mcping-js')
//const server = new mcping.MinecraftServer('', 25565)
const { Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, embedLength, EmbedBuilder, ButtonBuilder, ButtonStyle, Message, StringSelectMenuBuilder, MessageSelectMenu } = require('discord.js');
const { colors, yellow } = require('colors');
const { channel } = require('node:diagnostics_channel');
const { Console } = require('node:console');
const { MessageChannel } = require('node:worker_threads');
const { rolmaster, rollautaco, rolnate, rolghost, r1m, r2m, r3m, r4m } = require('./roles.json')

dotenv.config();
require('./');

//============================================================
// Esto se encargará de crear una nueva instancia para el bot
//===========================================================
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,

	],
})



//=====================================
//Carga los / desde la carpeta comandos
//=====================================
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'comandos');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log('[', '!'.yellow, ']', `Al comando ${filePath} le faltan las propiedades DATA y EXECUTE.`);
		const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
		log.send('[ ! ] ' + `Al comando ${filePath} le faltan las propiedades DATA y EXECUTE.`);
	}
}

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;
	console.log('[', '!'.green, ']', 'El usuario', interaction.user.username, 'ejecutó exitosamente el comando:', interaction.commandName)
	const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
	log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' ejecutó exitosamente el comando: ' + interaction.commandName);

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Hubo un error tratando de ejecutar ese comando.', ephemeral: true });
	}
});






//=======================================
//     Sistema de Moderación V1.1
//=======================================

client.on('messageCreate', (message) => {
	const Aviso = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Aviso')
		.setDescription('Su mensaje se eliminó debido a que incluia lenguaje o temas que no están permitidos en este servidor, ayudanos a mantener un ambiente agradable.' + '\n' + 'Para más información o consultas puedes abrir un ticket')
		.setImage('https://media.giphy.com/media/7VbE2HvYu1QUmoVQlt/giphy.gif')
		.setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });

	let check = false
	for (var palabra in blacklisted) {
		if (!message.author.bot) {
			if (message.content.toLowerCase() === (blacklisted[palabra].toLowerCase())) check = true
		}
	}
	if (check) {
		console.log('[', '!'.green, ']', 'Se eliminó un mensaje del usuario', message.author.username, 'el cual contenia:', message.content)
		const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
		log.send('[ ! ] ' + 'Se eliminó un mensaje del usuario ' + message.author.username + ' el cual contenia: ' + message.content);
		setTimeout(() => message.delete(), 1);
		message.author.send({ embeds: [Aviso] }).catch(console.error)
	};
}),

	//===================================
	// Saludo del bot al ser mencionado
	//===================================
//	client.on("messageCreate", message => {
//
//		if (/\bkarmabot\b/i.test(message.content)) {
//			if (!message.author.bot) {
//				message.react('👀');
//				console.log('[', '!'.green, ']', 'El bot fue mencionado por', message.author.username)
//				const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
//				log.send('[ ! ] ' + 'El bot fue mencionado por ' + message.author.username);
//			}
//		}
//
//	})
//
//client.on("messageCreate", message => {
//
//	if (/<@1064599332734652536>/i.test(message.content)) {
//		if (!message.author.bot) {
//			message.react('👀');
//			console.log('[', '!'.green, ']', 'El bot fue mencionado por', message.author.username)
//			const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
//			log.send('[ ! ] ' + 'El bot fue mencionado por ' + message.author.username);
//		}
//	}
//
//})



//=================================
//            ANUNCIOS
//==================================
client.on("messageCreate", message => {

	const Anuncio = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Anuncio')
		.setDescription('Hola! Ya pueden unirse a un reino gracias a Karmabot, solo deben ir al canal de <#1069880990484402196>  y seleccionar el reino que gusten, luego deberán escribir su nombre tal cual como lo tienen en Minecraft y listo! eso es todo lo que deben hacer.' + '\n' + '\n' + '\n' + '\n' + '||Se vienen cositas👀||')
		.setImage('https://media.giphy.com/media/XVAWdQSZwAT1qoLydV/giphy.gif')
		.setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
	const Anuncioboton = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setLabel('Descargar')
				.setURL("https://www.dropbox.com/s/1a2zdu9cqqo75es/mods.rar?dl=1")
				.setStyle(ButtonStyle.Link),
		)
	if (/7346sdaksasdsbggedaiub52536/i.test(message.content)) {
		const channel = client.channels.cache.find(channel => channel.id === "1058921412632518748")
		channel.send({ embeds: [Anuncio] });
		channel.send('@everyone');
		//message.author.send({ embeds: [Anuncio] }).catch(console.error)
		message.delete()
		console.log('[', '!'.green, ']', 'Anuncio enviado exitosamente por', message.author.username)
		const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
		log.send('[ ! ] ' + 'Anuncio enviado exitosamente por ' + message.author.username);

	}
})

//=================================
//            REGLAS
//==================================
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
		channel.send({ embeds: [Anuncio] });
		channel.send('@everyone');
		//message.author.send({ embeds: [Titulo, R1, R2, R3, info] }).catch(console.error)
		message.delete()
		console.log('[', '!'.green, ']', 'Reglas enviadas exitosamente por', message.author.username)
		const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
		log.send('[ ! ] ' + 'Reglas enviadas exitosamente por ' + message.author.username);

	}
})

//=================================
//            AUTOROL CLAN
//==================================
client.on("messageCreate", message => {

	const Anuncio = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Unete a un Reino!')
		.setDescription('Al formar parte de un reino podrás estar dentro de una guerra de clanes, colaborar en equipo y ser parte de muchas aventuras!!')
		.setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
	const clanes = new ActionRowBuilder()
		.addComponents(
			new StringSelectMenuBuilder()
				.setCustomId('select')
				.setPlaceholder('-> Click aqui para unirse <-')
				.addOptions(
					{
						label: 'El reino de Lautaco',
						value: 'first_option',
						emoji: {
							name: '🟨',
						  },
					},
					{
						label: 'El reino de Master',
						value: 'second_option',
						emoji: {
							name: '🟦',
						  },
					},
					{
						label: 'El reino de WarGhosts',
						value: 'third_option',
						emoji: {
							name: '🟩',
						  },
					},
					{
						label: 'El reino de ZyderNate',
						value: 'fourth_option',
						emoji: {
							name: '🟥',
						  },
					},
				),
		);
	if (/sdascx57ksdfv1azqaza1q1q1q1sd/i.test(message.content)) {
		const channel = client.channels.cache.find(channel => channel.id === "1069880990484402196")
		channel.send({ embeds: [Anuncio], components: [clanes] });
		message.delete()
		console.log('[', '!'.green, ']', 'Menu enviado exitosamente por', message.author.username)
		const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
		log.send('[ ! ] ' + 'Menu enviado exitosamente por ' + message.author.username);
	}
})

client.on(Events.InteractionCreate, async interaction => {

	const nick = new ModalBuilder()
		.setCustomId('nick')
		.setTitle('Reinos de Karmafans');
	const nickmc = new TextInputBuilder()
		.setCustomId('nickmc')
		.setLabel("Cuál es tu nombre en Minecraft?")
		.setStyle(TextInputStyle.Short);
	const firstActionRow = new ActionRowBuilder().addComponents(nickmc);
	nick.addComponents(firstActionRow);


	if (interaction.isStringSelectMenu()) {

		let choice = interaction.values[0]
		const member = interaction.member

		if (choice == 'first_option') {
			if (member.roles.cache.some(role => role.id == rollautaco || role.id == rolnate || role.id == rolghost || role.id == rolmaster)) {
				interaction.reply({ content: "No puedes unirte a un reino si ya perteneces a otro.", ephemeral: true })
				console.log('[', '!'.yellow, ']', 'El usuario ', interaction.user.username, ' intento entrar a un reino pero ya pertenecia a otro')
				const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
				log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' intento entrar a un reino pero ya pertenecia a otro');
			}
			else {
				member.roles.add(rollautaco)
				console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' entró a un reino y recibió su rol correctamente')
				const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
				log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' entró a un reino y recibió su rol correctamente');
				await interaction.showModal(nick);
			}
		}

		else if (choice == 'second_option') {
			if (member.roles.cache.some(role => role.id == rollautaco || role.id == rolnate || role.id == rolghost || role.id == rolmaster)) {
				interaction.reply({ content: "No puedes unirte a un reino si ya perteneces a otro.", ephemeral: true })
				console.log('[', '!'.yellow, ']', 'El usuario ', interaction.user.username, ' intento entrar a un reino pero ya pertenecia a otro')
				const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
				log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' intento entrar a un reino pero ya pertenecia a otro');
			}
			else {
				member.roles.add(rolmaster)
				console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' entró a un reino y recibió su rol correctamente')
				const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
				log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' entró a un reino y recibió su rol correctamente');
				await interaction.showModal(nick);
			}
		}

		else if (choice == 'third_option') {
			if (member.roles.cache.some(role => role.id == rollautaco || role.id == rolnate || role.id == rolghost || role.id == rolmaster)) {
				interaction.reply({ content: "No puedes unirte a un reino si ya perteneces a otro.", ephemeral: true })
				console.log('[', '!'.yellow, ']', 'El usuario ', interaction.user.username, ' intento entrar a un reino pero ya pertenecia a otro')
				const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
				log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' intento entrar a un reino pero ya pertenecia a otro');
			}
			else {
				member.roles.add(rolghost)
				console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' entró a un reino y recibió su rol correctamente')
				const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
				log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' entró a un reino y recibió su rol correctamente');
				await interaction.showModal(nick);
			}
		}

		else if (choice == 'fourth_option') {
			if (member.roles.cache.some(role => role.id == rollautaco || role.id == rolnate || role.id == rolghost || role.id == rolmaster)) {
				interaction.reply({ content: "No puedes unirte a un reino si ya perteneces a otro.", ephemeral: true })
				console.log('[', '!'.yellow, ']', 'El usuario ', interaction.user.username, ' intento entrar a un reino pero ya pertenecia a otro')
				const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
				log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' intento entrar a un reino pero ya pertenecia a otro');
			}
			else {
				member.roles.add(rolnate)
				console.log('[', '!'.green, ']', 'El usuario ', interaction.user.username, ' entró a un reino y recibió su rol correctamente')
				const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
				log.send('[ ! ] ' + 'El usuario ' + interaction.user.username + ' entró a un reino y recibió su rol correctamente');
				await interaction.showModal(nick);
			}
		}
	}
})

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isModalSubmit()) return;
	if (interaction.customId === 'nick') {
		await interaction.reply({ content: 'Felicidades, ya formas parte de un reino!⚔️.', ephemeral: true });

		const nick = interaction.fields.getTextInputValue('nickmc');
		const channel = client.channels.cache.find(channel => channel.id === "1065792815419887766")
		const usuariodc = '<@' + interaction.user.id + '>'
		const usuarioclan = new EmbedBuilder()
			.setColor(0x0099FF)
			.setDescription('El usuario ' +  usuariodc + ' se unió a un reino y su nick de mc es: ' + nick)
		channel.send({ embeds: [usuarioclan] });
		console.log('[', '!'.green, ']', 'El usuario ' +  usuariodc + ' se unió a un reino y su nick de mc es: ' + nick)
		const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
		log.send('[ ! ] ' + 'El usuario ' +  usuariodc + ' se unió a un reino y su nick de mc es: ' + nick);

	}
});
//========================================================
// Esto avisará cuando el bot esté iniciado correctamente.
//========================================================
client.once(Events.ClientReady, c => {
	console.log('[', '!'.green, ']', `Listo!, Bot logeado como ${c.user.tag}`);
	const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
	log.send('[ ! ] ' + `Listo!, Bot logeado como ${c.user.tag}`);
	// Aquí se establece la actividad del bot y su estado (Online, Ausente, no molestar)	
	client.user.setPresence({
		activities: [{ name: `Karmafans⚔️`, type: ActivityType.Watching }],
		status: 'idle',
	});
});

//===========================================
//Esto se encarga de construir el formulario
//===========================================

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	if (interaction.commandName === 'lore') {
		const modal = new ModalBuilder()
			.setCustomId('Lore')
			.setTitle('Crea el lore de tu personaje');


		const nombreinput = new TextInputBuilder()
			.setCustomId('nombreinput')
			.setLabel("¿Cuál es el nombre de tu personaje?")
			.setStyle(TextInputStyle.Short)
			.setMaxLength(20);

		const edadinput = new TextInputBuilder()
			.setCustomId('edadinput')
			.setLabel("¿Que edad tiene tu personaje?")
			.setMaxLength(5)
			.setStyle(TextInputStyle.Short);

		const loreinput = new TextInputBuilder()
			.setCustomId('loreinput')
			.setLabel("Cuentanos tu historia.")
			.setMaxLength(3500)
			.setStyle(TextInputStyle.Paragraph);


		const firstActionRow = new ActionRowBuilder().addComponents(nombreinput);
		const secondActionRow = new ActionRowBuilder().addComponents(edadinput);
		const thirdActionRow = new ActionRowBuilder().addComponents(loreinput);



		modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);


		await interaction.showModal(modal);
	}
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isModalSubmit()) return;
	if (interaction.customId === 'Lore') {
		await interaction.reply({ content: 'Su lore se envió correctamente', ephemeral: true });


		//=============================
		//Embed para el canal de Lore
		//=============================

		const user = '<@' + interaction.user.id + '>';
		const nombre = interaction.fields.getTextInputValue('nombreinput') + ' / ' + user
		const edad = interaction.fields.getTextInputValue('edadinput')
		const lore = interaction.fields.getTextInputValue('loreinput')


		const Lore = new EmbedBuilder()
			.setColor(0x0099FF)
			.setDescription("**---> Nombre <---**" + "\n" + nombre + "\n**---> Edad <---**" + "\n" + edad + '\n**---> Lore <---**' + "\n" + lore)
			.setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });


		//		.addFields(
		//			{ name: '---> Nombre <---', value: interaction.fields.getTextInputValue('nombreinput') + ' / ' + user, inline: false },
		//			{ name: '---> Edad <---', value: interaction.fields.getTextInputValue('edadinput'), inline: false },
		//			{ name: '---> Lore <---', value: interaction.fields.getTextInputValue('loreinput'), inline: false }
		//		)

		//==============================
		// Embed que se envia al usuario
		// una vez recibido el formulario
		//==============================
		const LoreUsuario = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('KarmaFans')
			.setDescription('Su lore fue enviado exitosamente')
			.setImage('https://media.giphy.com/media/JNySPj69tVEEaaqoa9/giphy.gif')



		//======================================
		//Envia el embed al usuario y al canal
		//======================================

		const channel = client.channels.cache.find(channel => channel.id === "1065709218012876830")
		channel.send({ embeds: [Lore] });
		await interaction.user.send({ embeds: [LoreUsuario] }).catch(console.error)
		const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
		log.send('[ ! ] ' + 'El usuario ' + '<@' + interaction.user.id + '>' + 'Envió exitosamente su lore');
	}
});

//=============================================
// Esto tomará el token desde el archivo .env
//=============================================
client.login(process.env.TOKEN);