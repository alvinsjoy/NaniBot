const Discord = require("discord.js")
  exports.execute = async (client, message, args) => {
    let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let rng = Math.floor(Math.random() * 101);

          let argsEmbed = new Discord.MessageEmbed()
            .setTitle("Gayrate Machine")
            .setColor("RANDOM")
            .setDescription(`${User.user.username} is **` + rng + "%** gay <a:gay:872461050421862400>")
            .setFooter(`© alvinjoy • Requested by: ${message.author.username}`)
            .setTimestamp(new Date());
            message.inlineReply(argsEmbed).catch(e => {
            console.log(e)
        })
}
exports.help = {
    name: "gayrate",
    aliases: ["howgay","gay"],
    category: 'Fun',
    usage: `gayrate <@user>`
}