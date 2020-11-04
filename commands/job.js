const db = require('quick.db');
const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: "trabalhar",
    run: async (client, message, agrs) => {
        if(message.author.bot) return;
        let timeout = 8080808;
        let amount = 500;
        let user = message.author;

        let dia = await db.fetch(`dia_${message.guild.id}_${user.id}`);
        if(dia !== null && timeout - (Date.now() - dia) > 0) {
        } else {
        db.add(`dinheiro_${message.guild.id}_${user.id}`, amount);
        db.set(`dia_${message.guild.id}_${user.id}`, Date.now())
        message.channel.send(`**Foi adicionado R$${amount} em sua conta bancaria**`)
        } 
    }
}