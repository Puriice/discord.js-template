const { Modal, MessageActionRow, TextInputComponent } = require('discord.js');

const input = new TextInputComponent()
	.setCustomId('name')
	.setLabel('Hi, who are you?')
	.setStyle('SHORT')
	.setPlaceholder('Please type your name here.')
	.setRequired(true);


const rows = [
	new MessageActionRow().addComponents(input),
];

module.exports = {
	modal: new Modal()
		.setCustomId('ping')
		.setTitle('This is a ping modal.')
		.setComponents(rows),
	async reply(interaction) {
		const name = interaction.fields.getTextInputValue('name');
		await interaction.reply({ content: `Hello, ${name}. You had been submit.`, ephemeral: true });
	},
};