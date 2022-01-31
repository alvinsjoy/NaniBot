const Discord = require('discord.js')
  exports.execute = async (client, message, args) => {
    if(!args[0]) return message.inlineReply('Please ask a question!')
    let replies = ["Yes","Yus","Of course","Nani?","No","Better not tell you now","Nah", "Never","IDK","Not a chance.","Maybe...","Sadly, yes...","Sadly, no...","Ask again later...","Sure, why not","Heck off, you know that's a no","Heck off, you know that's a yes","Whatever yes!","Whatever no!","<a:RickRoll:871432151189565470>","ask again later when I'm less busy with ur mum","Is trump's skin orange?","im not sure but ur def stupid","honestly I don't care lol","dont sass me bitch","No, you dingleberry","im an 8ball, not a deal with ur crap ball"];
        
    let result = Math.floor((Math.random()*replies.length));
    let question = args.slice().join(" ");

    let ballembed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}'s Magic 8 Ball Game`)
    .setColor("RANDOM")
    .setFooter(`© alvinjoy • Requested by: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true }))
    .addField(question,`<a:8b:871427328041975868>︱`+ replies[result])
    .setTimestamp(new Date())

    message.inlineReply(ballembed)
    }
exports.help = {
    name: "8ball",
    aliases: ["8b"],
    category: 'Fun',
    usage: `8ball`
}