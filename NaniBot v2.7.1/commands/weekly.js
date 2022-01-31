const Discord = require("discord.js");
exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 9000) + 50000;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    let weekembed = new Discord.MessageEmbed()
    .setDescription(`You have claimed **${addMoney.amount}** <:nanicoin:860184168759951380> as your weekly credit and now you have **${addMoney.after}** <:nanicoin:860184168759951380>`)
    .setColor('RANDOM')
    if (addMoney.onCooldown) return message.inlineReply(`You have already claimed your weekly credit. Come back after ${addMoney.time.days} days, ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes and ${addMoney.time.seconds} seconds to claim it again.`);
    else return message.inlineReply(weekembed);
};

exports.help = {
    name: "weekly",
    aliases: ["week"],
    category: 'Economy',
    usage: "weekly"
}
