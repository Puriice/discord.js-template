module.exports = {
	name: 'interactionCreate',
	once: false,
	async execute(interaction) {
		/* code here */
		if (!interaction.isModalSubmit()) return;

		const modal = interaction.client.modals.get(interaction.customId);

		if (!modal) throw new Error('No such modal: ' + interaction.customId);
		try {
			await modal.reply(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};