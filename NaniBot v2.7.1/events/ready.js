module.exports = async (client) => {
  client.channels.fetch('881547470453227552')
  .then(channel => channel.send(`I am online`))
    console.log(`${client.user.tag} is online!`);
  client.prefix = client.config.prefix;
    //client.user.setStatus("idle")
  setInterval(async() => {
    let members = await client.guilds.cache.get('689508953767411904').members.fetch();
    let mem = members.filter(m => !m.user.bot).size
    let name = client.guilds.cache.find(g => g.id === '689508953767411904').name
        const statuses = [`Alvin Being Alive`,`${name}`,`Anthass Venam`,`Your PP`,`${client.prefix}help`,`${mem} members!`,`PH 😏`,`Bois shower 😁`,`Stuck on a phone 📱`,`Medium is Premium ~itzzanjai`]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING", url: "https://www.twitch.tv/discord"})
    }, 10000)
};
