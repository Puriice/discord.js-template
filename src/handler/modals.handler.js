const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const modalsPath = path.resolve(__dirname, '..', 'modals');

module.exports = (client) => {
	console.log('Loading modals...');
	client.modals = new Collection();

	try {
		fs.readdirSync(modalsPath).filter(file => file.endsWith('.js')).forEach(file => {
			const modals = require(path.join(modalsPath, file));

			client.modals.set(modals.modal.customId, modals);
		});
	} catch (error) {
		console.error(error);
	}

	console.log('modals loaded!');
};
