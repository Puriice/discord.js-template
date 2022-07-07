module.exports = {
	name: 'interactionCreate',
	once: false,
	async execute(interaction) {
		/* code here */
		if (!interaction.isButton()) return;

		const button = interaction.client.buttons.get(interaction.customId);

		if (!button) throw new Error('No such button: ' + interaction.customId);
		try {
			await button.reply(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};