const Discord = require("discord.js");
module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 5000) + 30000;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    let dailyembed = new Discord.MessageEmbed()
    .setDescription(`You have claimed **${addMoney.amount}** <:nanicoin:860184168759951380> as your daily credit and now you have **${addMoney.after}** <:nanicoin:860184168759951380>`)
    .setColor('RANDOM')
    if (addMoney.onCooldown) return message.inlineReply(`You have already claimed your daily credit. Come back after ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes and ${addMoney.time.seconds} seconds to claim it again.`);
    else return message.inlineReply(dailyembed);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    category: 'Economy',
    usage: "daily"
}
