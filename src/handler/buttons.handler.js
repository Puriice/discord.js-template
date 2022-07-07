const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const buttonsPath = path.resolve(__dirname, '..', 'buttons');

module.exports = (client) => {
	console.log('Loading buttons...');
	client.buttons = new Collection();

	try {
		fs.readdirSync(buttonsPath).filter(file => file.endsWith('.js')).forEach(file => {
			const button = require(path.join(buttonsPath, file));

			client.buttons.set(button.button.customId, button);
		});
	} catch (error) {
		console.error(error);
	}

	console.log('Buttons loaded!');
};
