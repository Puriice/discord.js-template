const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const contextPath = path.resolve(__dirname, '..', 'context');

module.exports = (client) => {
	console.log('Loading Context Menus...');
	client.context = new Collection();

	try {
		fs.readdirSync(contextPath).filter(file => file.endsWith('.js')).forEach(file => {
			const command = require(path.join(contextPath, file));

			client.context.set(command.data.name, command);
		});
	} catch (error) {
		console.error(error);
	}

	console.log('Context Menus loaded!');
};