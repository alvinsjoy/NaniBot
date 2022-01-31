const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
   
    let leaderboard = client.eco.leaderboard({ limit: 10, raw: false });
    if (!leaderboard || leaderboard.length < 1) return message.inlineReply("❌ | Empty Leaderboard!");
    const embed = new MessageEmbed()
        .setTitle(`Leaderboard for ${message.guild.name}!`)
        .setColor("RANDOM")
        .setFooter(`© alvinjoy • Requested by: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({dynamic: true}))
        .setTimestamp();
    leaderboard.forEach(u => {
        embed.addField(`${u.position}. ${client.users.cache.get(u.id) ? client.users.cache.get(u.id).tag : "Deleted User#0000"}`, `${u.money} <:nanicoin:860184168759951380>`);
    });
    return message.inlineReply(embed);
}

exports.help = {
    name: "leaderboard",
    aliases: ["lb"],
    category: 'Economy',
    usage: `leaderboard`
}