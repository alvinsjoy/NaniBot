const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
exports.execute = (client, message, args) => {
  const duration = moment.duration(message.client.uptime).format("D[d] H[h] m[m] s[s]");
    message.inlineReply("<a:loading:865967845628051496> Pinging...").then(msg => {
        const embed = new MessageEmbed()
            .setTitle("🏓 Pong!")
            .setDescription(`\`\`\`yaml\nPing: ${client.ws.ping}ms\nHeartBeat: ${Date.now() - message.createdTimestamp}ms\nUptime: ${duration}\`\`\``)
            .setColor("RANDOM")
            .setFooter(`© alvinjoy • Requested by: ${message.author.username}`)
        msg.edit(embed);
    });
}
exports.help = {
    name: "ping",
    aliases: ["pong", "latency"],
    category: 'Utility',
    usage: `ping`
}
