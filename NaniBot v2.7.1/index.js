const Discord = require("discord.js");
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });
const EM = require('./ExtendedMessages.js');
const Eco = require("quick.eco");
client.eco = new Eco.Manager();
client.db = Eco.db;
client.config = require("./botConfig");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const disbut = require('discord-buttons');
client.shop = {
  nothing: {cost: 1},
  laptop: {cost: 2000},
  mobile: {cost: 1000},
  motormotorcycle: {cost: 10000},
  car: {cost: 20000},
  nanibadge: {cost: 100000},
  nanistatue: {cost: 500000},
  nanibot: {cost: 100000000}
};
const fs = require("fs");
fs.readdir("./events/",(err,files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName,event.bind(null,client));
    });
});

fs.readdir("./commands/",(err,files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name,command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias,command.help.name);
        });
    });
});
let cd = false;
client.on("guildMemberAdd",async member => {
  if(member.guild.id == "689508953767411904") {
  let logchannel = member.guild.channels.cache.find(c => c.id === '757975002816577606')
  if(member.user.bot) return logchannel.send(`A shit bot ${member.user} has arrived`)
  logchannel.send(`<@&862181136221339668>,say hi to our new member! ${member.user},Welcome to ${member.guild.name}! <a:wavinghand:862223760488792064>\n Please note that <#757975002816577606> is our #general <:evil_star:860390304389660672>`)
  }
})
client.on("guildMemberRemove",async member => {
  if(member.guild.id == "689508953767411904") {
  let leavechannel = member.guild.channels.cache.find(c => c.id === '767088016359161906')
  leavechannel.send(`**${member.user.tag}** just left the server. So sad <:crying:841871543495688233>`)
  }
})
client.on("message",async message => {
  let voteembed = new Discord.MessageEmbed()
    .setTitle(`Vote for the server!`)
    .setURL("https://top.gg/servers/689508953767411904/vote")
    .setColor("RANDOM")
    .setDescription("Consider voting for the server. This would help our small community grow\n\n**[Vote at top.gg](https://top.gg/servers/689508953767411904/vote)**\n**[Vote at discords.com](https://discords.com/servers/689508953767411904/upvote)**\n**[Vote at dbl.com](https://discordbotlist.com/servers/mikes-playground/upvote)**\n\n**Voter Perks:**\n➳ Hoisted <@&843132820770652181> role\n➳ 3x xp boost in <@739735540483752006>\n➳ <@&887276022079311882> role which changes its color every 30 minutes")
    .setTimestamp()
    .setThumbnail('https://media.discordapp.net/attachments/767785145586679888/887327116314705930/wak8g4V.png')
    .setFooter("use `vt! vote` to check if you are able to vote now!",message.author.displayAvatarURL({ dynamic: true }))
  let votebut = new disbut.MessageButton()
    .setStyle('green')
    .setLabel('Vote')
    .setID('click_to_function')
    .setURL('https://top.gg/servers/689508953767411904/vote')
  if (!message.guild || message.author.bot) return;
const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.toLowerCase().match(prefixMention)) {
    message.inlineReply(`My prefix is \`${client.prefix}\`. Type \`${client.prefix}help\` for a full list of commands. You can always ping me for my prefix :)`);
    message.react("<a:ping:866608651547574292>");
 }
  if (message.content.toLowerCase().match("pls vote")) {
    message.inlineReply(voteembed);
 }
 if (message.content.toLowerCase().match("tvote")) {
    message.inlineReply(voteembed);
 }
 if (message.content.toLowerCase().match("lclaim")) {
    message.inlineReply(voteembed);
 }
 if (message.content.toLowerCase().match("rpg vote")) {
    message.inlineReply(voteembed);
 }
 if (message.content.toLowerCase().match("p!vote")) {
    message.inlineReply(voteembed);
 }
 if (message.content.startsWith("vote")) {
    message.inlineReply(voteembed);
 }
 if (message.content.toLowerCase().match("hug")) {
   if (message.content.toLowerCase().match("huge")) return;
   if (message.content.toLowerCase().match("thug")) return;
    message.react("<a:nanihug:866593225854681108>");
 }

  const susWords = ['825382504353234954>','692594489172426771>']
  for (var i = 0; i < susWords.length; i++) {
  if (message.content.toLowerCase().includes(susWords[i])) {
    message.react("<:wut:887644552972861441>")
    }
  }
})
client.on('ready',async() => {
  let mike = client.guilds.cache.find(g => g.id === '689508953767411904');
  let official = mike.roles.cache.find(r => r.id === '887266384768286770');
  let random = mike.roles.cache.find(r => r.id === '887276022079311882');
  function colorchange() {
  official.edit({color: `RANDOM`},"Yall gae");
  random.edit({color: `RANDOM`},"Random color time!");
    setTimeout(onlinemem ,300000);
    setTimeout(colorchange ,1800000);
  }
  colorchange();
  async function onlinemem() {
  let online = mike.members.cache.filter(member => member.presence.status !== "offline").size
  let members = await mike.members.fetch();
    let mem = members.filter(m => !m.user.bot).size
  mike.channels.cache.get("895622430272393256").edit({name: `・Online: ${online}`})
  mike.channels.cache.get("833618283848138753").edit({name: `・Everyone: ${members.size}`})
  mike.channels.cache.get("833618286830813184").edit({name: `・Members: ${members.filter(m => !m.user.bot).size}`})
  mike.channels.cache.get("833618289543872523").edit({name: `・Bots: ${members.filter(m => m.user.bot).size}`})
  }
  onlinemem();
})
client.on("message",async message => {
  if (!message.guild) return;
  const { channel } = message
  let wchannel = message.guild.channels.cache.find(c => c.id === '841717743802908692') 
    if (channel.type === 'news') {
      message.crosspost()
      message.react('<a:flush:892789723163136020>')
      wchannel.send(`published news message in ${channel}`)
    }
})
client.on("message",async message => {
  if(message.author.id === '735147814878969968') {
    if(message.channel.id === '841678636998197289') {
    if(message.content.match("841678174437769246"))
    message.channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: null
    },'Time to bump, channel unlocked');
    if(message.content.toLowerCase().match("thx")) {
      message.channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: false
    },'Locking channel after successful bump');
    }
    }
  }
})
process.on('unhandledRejection',error => {
  console.error(error)
  client.channels.fetch('881547470453227552')
  .then(channel => channel.send(`**Error:** ${error}`))
  try {
    const errembed = new Discord.MessageEmbed()
    .setTitle(`Uh Oh!`)
    .setDescription(`An error occured when ${message.author} used a command. Please try again, later.`)
    .addField('Error Code',`${error}`,true)
    .addField('Channel',`${message.channel} (${message.channel.id})`,true)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(errembed)
  } catch (err) {
    return
  }
});
client.login(process.env.TOKEN);
var http = require('http');  http.createServer(function (req,res) {   
  res.write("I'm alive");
  res.end(); 
}).listen(8080);