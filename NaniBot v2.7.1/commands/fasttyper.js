const { MessageEmbed } = require("discord.js");
const djsGames = require('djs-games')
exports.execute = async (client, message, args) => {
const FastTyper = new djsGames.FastTyper()
FastTyper.startGame(message)
}
exports.help = {
  name: "fasttyper",
  aliases: ['fastest','fast','faster'],
  category: 'Fun',
  usage: `fasttyper`
};