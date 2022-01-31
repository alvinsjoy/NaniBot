const { MessageEmbed } = require("discord.js")
exports.execute = async (client, message, args) => {

  const embed = new MessageEmbed()
    .setTitle(`Inventory of ${message.author.username}`)
    .setColor("RANDOM")
    .setFooter(`© alvinjoy • Requested by: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp();
  const x = client.db.get(`items_${message.author.id}`);
if(!x) { return message.inlineReply(`No Items Found To Display`); }
const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
}, {});
const result = Object.keys(arrayToObject).map(k => embed.addField(`Name: ${k}`,`Quantity: **${arrayToObject[k]}**`, false));
  
 
  return message.inlineReply(embed);
}
exports.help = {
  name: "inventory",
  aliases: ["inv"],
  category: 'Economy',
  usage: `inventory`
}

