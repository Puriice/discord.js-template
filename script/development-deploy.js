const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const TOKEN = process.env.TOKEN;

if (!CLIENT_ID) throw new Error('CLIENT_ID is not defined. Please specify it in .env');
if (!GUILD_ID) throw new Error('GUILD_ID is not defined. Please specify it in .env');
if (!TOKEN) throw new Error('TOKEN is not defined. Please specify it in .env');

const commandsPath = path.resolve(__dirname, '..', 'src', 'commands');
const menusPath = path.resolve(__dirname, '..', 'src', 'context');
const commands = [];

function registerCommands(registerPath) {
	try {
		fs.readdirSync(registerPath).filter(file => file.endsWith('.js')).forEach(file => {
			const command = require(path.join(registerPath, file));
			commands.push(command.data);
		});
	} catch (err) {
		console.log(err);
	}
}

registerCommands(commandsPath);
registerCommands(menusPath);

commands.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();