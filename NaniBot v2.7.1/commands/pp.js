function doHugePP() {
    var rand = ['8D','8=D','8===D','8=====D','8=============D','8=====================D','<a:error:858895117916962846> Huge PP dectected!','<a:error:858895117916962846> No PPs found','<a:error:858895117916962846> Bru I cannot send messages bigger than 2000 characters...'];

    return rand[Math.floor(Math.random()*rand.length)];
}
exports.execute = async (client, message, args) => {
  message.inlineReply(doHugePP());
}
exports.help = {
    name: "pp",
    aliases: [],
    category: 'Fun',
    usage: "pp"
}