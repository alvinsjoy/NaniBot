const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
  if(!args[0]) {
    const embed = new MessageEmbed()
    .setAuthor(`${client.user.username} HelpDesk`,client.user.displayAvatarURL({ dynamic: true }))
    .setDescription(`**Type \`${client.prefix}help commands\` to see all commands and aliases.**\n${client.user.username} is a private Discord bot developed for ${message.guild.name} by <@825382504353234954>.\nTotal Commands: ${client.commands.size}\n\n<:Info:880785218477363222> __**Information Commands**__\n> **[Botinfo:](https://bit.ly/alvinjoy)** View bot info, uptime, etc\n> **[Ping:](https://bit.ly/alvinjoy)** View bot latency\n> **[Help:](https://bit.ly/alvinjoy)** See a list of avalable commands\n\n<:Utilities:880785218607390721> __**Utility Commands**__\n> **[Ascii:](https://bit.ly/alvinjoy)** Asciifies the given text\n> **[Define:](https://bit.ly/alvinjoy)** Search up anything in the Urban Dictionary\n> **[Fact:](https://bit.ly/alvinjoy)** Sends a random fact\n> **[Wikipedia:](https://bit.ly/alvinjoy)** Search up anything in the Wikipedia\n\n<:Economy:880785219509166170> __**Economy Commands**__\n> **[Balance:](https://bit.ly/alvinjoy)** Check your nanicoin balance, or someone elses\n> **[Beg:](https://bit.ly/alvinjoy)** This command is used to "beg" for nanicoins. You have a random chance to gain some coins\n> **[Buy:](https://bit.ly/alvinjoy)** Buy currency items from the shop\n> **[Daily:](https://bit.ly/alvinjoy)** Receive your daily nanicoins\n > **[Inventory:](https://bit.ly/alvinjoy)** Check out your inventory, or someone else's\n> **[Leaderboard:](https://bit.ly/alvinjoy)** View the economy leaderboard\n> **[Search:](https://bit.ly/alvinjoy)** This command is used to gain nanicoins\n> **[Shop:](https://bit.ly/alvinjoy)** See what's in the nani store\n> **[Transfer:](https://bit.ly/alvinjoy)** Share some nanicoins with someone\n> **[Weekly:](https://bit.ly/alvinjoy)** Receive your weekly nanicoins\n> **[Work:](https://bit.ly/alvinjoy)** Earn some nanicoin by doing some work\n\n<:Fun:880785219072970762> __**Fun Commands**__\n> **[8ball:](https://bit.ly/alvinjoy)** Ask the magic 8ball about your future\n> **[Akinator:](https://bit.ly/alvinjoy)** Answer her questions and find the charecter in your mind\n> **[Connect4:](https://bit.ly/alvinjoy)** Play a nice game of connect4 with your mates\n> **[Cuterate:](https://bit.ly/alvinjoy)** See how cute you are\n> **[Facepalm:](https://bit.ly/alvinjoy)** Facepalm for someone\n> **[FastTyper:](https://bit.ly/alvinjoy)** See who is fastest in texting\n> **[Gayrate:](https://bit.ly/alvinjoy)** See how gay you are\n> **[Joke:](https://bit.ly/alvinjoy)** Tells you a nice joke\n> **[Meme:](https://bit.ly/alvinjoy)** Gets you the best memes of Reddit\n> **[PP:](https://bit.ly/alvinjoy)** Measure your PP size\n> **[RPS:](https://bit.ly/alvinjoy)** Play rock paper sissors with the bot\n> **[Say:](https://bit.ly/alvinjoy)** ${client.user.username} will say what you tell her to say\n> **[Simprate:](https://bit.ly/alvinjoy)** See how simp you are\n> **[Trivia:](https://bit.ly/alvinjoy)** Answer some trivia`)
    .setColor("RANDOM")
    .setTimestamp(new Date())
    .setFooter(`© alvinjoy • Type ${client.prefix}help commands to see all commands and aliases`, message.author.displayAvatarURL);
  return message.inlineReply(embed)
  }
  else {
    const all_embeds = [];
    let i = 0;
    client.commands.forEach(cmd => {
      if (!all_embeds[Math.floor(i / 25)]) { //checks if the embed with the required fields already exists in our array
        all_embeds.push(new MessageEmbed()
          .setAuthor(`${client.user.username} All Commands`, client.user.displayAvatarURL({ dynamic: true }))
          .setColor("RANDOM")
          .setTimestamp(new Date())
          .setFooter(`© alvinjoy • Requested by: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))); 
      }
      all_embeds[Math.floor(i / 25)]
        .addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix}${cmd.help.usage}\``, true);
      i++;
    });
all_embeds.forEach( x =>
  message.channel.send(x))
  }
}
exports.help = {
  name: "help",
  aliases: ["h"],
  category: 'Utility',
  usage: `help`
}
