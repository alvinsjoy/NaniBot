const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let userBalance = client.eco.fetchMoney(member.id);
    const embed = new MessageEmbed()
        .setTitle(`${member.user.username}'s Balance`)
        .addField(`Cash`, `${userBalance.amount} <:nanicoin:860184168759951380>`, true)
        .addField(`Position`, userBalance.position, true)
        .setColor("RANDOM")
        .setFooter(`© alvinjoy • Requested by: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();
        
    return message.inlineReply(embed);
}

exports.help = {
    name: "balance",
    aliases: ["money", "credits", "bal"],
    category: 'Economy',
    usage: `balance`
}
