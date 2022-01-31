const bot = require('nekos.life');
const {Discord,richEmbed} = require('discord.js')
const neko = new bot();
exports.execute = async (client, message, args) => {
        let owo = (await neko.sfw.fact());

        message.inlineReply(owo.fact, { allowedMentions: { repliedUser: false } }).catch(error => {
            console.error(error);
        });
};
exports.help = {
    name: "fact",
    aliases: [],
    category: 'Fun',
    usage: `fact`
}