const { db } = require("quick.eco");

function counter(message, client) {
  let channel = message.channel;
  let count = db.fetch(`counter_${message.guild.id}`);
  if (count === null) count = db.set(`counter_${message.guild.id}`, {
    number: 0,
    author: client.user.id
  });
  if (!message.author.bot && isNaN(message.content)) {
    return;
    }
  else {  
    if (!message.author.bot && message.author.id === count.author) {
      message.delete();
      message.reply("Please wait for your turn").then(m => m.delete({ timeout: 5000 }));
      return;
    }
    if (!message.author.bot && parseInt(message.content) !== count.number + 1) {
      message.delete();
      message.reply(`Next number must be ${count.number + 1}`).then(m => m.delete({ timeout: 5000 }));
      return;
    }
    count = db.set(`counter_${message.guild.id}`, { number: count.number + 1, author: message.author.id });
    message.react('<:check:870188837517799486>')
  }
}
module.exports = counter;