const Discord = require('discord.js')

module.exports = {
    name: "send",
    run: async (client, message, args) => {
        message.delete()
        if(!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send('<:erase:764247514312343602> **Somente admins podem utilizar este comando**')
        }

        const channel = message.mentions.channels.first()
        if(!channel) {
            return message.channel.send('<:erase:764247514312343602> **Mencione um canal primeiro**')
        }

        let mensagem = args.slice(1).join(" ")
        if(!mensagem) {
            return message.channel.send('<:erase:764247514312343602> **Digite uma mensagem para enviar primeiro**')
        }

        let emblema = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor('RANDOM')
        .setDescription(mensagem)
        .setTimestamp()
        channel.send(emblema)
    }
}
