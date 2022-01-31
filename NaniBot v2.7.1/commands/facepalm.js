const Canvas = require("canvas");
const Discord = require("discord.js");
exports.execute = async (client, message, args) => {
        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        await message.react('<a:loading:865967845628051496>'),
        canvas = Canvas.createCanvas(632, 357),
        ctx = canvas.getContext("2d");
        
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 632, 357);

        let avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: "png", size: 512 }));
        ctx.drawImage(avatar, 199, 112, 235, 235);
        
        let layer = await Canvas.loadImage('https://raw.githubusercontent.com/Androz2091/AtlantaBot/master/assets/img/facepalm.png');
        ctx.drawImage(layer, 0, 0, 632, 357);

        let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "facepalm.png");
        message.channel.send(attachment);
}
exports.help = {
    name: "facepalm",
    aliases: [],
    category: 'Fun',
    usage: `facepalm`
}