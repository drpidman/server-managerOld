const db = require('quick.db');

module.exports = { 
    name: "setBan channel",
    run: async (client, message, args) => {

        let user = message.author;
        let channel = message.mentions.channels.first()
        if(!channel) {
            return message.channel.send(`**Mencione um canal para definir um canal de punições**`);
        }
        db.set(`banChannel_${message.guild.id}`, channel.id)
        message.channel.send(`**Canal de punições setado para ${channel}**`);
    }
}