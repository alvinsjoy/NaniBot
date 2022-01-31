const Discord = require("discord.js")
const {version} = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
  exports.execute = async (client, message, args) => {
    let cpuLol;
    cpuStat.usagePercent(async function (err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(message.client.uptime).format("D[d] H[h] m[m] s[s]");
if(err) message.channel.send(err.message)
        const botinfo = new Discord.MessageEmbed()
            .setAuthor(message.client.user.username,client.user.displayAvatarURL({dynamic: true}))
            .setColor("RANDOM")
            .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
            .addField("Memory Usage","\`"+`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`+"%\`")
            .addField(" Uptime ", `\`${duration}\``, true)
            .addField("Users", `\`${message.client.users.cache.size}\``, true)
            .addField("Channels ", `\`${message.client.channels.cache.size}\``, true)
            .addField("Discord.js", `\`v${version}\``, true)
            .addField("Node", `\`${process.version}\``, true)
            .addField("CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("CPU usage", `\`${percent.toFixed(2)}%\``, true)
            .addField("Arch", `\`${os.arch()}\``, true)
            .addField("Platform", `\`\`${os.platform()}\`\``, true)
            .setFooter(`© alvinjoy • Requested by: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp(new Date())
      message.inlineReply(botinfo)
    });
}
exports.help = {
    name: "botinfo",
    aliases: ["info","i","stats"],
    category: 'Utility',
    usage: `botinfo`
}