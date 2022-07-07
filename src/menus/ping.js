const { MessageSelectMenu } = require('discord.js');

const options = [
	{
		label: 'Select me',
		description: 'This is a description',
		value: 'first_option',
	},
	{
		label: 'You can select me too',
		description: 'This is also a description',
		value: 'second_option',
	},
	{
		label: 'You can select me also',
		description: 'This is a description again',
		value: 'third_option',
	},
];

module.exports = {
	menu: new MessageSelectMenu()
		.setCustomId('ping_menu')
		.setPlaceholder('Nothing Selected')
		.addOptions(options),
	async execute(interaction) {

		return await interaction.reply(`Pong! :ping_pong: value: ${interaction.values}`);
	},
};