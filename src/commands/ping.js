const { MessageActionRow } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		const { button } = interaction.client.buttons.get('ping');

		const row = new MessageActionRow()
			.addComponents(button);

		await interaction.reply({ content: 'Pong! :ping_pong:', components: [row] });
	},
};
