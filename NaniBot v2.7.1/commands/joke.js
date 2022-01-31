const api = require("srod-v2");
const Discord = require("discord.js");
  exports.execute = async (client, message, args) => {
    
    const Data = await api.GetJoke({ Color:"RANDOM" });
    return message.inlineReply(Data);
};
exports.help = {
    name: "joke",
    aliases: [],
    category: 'Fun',
    usage: `joke`
}