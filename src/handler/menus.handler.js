const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const menusPath = path.resolve(__dirname, '..', 'menus');

module.exports = (client) => {
	console.log('Loading Select Menus...');
	client.menus = new Collection();

	try {
		fs.readdirSync(menusPath).filter(file => file.endsWith('.js')).forEach(file => {
			const menu = require(path.join(menusPath, file));

			client.menus.set(menu.menu.customId, menu);
		});
	} catch (error) {
		console.error(error);
	}

	console.log('Select Menus loaded!');
};