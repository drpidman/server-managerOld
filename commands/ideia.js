const Discord = require("discord.js");
const db = require('quick.db')
exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`<:erase:764247514312343602> **escreva a sugestão após o comando**`)
} else if (content.length > 1000) {
  return message.channel.send(`<:erase:764247514312343602> **forneça uma sugestão de no máximo 1000 caracteres.**`);
} 
   let canal = db.get(`ideiaCh_${message.guild.id}`)
   if(canal === null) {
     return
   }
    let emblema = new Discord.MessageEmbed()
    .setTitle('<:notification:764553273231278092> **Nova sugestão**')
    .setColor("#ff5000")
    .addField("<:idcard:764244114744016927> Autor:", message.author)
    .addField("<:carta:764554117963710484> Sugestão", content)
    .setTimestamp()
    client.channels.cache.get(canal).send(emblema)
  await message.channel.send(`<:check:764556362440900648> **a sugestão foi enviada!**`);
}
