const Discord = require('discord.js')

module.exports = {
    name: "warn",
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES'))
        message.delete()
        let membroWarn = message.mentions.members.first() 
        if(!membroWarn) {
            return message.channel.send('**<:erase:764247514312343602> Mencione um usuario para dar aviso**')
        }

        let emblema = new Discord.MessageEmbed()
        .setDescription(`**Voce tomou aviso na ${message.guild.name}**`)
        membroWarn.send(emblema)
        message.channel.send(`**O usuario ${membroWarn} foi avisado**`)
    }
}