module.exports = {
	name: 'interactionCreate',
	once: false,
	async execute(interaction) {
		if (!interaction.isSelectMenu()) return;

		const menu = interaction.client.menus.get(interaction.customId);

		if (!menu) throw new Error('No such menu: ' + interaction.customId);

		try {
			await menu.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this menu!', ephemeral: true });
		}
	},
};