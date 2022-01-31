const { MessageEmbed } = require("discord.js");
const akinator = require('discord.js-akinator')
const language = "en";
const childMode = false;
const useButtons = true;
  exports.execute = async (client, message, args) => {
        akinator(message, client)
}
exports.help = {
    name: "akinator",
    aliases: ["aki"],
    category: 'Fun',
    usage: `akinator`
}