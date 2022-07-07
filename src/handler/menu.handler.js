const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const commandsPath = path.resolve(__dirname, '..', 'menus');

module.exports = (client) => {
	console.log('Loading menu...');
	client.menus = new Collection();

	fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')).forEach(file => {
		const command = require(path.join(commandsPath, file));

		client.menus.set(command.data.name, command);
	});
	console.log('Menus loaded!');
};