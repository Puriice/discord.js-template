const { MessageButton } = require('discord.js');

module.exports = {
	button: new MessageButton()
		.setCustomId('ping')
		.setLabel('Ping')
		.setStyle('PRIMARY')
		.setEmoji('✅'),
	async reply(interaction) {
		const { modal } = interaction.client.modals.get('ping');
		return await interaction.showModal(modal);
	},
};