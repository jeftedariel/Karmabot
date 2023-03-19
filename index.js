const fs = require('node:fs');
const path = require('node:path');
const Canvas = require('@napi-rs/canvas');
const dotenv = require('dotenv');
const blacklisted = require('./blacklist.json');
const Levels = require('discord.js-leveling')
//const mcping = require('mcping-js')
//const server = new mcping.MinecraftServer('', 25565)
const { Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, embedLength, EmbedBuilder, ButtonBuilder, ButtonStyle, Message, StringSelectMenuBuilder, AttachmentBuilder, MessageSelectMenu } = require('discord.js');
const { colors, yellow } = require('colors');
const { channel } = require('node:diagnostics_channel');
const { Console } = require('node:console');
const { MessageChannel } = require('node:worker_threads');
const { rolmaster, rollautaco, rolnate, rolghost, roljava, rolbedrock, roldiscord, us, mx, gt, hn, sv, ni, cr, pa, co, ve, ec, pe, bo, py, uy, cl, ar, es,  r1m, r2m, r3m, r4m } = require('./roles.json');
const { url } = require('node:inspector');
dotenv.config();
require('./');

const {loadEvents} = require('./Handlers/eventHandler');
const {loadCommands} = require('./Handlers/commandHandler');




//============================================================
// Esto se encargará de crear una nueva instancia para el bot
//===========================================================
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildVoiceStates

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
//     Sistema de Bienvenidas 1.0
//=======================================

client.on("guildMemberAdd", (member) => {

	const bienvenida = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Bienvenido/a')
	.setDescription(`Hola! ${member.user} espero que disfrutes de tu estadia en el servidor.`)
	.setImage('https://media.giphy.com/media/a9dGnkMNSSwDeR8Xii/giphy.gif')
	.setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });

	const channel = client.channels.cache.find(channel => channel.id === "1058954445171462216")
	const memberRole = '1058921411965616210';       
	channel.send( { embeds: [bienvenida] } )
	member.roles.add(memberRole)
	const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
	log.send('[ ! ] ' + `El usuario ${member.user} se ha unido al discord`);
	console.log('[', '!'.green, ']', `El usuario ${member.user} se ha unido al discord`);

});

client.on("guildMemberRemove", (member) => {

	const despedida = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Adios!')
	.setDescription(`Fue un gusto tenerte aqui ${member.user}.`)
	.setImage('https://media.giphy.com/media/QuCG1LqQ4PKpvxEvSP/giphy.gif')
	.setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });

	const channel = client.channels.cache.find(channel => channel.id === "1058954447113441310")    
	channel.send( { embeds: [despedida] } )
	const log = client.channels.cache.find(channel => channel.id === "1069336879968813158")
	log.send('[ ! ] ' + `El usuario ${member.user} se ha ido del discord`);
	console.log('[', '!'.green, ']', `El usuario ${member.user} se ha ido del discord`);

});

//=======================================
//     Sistema de Moderación V1.2
//=======================================

client.on('messageCreate', (message => {
	if (!message.author.bot) {


	const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; //min1 max30
	const hasLeveledUp = Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);

	//if (hasLeveledUp) {
	//	const user = Levels.fetch(message.author.id, message.guild.id);
	//
	//	const levelEmbed = new EmbedBuilder()
	//		.setTitle('¡Subiste de Nivel!')
	//		.setDescription(`Felicidades ${message.author} Subiste al nivel **${user.level + 1}**!`)
	//		.setColor('Random')
	//		.setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });
	//	const sendEmbed = message.channel.send({embeds: [levelEmbed]})
	//}
}
}));

client.on('messageCreate', (message) => {
	const Aviso = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Aviso')
		.setDescription('Su mensaje se eliminó debido a que incluia lenguaje o temas que no están permitidos en este servidor, ayudanos a mantener un ambiente agradable.' + '\n' + 'Para más información o consultas puedes ir a <#1060254670892834856>')
		.setImage('https://media.giphy.com/media/7VbE2HvYu1QUmoVQlt/giphy.gif')
		.setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' });

	let check = false
	for (var palabra in blacklisted) {
		if (!message.author.bot) {
			const general = client.channels.cache.find(channel => channel.id === "1058921412632518754")
			const mchat = client.channels.cache.find(channel => channel.id === "1076990833976418455")
			const ideas = client.channels.cache.find(channel => channel.id === "1058921412800299070")
			const memes = client.channels.cache.find(channel => channel.id === "1062501234159923261")
			const arte = client.channels.cache.find(channel => channel.id === "1060344590567215165")
			const fotos = client.channels.cache.find(channel => channel.id === "1058921412800299072")
			const tecno = client.channels.cache.find(channel => channel.id === "1072724870632312904")

			if (message.channel.id === general.id) {
				const arrword = message.content.split(/\s+/)

				const lowerword = arrword.map(element => {
					return element.toLowerCase();
				});
				if (lowerword.includes(blacklisted[palabra])) check = true
			}
			
			if (message.channel.id === mchat.id) {
				const arrword = message.content.split(/\s+/)

				const lowerword = arrword.map(element => {
					return element.toLowerCase();
				});
				if (lowerword.includes(blacklisted[palabra])) check = true
			}

			if (message.channel.id === ideas.id) {
				const arrword = message.content.split(/\s+/)

				const lowerword = arrword.map(element => {
					return element.toLowerCase();
				});
				if (lowerword.includes(blacklisted[palabra])) check = true
			}

			if (message.channel.id === memes.id) {
				const arrword = message.content.split(/\s+/)

				const lowerword = arrword.map(element => {
					return element.toLowerCase();
				});
				if (lowerword.includes(blacklisted[palabra])) check = true
			}

			if (message.channel.id === arte.id) {
				const arrword = message.content.split(/\s+/)

				const lowerword = arrword.map(element => {
					return element.toLowerCase();
				});
				if (lowerword.includes(blacklisted[palabra])) check = true
			}

			if (message.channel.id === fotos.id) {
				const arrword = message.content.split(/\s+/)

				const lowerword = arrword.map(element => {
					return element.toLowerCase();
				});
				if (lowerword.includes(blacklisted[palabra])) check = true
			}

			if (message.channel.id === tecno.id) {
				const arrword = message.content.split(/\s+/)

				const lowerword = arrword.map(element => {
					return element.toLowerCase();
				});
				if (lowerword.includes(blacklisted[palabra])) check = true
			}
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


client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isModalSubmit()) return;
	if (interaction.customId === 'anunciom') {
		
		const { channel, options } = interaction;
		const gif = require('./comandos/anuncio/gifs.json');
		const Grandom = gif[Math.floor(gif.length*Math.random())]

		const titulo = interaction.fields.getTextInputValue('titleinput')
		const desc = interaction.fields.getTextInputValue('descinput')

		const embed = new EmbedBuilder()
		.setTitle(titulo)
		.setDescription(desc)
		.setImage(Grandom)
		.setColor(5763719)
		.setFooter({ text: 'Karmafans', iconURL: 'https://cdn.discordapp.com/attachments/1065028049877348382/1065717118974316615/karmaland.png' })
		.setTimestamp();

	await channel.send({ embeds: [embed] });
	interaction.reply({ content: 'Anuncio enviado correctamente', ephemeral: true });
		}

});

//=============================================
// Esto tomará el token desde el archivo .env
//=============================================
client.login(process.env.TOKEN).then(() => {
	loadEvents(client);
	loadCommands(client);
})