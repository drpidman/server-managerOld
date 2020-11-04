const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
    name: "Ban",
    description: "Este comando bane parmanentemente usuarios",
    guildOnly: true,
    run: async (client, message, args) => {
            message.delete({ timeout: 5000 })
        if(!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send('<:erase:764247514312343602> **Somente administradores podem utilizar este comando!**')
        }
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) {
            return message.channel.send('<:erase:764247514312343602> **Voce não tem a permissão de banir membros**')
        }

        const usuario = message.mentions.members.first()
        if(!usuario) {
            return message.channel.send('<:erase:764247514312343602> **Mencione um usuario para banir primeiro!**')
        }

        if(usuario.id === message.author.id) {
            return message.channel.send('<:erase:764247514312343602> **Não posso banir voce mesmo**')
        }

        let motivo = args.slice(1).join('')
        if(!motivo) {
            return message.channel.send('<:erase:764247514312343602> **Voce precisa colocar um motivo para banir um membro!!**')
        }

        const membro = message.guild.member(usuario)
        if(membro) {
            membro
            .ban({
                reason: ""
            })
            .catch(err => {
                return message.channel.send('<:erase:764247514312343602> **Erro ao banir o usuario**')
            })
        }

        let ch = db.get(`banChannel_${message.guild.id}`)
        if (ch === null) {
            return 
        }
        let emblema = new Discord.MessageEmbed()
        .setColor('#00000')
        .setTitle(`<:bloqueado:764545061605343292> Punição: Banimento`)
        .addField('sTAFF:', message.author)
        .addField('Usuario banido:', usuario)
        .addField('Motivo:', motivo)
        .setTimestamp()
        client.channels.cache.get(ch).send(emblema)
    }
}