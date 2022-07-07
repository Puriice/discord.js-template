const { MessageActionRow } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		const { button } = interaction.client.buttons.get('ping');
		const { menu } = interaction.client.menus.get('ping_menu');
		// const menu = new MessageSelectMenu()
		// 	.setCustomId('select')
		// 	.setPlaceholder('Nothing selected')
		// 	.addOptions([
		// 		{
		// 			label: 'Select me',
		// 			description: 'This is a description',
		// 			value: 'first_option',
		// 		},
		// 		{
		// 			label: 'You can select me too',
		// 			description: 'This is also a description',
		// 			value: 'second_option',
		// 		},
		// 	]);

		const buttonRow = new MessageActionRow()
			.addComponents(button);

		const menuRow = new MessageActionRow()
			.addComponents(menu);

		const row = [buttonRow, menuRow];

		await interaction.reply({ content: 'Pong! :ping_pong:', components: row });
	},
};
