module.exports = {
	name: 'interactionCreate',
	once: false,
	async execute(interaction) {
		if (!interaction.isContextMenu()) return;

		const context = interaction.client.context.get(interaction.commandName);

		if (!context) throw new Error('No such Context Menu: ' + interaction.commandName);

		try {
			await context.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this Context Menu!', ephemeral: true });
		}
	},
};