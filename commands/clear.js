const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "clear",
    description: "Este limpa o chat",
 run: async (client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send('**Somente administradores podem limpar o chat!**');
        }

        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply("este não é um numero valido.");
        } else if (amount <= 1 || amount > 100) {
            return message.reply("Voce precisa colocar um numero de 1 á 99.");
        } 
        message.channel.send(`**${amount} Mensagens foram apagadas por** ${message.author} `)

        message.channel.bulkDelete(amount, true).catch((err) => {
            console.error(err);
            message.channel.send(
                "Erro ao apagar mensagens!"
            );
        });
    }
}