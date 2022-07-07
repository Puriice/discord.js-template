const path = require('path');

module.exports = {
	name: 'interactionCreate',
	once: false,
	execute(interaction) {
		/* code here */
		if (interaction.isCommand()) require(path.join(__dirname, 'interaction', 'interactionCreate.commands.js')).execute(interaction);
		else if (interaction.isButton()) require(path.join(__dirname, 'interaction', 'interactionCreate.buttons.js')).execute(interaction);
		else if (interaction.isSelectMenu()) require(path.join(__dirname, 'interaction', 'interactionCreate.menus.js')).execute(interaction);
		else if (interaction.isContextMenu()) require(path.join(__dirname, 'interaction', 'interactionCreate.contextMenus.js')).execute(interaction);
		else if (interaction.isModalSubmit()) require(path.join(__dirname, 'interaction', 'interactionCreate.modals.js')).execute(interaction);
		else throw new Error('Unknown interaction type: ' + interaction.type);
	},
};