const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, embedLength, EmbedBuilder, ButtonBuilder, ButtonStyle, Message, } = require('discord.js');
const { colors, yellow } = require('colors');
const dotenv = require('dotenv');
const { channel } = require('node:diagnostics_channel');
dotenv.config();

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

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'comandos');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log('[','!'.yellow,']',`Al comando ${filePath} le faltan las propiedades DATA y EXECUTE.`);
	}
}

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;
	console.log('[','!'.green,']','El usuario', interaction.user.id, 'ejecutó exitosamente el comando:', interaction.commandName)

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error('[','!'.red,']',error);
		await interaction.reply({ content: 'Hubo un error tratando de ejecutar ese comando.', ephemeral: true });
	}
});


//=======================================
//Sistema de Moderación  Work In Progress
//=======================================

client.on('messageCreate', (message) => {
	if (/\bbasura\b/i.test(message.content)) {
	  setTimeout(() => message.delete(), 1000);
	  message.reply('WIP')
	  
	  
	}
  })

//===================================
// Saludo del bot al ser mencionado
//===================================
  client.on("messageCreate", message => {

	if (/<@1064599332734652536>/i.test(message.content)) {
		message.author.send("Hola!, prontó se dará más información acerca del bot. (En desarrollo)");
		message.author.send("https://media.giphy.com/media/gJ2eADoYgXYVR9xRCY/giphy.gif");
		console.log('[','!'.green,']','El bot fue mencionado por', message.author.username)
		} 
		  
  })


//========================================================
// Esto avisará cuando el bot esté iniciado correctamente.
//========================================================
client.once(Events.ClientReady, c => {
	console.log('[','!'.green,']',`Listo!, Bot logeado como ${c.user.tag}`);
// Aquí se establece la actividad del bot y su estado (Online, Ausente, no molestar)	
	client.user.setPresence({
		activities: [{ name: `/hola 👀`, type: ActivityType.Listening }],
		status: 'idle',
	  });
});

//===========================================
//Esto se encarga de construir el formulario
//===========================================

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'prueba') {
		console.log('[','!'.green,']','El usuario', interaction.user.id, 'ejecutó exitosamente el comando:', interaction.commandName)
		const modal = new ModalBuilder()
			.setCustomId('Prueba')
			.setTitle('Crea el lore de tu personaje');

		const nombreinput = new TextInputBuilder()
			.setCustomId('nombreinput')
			.setLabel("¿Cuál es el nombre de tu personaje?")
			.setStyle(TextInputStyle.Short);

		const edadinput = new TextInputBuilder()
			.setCustomId('edadinput')
			.setLabel("¿Que edad tiene tu personaje?")
			.setStyle(TextInputStyle.Short);

		const loreinput = new TextInputBuilder()
			.setCustomId('loreinput')
			.setLabel("Cuentanos tu historia.")    
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
		await interaction.reply({ content: 'Su lore se envió correctamente', ephemeral: true });


	//=============================
	//Embed para el canal de Lore
	//=============================

	const user = '<@' + interaction.user.id + '>'; 
	const Lore = new EmbedBuilder()
		.setColor(0x0099FF)
		.addFields(
			{ name: '---> Nombre <---', value: interaction.fields.getTextInputValue('nombreinput') + ' / ' + user, inline: false },
			{ name: '---> Edad <---', value: interaction.fields.getTextInputValue('edadinput'), inline: false },
			{ name: '---> Lore <---', value: interaction.fields.getTextInputValue('loreinput'), inline: false }
		)

	//==============================
	// Embed que se envia al usuario
	// una vez recibido el formulario
	//==============================
	const LoreUsuario = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('KarmaFans')
		.setDescription('Su lore fue enviado exitosamente (Aun en desarrollo)')	
		.setImage('https://media.giphy.com/media/JNySPj69tVEEaaqoa9/giphy.gif')

	
	//================================
	//Botón para crear un lore
	//================================

	const botonlore = new ActionRowBuilder()  
		.addComponents(
			new ButtonBuilder()
				.setCustomId('FormularioLore')
				.setLabel('Crear un lore')
				.setStyle(ButtonStyle.Primary)
		)


	//======================
	//Esto envia los embed
	//al rellenar el fomrulario
	//========================

	await interaction.channel.send({ embeds: [Lore], components: [botonlore] }); 
	await interaction.user.send({ embeds: [LoreUsuario] })


});

//=============================================
// Esto tomará el token desde el archivo .env
//=============================================
client.login(process.env.TOKEN);