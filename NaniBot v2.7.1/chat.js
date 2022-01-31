function chat(message, client) {
const fetch = require("node-fetch");
if (!message.content) return message.channel.send(`Woo ${message.author} chat with me... Stop sending empty messages :)`);
message.channel.startTyping()
fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=alvinjoy&user=${message.author.id}`)
    .then(res => res.json())
    .then(data => {
message.inlineReply(data.message,{ disableMentions: 'all' })
message.channel.stopTyping()
});
}
module.exports = chat;
