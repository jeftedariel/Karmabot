const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { colors } = require('colors');
const dotenv = require('dotenv');
dotenv.config();

// Esto se encargará de crear una nueva instancia para el bot

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
		console.log(`AVISO Al comando ${filePath} le faltan las propiedades DATA y EXECUTE.`);
	}
}

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Hubo un error tratando de ejecutar ese comando.', ephemeral: true });
	}
});

// Moderación 
client.on('messageCreate', (message) => {
	if (/\bVARIABLE\b/i.test(message.content)) {
	  setTimeout(() => message.delete(), 1000);
	  message.reply({ content: 'Secret Pong!', ephemeral: true })
	  
	}
  })



// Esto avisará cuando el bot esté iniciado correctamente.

client.once(Events.ClientReady, c => {
	console.log(`Listo!, Bot logeado como ${c.user.tag}`);
// Aquí se establece la actividad del bot y su estado (Online, Ausente, no molestar)	
	client.user.setPresence({
		activities: [{ name: `Karmafans`, type: ActivityType.Playing }],
		status: 'online',
	  });
});


// Esto tomará el token desde el archivo .env

client.login(process.env.TOKEN);
