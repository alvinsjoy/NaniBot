const got = require('got')
const { MessageEmbed } = require("discord.js");
  exports.execute = async (client, message, args) => {
	got('https://www.reddit.com/r/memes/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
      const memeDownvotes = post.data.downs;
			const memeNumComments = post.data.num_comments;
    const embed = new MessageEmbed()
			embed.setTitle(memeTitle);
			embed.setURL(memeUrl);
			embed.setColor('RANDOM');
			embed.setImage(memeImage);
			embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} | 💬 ${memeNumComments}`);
      embed.setTimestamp();
			message.inlineReply(embed);
		})
		.catch(console.error);
};
exports.help = {
    name: "meme",
    aliases: ["m"],
    category: 'Fun',
    usage: `meme`
}