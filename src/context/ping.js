const { ContextMenuCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('Ping')
		.setType(2),
	async execute(interaction) {
		await interaction.reply('Pong! :ping_pong:');
	},
};