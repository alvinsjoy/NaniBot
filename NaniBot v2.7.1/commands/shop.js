const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (let i in items) {
    content += `${items[i]} - ${client.shop[items[i]].cost} <:nanicoin:860184168759951380>\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("Nani Shop")
  .setDescription(content)
  .setColor("RANDOM")
  .setThumbnail(message.guild.iconURL({dynamic: true}))
  .setFooter(`Do ${client.prefix}buy <item> to purchase an item.`)
  return message.inlineReply(embed);
};

exports.help = {
  name: "shop",
  aliases: ["store","item","items"],
  category: 'Economy',
  usage: `shop`
};
