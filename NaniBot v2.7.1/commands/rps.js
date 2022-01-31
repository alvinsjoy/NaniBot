const Discord = require('discord.js')

  exports.execute = async (client, message, args) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Rock Paper Scissors Game!")
      .setDescription("React with 🪨, ✂ or 📰 to play!")
      .setFooter(`© alvinjoy • Requested by: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      let msg = await message.inlineReply(embed)
      await msg.react("🪨")
      await msg.react("✂")
      await msg.react("📰")

      const filter = (reaction, user) => {
          return ['🪨', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
      }

      const choices = ['🪨', '✂', '📰']
      const me = choices[Math.floor(Math.random() * choices.length)]
      msg.awaitReactions(filter, {max: 1, time: 60000, error: ["time"]}).then(
          async(collected) => {
              const reaction = collected.first()
              let result = new Discord.MessageEmbed()
              .setTitle("Rock Paper Scissors Game!")
              .setFooter(`© alvinjoy • Requested by: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true }))
              .addField("Your Choice", `${reaction.emoji.name}`)
              .addField("Bots choice", `${me}`)
              .setTimestamp();
              await msg.edit(result)

              if((me === "🪨" && reaction.emoji.name === "✂") ||
              (me === "✂" && reaction.emoji.name === "📰") ||
              (me === "📰" && reaction.emoji.name === "🪨")) {
                  message.reply("You Lost!");
              } else if (me === reaction.emoji.name) {
                  return message.reply("Its a tie!");
              } else {
                  return message.reply("You Won!");
              }
          })
          .catch(collected => {
              message.reply('Process has been cancled, you failed to respond in time!');
          }) 
}
  exports.help = {
    name: "rps",
    aliases: ["rockpapersissors"],
    category: 'Fun',
    usage: "rps"
}