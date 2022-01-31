exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let authordata = client.eco.fetchMoney(message.author.id) 
  if (!member) return message.inlineReply(`Please mention the person or give their ID\nExample: \`${client.prefix}give <@user/userid> <amount>\``) 
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.inlineReply(`Please enter a valid amount to transfer\nExample: \`${client.prefix}give <@user/userid> <amount>\``) 
  if(authordata.amount < amount) return message.inlineReply('Looks like you don\'t have that much money') 
  if (amount > 100000) return message.inlineReply('You cannot transfer more than 10000 at once! This is to avoid exploits')
  await client.eco.transfer(message.author.id, member.id, amount) 
  return message.inlineReply(`You have successfully transferred **${amount}** <:nanicoin:860184168759951380> to ** ${member.user.tag}**`)
}
exports.help = {
  name: "transfer",
  aliases: ['give', 'share'],
  category: 'Economy',
  usage: `transfer <member> <amount>`
};
