const db = require ('quick.db');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name:"saldo",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author;

        let saldo = await db.fetch(`dinheiro_${message.guild.id}_${user.id}`);
        if(!saldo === null) saldo = 0;
        
        let emblema = new MessageEmbed()
        .addField(`Saldo de ${user.tag}`, `R$${saldo}`).setColor('#f4040')
        message.channel.send(emblema)
    }
}