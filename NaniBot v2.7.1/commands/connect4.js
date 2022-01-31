const { MessageEmbed } = require("discord.js");
const djsGames = require('djs-games')
  exports.execute = async (client, message, args) => {
  const ConnectFour = new djsGames.ConnectFour()
  ConnectFour.startGame(message)
  }
exports.help = {
  name: "connect4",
  aliases: ["con4","c4"],
  category: 'Fun',
  usage: `connect4`
};