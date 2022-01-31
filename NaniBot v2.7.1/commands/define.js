const urban = require('relevant-urban');
const { MessageEmbed } = require('discord.js');
exports.execute = async (client, message, args) => {
        if(!args[0])
        return message.inlineReply("Please Enter Something To Search");
        try {
            let res = await urban(args.join(' '))
                if (!res) return message.inlineReply("No definition found!");
                let { word, urbanURL, definition, example} = res;

                let embed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${word}`)
                    .setURL(urbanURL)
                    .setDescription(`**Meaning:**\n*${definition || "No meaning"}*\n\n**Example:**\n*${example || "No Example"}*`)
                    .setFooter(`© alvinjoy • Requested by: ${message.author.username}`)
                    .setTimestamp()

                message.inlineReply(embed)
            
        } catch (e) {
            console.log(e)
            return message.inlineReply("No definition found!")
        }
}
exports.help = {
    name: "define",
    aliases: ["urban","def"],
    category: 'Utility',
    usage: `define`
}