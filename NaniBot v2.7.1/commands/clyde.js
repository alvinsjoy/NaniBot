const Discord = require("discord.js");
const fetch = require('node-fetch');
exports.execute = async (client, message, args) => {    
    const Value = args.join(" ");

    if (!Value || Value.length > 150) return message.channel.send("Please provide some text and make sure it's not 150+ characters long!");
    await message.react('<a:loading:865967845628051496>'); 
let res = await fetch(encodeURI(`https://ctk-api.herokuapp.com/clyde/${Value}%20`))
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
            message.channel.send(attachment);
  }
exports.help = {
    name: "clyde",
    aliases: ['cylde','clydebot','cyldebot'],
    category: 'Fun',
    usage: `clyde`
}