module.exports = {
	name: 'interactionCreate',
	once: false,
	async execute(interaction) {
		if (!interaction.isContextMenu()) return;

		const menu = interaction.client.menus.get(interaction.commandName);

		if (!menu) throw new Error('No such menu: ' + interaction.commandName);

		try {
			await menu.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this menu!', ephemeral: true });
		}
	},
};