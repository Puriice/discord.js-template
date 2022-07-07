const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const buttonsPath = path.resolve(__dirname, '..', 'buttons');

module.exports = (client) => {
	console.log('Loading buttons...');
	client.buttons = new Collection();

	fs.readdirSync(buttonsPath).filter(file => file.endsWith('.js')).forEach(file => {
		const buttons = require(path.join(buttonsPath, file));

		client.buttons.set(buttons.button.customId, buttons);
	});
	console.log('Buttons loaded!');
};
