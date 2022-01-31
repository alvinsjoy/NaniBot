const Discord = require('discord.js')
const figlet = require('figlet')
  exports.execute = async (client, message, args) => {

      if(!args[0]) return message.inlineReply("Please provide some text!");

      msg = args.join(" ");

      figlet.text(msg, function (err, data){
          if(err){
              console.log('Something went wrong');
              console.dir(err);
          }
          if(data.length > 2000) return message.inlineReply('Please provide text shorter than 2000 characters')

          message.channel.send('```fix\n' + data + '```')
      })
  }
exports.help = {
    name: "ascii",
    aliases: [],
    category: 'Utility',
    usage: `ascii`
}