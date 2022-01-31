const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fs = require('fs');
exports.execute = async (client, message, args) => {
  if (!client.config.admins.includes(message.author.id)) return message.inlineReply("Only alvinjoy can use this command! <:evil_star:860390304389660672>");
  if (args.join(" ").toLowerCase().includes("token")) return message.inlineReply('<:bruh:885500767031656518>')
  function clean(text) {
		if (typeof text !== 'string') {text = require('util').inspect(text, { depth: 0 });}
		text = text
			.replace(/```js/g, '')
			.replace(/```/g, '')
      .replace(client.token, 'bruh')
		return text;
	}
	const code = args.join(' ');
	try {

		let evaled = eval(code);

		if (typeof evaled !== 'string') {
			evaled = require('util').inspect(evaled);
		}

		if (evaled.length > 2000) {
			const evalcode1 = new Discord.MessageEmbed()
				.setDescription('`Result`\n' + '```js\nDown```')
				.setColor('RANDOM');

			message.channel.send(evalcode1), fs.writeFile('eval.txt', `${clean(evaled)}`, function(err) {
				if (err) console.log('error', err);
			},
			), message.channel.send({ files: ['eval.txt'] });
		} else {
		const evalcode = new Discord.MessageEmbed()
			.setDescription('`Result`\n' + `\`\`\`js\n${clean(evaled)}\`\`\``)
			.setColor('RANDOM');

		message.channel.send(evalcode);
		}
	}
	catch (err) {
		const errorcode = new Discord.MessageEmbed()
			.setDescription('`Result`\n' + `\`\`\`js\n${clean(err)}\`\`\``)
			.setColor('RANDOM');

		message.channel.send(errorcode);
	}
};
exports.help = {
    name: "eval",
    aliases: [],
    category: 'Utility',
    usage: `eval`
}