const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "mute",
    description: "Este comando muta usuarios",
 run: async (client, message, args) => {
        message.delete()
    
        if(!message.member.hasPermission('MANAGE_ROLES')) {
            return message.channel.send('**<:erase:764247514312343602> Somente admnistradores tem a permissao de mutar membros!**')
        }
    
            if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
                return message.channel.send('**<:erase:764247514312343602> Voce nao tem permissao para mutar membros**')
            }
            const user = message.mentions.members.first()
    
            if(!user) {
                return message.channel.send("**<:erase:764247514312343602> Mencione um usuario para mutar primeiro!**")
            }
    
            if(user.id === message.author.id) {
                return message.channel.send('**<:erase:764247514312343602> Eu nao posso mutar voce mesmo!**')
            }
    
            let reason = args.slice(1).join("   ")
            if(!reason) {
                return message.channel.send("**<:erase:764247514312343602> Voce precisa colocar um motivo para mutar um membro**")
            }
    
            let muterole = message.guild.roles.cache.find(x => x.name === "mutado")
    
            if (!muterole) {
                return message.channel.send("**<:erase:764247514312343602> crie um cargo de mutado primeiro**")
            }
    
            if (user.roles.cache.has(muterole)) {
                return message.channel.send('**<:erase:764247514312343602> este usuario ja esta mutado**!')
            }
    
            user.roles.add(muterole)
    
            const emblema = new Discord.MessageEmbed()
            .setTitle(`Usuario mutado`)
            .setColor('#FF2011')
            .addField('usuario:', user)
            .addField('Staff:', message.author)
            .addField('Motivo:', reason)
            .setTimestamp()
            user.send(` ${user} Voce foi mutado no servidor: **${message.guild.name}** pelo motivo: **${reason},** caso tenha ocorrido um engano voce pode estar entrando em contato com o suporte do servidor.`)
            return message.channel.send(emblema);
    }
}