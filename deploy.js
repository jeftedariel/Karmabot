const fs = require('node:fs');
const { REST, Routes } = require('discord.js');
const { colors } = require('colors');
const dotenv = require('dotenv');
dotenv.config();

// Esto va a tomar los archivos de comandos que se crearon en la carpeta 'comandos'
const commands = [];
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

// Esto va a tomar esa información y la va a enviar en json
for (const file of commandFiles) {
	const command = require(`./comandos/${file}`);
	commands.push(command.data.toJSON());
}

// Esto se encarga de crear la instancia
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// Despliega los comandos nuevos o los actualiza
(async () => {
	try {
		console.log('Se están refrescando ${commands.length} comandos');

		const data = await rest.put(
			Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID),
			{ body: commands },
		);

		console.log('Se recargaron correctamente ${commands.length} comandos');
	} catch (error) {
		console.error(error);
	}
})();