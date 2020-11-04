const db = require('quick.db');

module.exports = {
    name: "setIdeia",
    run: async(client, message, args) => {

        let canal = message.mentions.channels.first()
        if(!canal) {
            return message.channel.send('**Mencione o canal de sugestões**');
        }
        db.set(`ideiaCh_${message.guild.id}`, canal.id)
        message.channel.send(`**Canal de sugestões definido para ${canal}**`);
    }
}