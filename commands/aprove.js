const Discord = require('discord.js')

module.exports = {
    name: "aprove",
    run: async(client, message, agrs) => {
        message.delete()
        if(!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send('**Voce não pode utilizar este comando!**')
        }
        let usuario = message.mentions.members.first()
        if(!usuario) {
            return message.channel.send('**Mencione um usuario para aprovar!**')
        }
        let cargo = message.mentions.roles.first()
        if(!cargo) {
            return message.channel.send('**Mencione o cargo que o usuario aprovado recebera, com base nas analizes!**')
        }
        let canal = client.channels.cache.find(ch => ch.id === '766143268676829204')

        const emblema = new Discord.MessageEmbed()
        .setTitle(`<:checkmark:766155522226520084> Usuario aprovado <:checkmark:766155522226520084>`)
        .addField(`<:user:766158733142655017> Usuario:`, usuario)
        .addField(`<:satchel:766159199612043275>Cargo recebido`, cargo)
        .addField(`<:function:764242591570329630> Aprovado por:`, message.author)
        .setDescription(`**Seja Bem vindo(a) ${usuario} a equipe staff da Bgc!**`)
        .setAuthor(usuario.user.tag, usuario.user.displayAvatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        canal.send(emblema)
        usuario.roles.add(cargo)
        usuario.send(`**Parabéns ${usuario} voce foi aprovado na equipe staff da bgc!**`)
    }
}