const Discord = require("discord.js")
  exports.execute = async (client, message, args) => {
    let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let rng = Math.floor(Math.random() * 101);

          let argsEmbed = new Discord.MessageEmbed()
            .setTitle("Cuterate Machine")
            .setColor("RANDOM")
            .setDescription(`${User.user.username} is **` + rng + "%** cute aw <a:cute:864457551440904223>")
            .setFooter(`© alvinjoy • Requested by: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp(new Date());
            message.inlineReply(argsEmbed).catch(e => {
            console.log(e)
        })
}
exports.help = {
    name: "cuterate",
    aliases: ["howcute","cute"],
    category: 'Fun',
    usage: `cuterate <@user>`
}