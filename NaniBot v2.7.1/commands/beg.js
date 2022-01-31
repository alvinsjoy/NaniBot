const Discord = require("discord.js");
exports.execute = async (client, message, args) => {
    let users = [
        "PewDiePie","T-Series","Alvin","Trump","Modi Ji","Mamma","Elon Musk","John Wick","Jesus","Serena","Cardi B","Dwayne Johnson","6ix9ine","Carl-bot","Dankey Memer","Barack Obama","Queen Elizabeth","Karen Gillan"];
    let failed = [
      "I maxed my credit cards already!","No u","I only give money to my mommy","Well? No!","I'm poor too!","No coins for you idiot!","I would not share with the likes of you","there. is. no. coins. for. you.","Ant has ass and you don't <:evil_star:860390304389660672>","You dare think that you would get something from me, mortal?","I would rather eat my own foot...","Press f to pay respects... lmao even tho you dont deserve it","Heard of a dude named Rick Astely?","its hard to believe that you actually thought that you were gonna get something from me","finders keepers...begggers losers <:evil_star:860390304389660672>","I suggest working at a strip club","Being unpopular must be tough... What was your name again?","I don't have coins but you can take my d||u||ck <:lol:884433125676023859>"];
    let amount = Math.floor(Math.random() * 500) + 1000;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    let begembed = new Discord.MessageEmbed()
    .setDescription(`**${users[Math.floor(Math.random() * users.length)]}** donated you **${beg.amount}** <:nanicoin:860184168759951380>. Now you have **${beg.after}** <:nanicoin:860184168759951380>`)
    .setColor('RANDOM')
    let begfembed = new Discord.MessageEmbed()
    .setDescription(`**${users[Math.floor(Math.random() * users.length)]}:** ${failed[Math.floor(Math.random() * failed.length)]}`)
    if (beg.onCooldown) return message.inlineReply(`Stop begging so much, it makes you look like a little baby. Come back after ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.inlineReply(begfembed);
    else return message.inlineReply(begembed);
};

exports.help = {
    name: "beg",
    aliases: [],
    category: 'Economy',
    usage: "beg"
}
