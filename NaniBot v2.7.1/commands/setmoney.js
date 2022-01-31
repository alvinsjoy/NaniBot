const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return message.inlineReply("Only alvinjoy can use this command! <:evil_star:860390304389660672>"); // return if author isn't bot owner
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!user) return message.inlineReply("Please specify a user!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.inlineReply("Please specify a valid amount.");
    let data = client.eco.setMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Money Updated!`)
        .addField(`User`, `<@${data.user}>`)
        .addField(`Total Amount`, data.after)
        .setColor("RANDOM")
        .setFooter(`© alvinjoy • Requested by: ${message.author.username}`)
        .setTimestamp();
    return message.inlineReply(embed);
}

exports.help = {
    name: "setmoney",
    aliases: ["setbal"],
    category: 'Economy',
    usage: `setmoney @user <amount>`
}
