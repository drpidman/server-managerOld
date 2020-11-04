const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unmute",
    description: "Este comando desmuta usuarios",
 run: async (client, message, args) => {
        message.delete()
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send('**<:erase:764247514312343602> Somente adminis tem permissão para desmutar membros!**')
        }
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("<:erase:764247514312343602> Voce não tem permissão para desmutar membros**")
        }
        const user = message.mentions.members.first();

        if (!user) {
            return message.channel.send('**<:erase:764247514312343602> Mencione um usuario para desmutar!**')
        }
        let muterole = message.guild.roles.cache.find(x => x.name === "mutado")

        if(user.roles.cache.has(muterole)) {
            return message.channel.send('**<:erase:764247514312343602> O usuario não esta mutado**')
        }
        user.roles.remove(muterole)
        user.send(`${user} O seu acesso aos canais de texto no servidor: **${message.guild.name}** foram liberados! da proxima vez não cometa atos que levem a mute ou banimento!`)
         return message.channel.send(`**${message.mentions.users.first().username}** foi desmutado`)


    }
}