const Discord = require("discord.js");
module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 2000) + 20000;
    let work = client.eco.work(client.ecoAddUser, amount);
    let workembed = new Discord.MessageEmbed()
    .setDescription(`You worked as **${work.workedAs}** and earned **${work.amount}** <:nanicoin:860184168759951380>. Now you have **${work.after}** <:nanicoin:860184168759951380>`)
    .setColor('RANDOM')
    if (work.onCooldown) return message.inlineReply(`You are tired rn. Come back after ${work.time.minutes} minutes and ${work.time.seconds} seconds to work again`);
    else return message.inlineReply(workembed);
};

exports.help = {
    name: "work",
    aliases: ["w"],
    category: 'Economy',
    usage: "work"
}
