module.exports.run = async(client, message, args) => {
message.reply(`\n?chat - Chat to me\n?setchat - #channel for me to reply in\n?invite - Invite me to your server\n?help - Shows this message again`)
}
module.exports.config = {
  name: 'help',
  aliases: ['hp']
}
