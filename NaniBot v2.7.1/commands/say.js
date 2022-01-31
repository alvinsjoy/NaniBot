const Discord = require('discord.js')
  exports.execute = async (client, message, args) => {

      if(!args[0]) return message.inlineReply("Please provide some text!");

      msg = args.join(" ");
          message.delete()
        if (!client.config.admins.includes(message.author.id)) {
          message.channel.send(`${msg}\n\n~${message.author.username}`,{"allowedMentions": { "users" : []}})
      } else message.channel.send(msg,{"allowedMentions": { "users" : []}})
  }
exports.help = {
    name: "say",
    aliases: ['botsay','s'],
    category: 'Utility',
    usage: `say`
}