const Discord = require("discord.js");
exports.execute = async (client, message, args) => {
    let users = ["Pocket","T-Shirt","Underwear","Street","Red street","Discord","PornHub","Bus","Grass","Van","Purse","Dresser","Pantry","Garage","Garbage","Basement","Air","Couch"];
    let amount = Math.floor(Math.random() * 500) + 3000;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 300000, customName: "search" });
    let searchembed = new Discord.MessageEmbed()
    .setDescription(`Your search on **${users[Math.floor(Math.random() * users.length)]}** was somewhat profitable, you found **${beg.amount}** <:nanicoin:860184168759951380>. Now you have **${beg.after}** <:nanicoin:860184168759951380>`)
    .setColor('RANDOM')
    let failembed = new Discord.MessageEmbed()
    .setDescription(`**${users[Math.floor(Math.random() * users.length)]}:** You were caught! You couldn't get money kiddo`)
    .setColor('RANDOM')
    if (beg.onCooldown) return message.inlineReply(`Yo can't search sooo much! come back after ${beg.time.minutes} minutes and ${beg.time.seconds} seconds`);
    if (beg.lost) return message.inlineReply(failembed);
    else return message.inlineReply(searchembed);
};

exports.help = {
    name: "search",
    aliases: [],
    category: 'Economy',
    usage: "search"
}
