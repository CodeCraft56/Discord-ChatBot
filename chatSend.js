const Chat = require('clever-chat')
require("./inline.js");
const chatSend = async (message) => {
    const chat = new Chat({ name: "CodeCraft", gender: "male", developer_name: "CodeCraft", user: message.author.id, language: "en" });
   
      message.channel.startTyping()
      let reply = await chat.chat(message.content).then(reply => {
          message.sendInline(reply, { allowedMentions: { repliedUser: false } }); 
          //You can set it to true!
          message.channel.stopTyping()
          
      })
console.log(reply)
}

module.exports = {
    chatSend
};
