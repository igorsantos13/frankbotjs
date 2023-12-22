const { SlashCommandBuilder } = require('discord.js');

const phrases = [
	'fala ludmillo!',
	'koe framboeso',
	'fala tu xoxoto',
	'SABUGO!',
	'de boa claudia arraio?',
	'barato é o seguinte lacraio...',
	'qual foi cervejo?',
];

function randomGreeting() {
	const randomNumber = Math.floor(Math.random() * phrases.length) + 1;
	const randomPhrase = phrases[randomNumber];

	return randomPhrase;
}


module.exports = {
	data: new SlashCommandBuilder()
		.setName('salve')
		.setDescription('greetings'),
	async execute(interaction) {
		await interaction.reply(randomGreeting());
	},

};