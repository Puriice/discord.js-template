const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const commandsPath = path.resolve(__dirname, '..', 'context');

module.exports = (client) => {
	console.log('Loading Context Menus...');
	client.context = new Collection();

	fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')).forEach(file => {
		const command = require(path.join(commandsPath, file));

		client.context.set(command.data.name, command);
	});
	console.log('Context Menus loaded!');
};