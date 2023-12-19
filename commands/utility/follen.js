const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('salve')
		.setDescription('greetings'),
	async execute(interaction) {
		await interaction.reply('fala ludmillo!');
	},

};