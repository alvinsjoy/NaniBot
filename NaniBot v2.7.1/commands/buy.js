const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.inlineReply("Looks like you are poor.");
  let item = args[0];
  if (!item) return message.inlineReply(`What are you trying to buy?\nHere is an example for buying something: \`${client.prefix}buy <item>\`\nUse \`${client.prefix}shop\` to find available items`);
  let hasItem = client.shop[item.toLowerCase()];
  if (!hasItem || hasItem == undefined) return message.inlineReply(`That item doesnt exists lol\nHere is an example of buying something: \`${client.prefix}buy <item>\`\nUse \`${client.prefix}shop\` to find available items`);
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.inlineReply("Your balance is insufficient. You need  "+hasItem.cost+" <:nanicoin:860184168759951380> to buy this item.");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.inlineReply(`You purchased **${item}** for ** ${hasItem.cost}** <:nanicoin:860184168759951380>.`);
};

exports.help = {
  name: "buy",
  aliases: [],
  category: 'Economy',
  usage: `buy <item>`
}
