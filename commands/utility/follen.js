const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('folen')
		.setDescription('blz kscerato!'),
	async execute(interaction) {
		await interaction.reply('blz kscerato!');
	},

};