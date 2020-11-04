const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "kick",
    description: "Este comando expulsa usuarios",
 run: async (client, message, args) => {
        message.delete();

        if(!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send('**Somente administradores podem expulsar membros!**')
        }
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) {
            return message.channel.send('**Voce não tem a permissão de expulsar membros!**')
        }
        const usuario = message.mentions.members.first()

        if(!usuario) {
            return message.channel.send('<:erase:764247514312343602>**Mencione um usuario para expulsar primeiro!**')
        }
        if (usuario.id === message.author.id) {
            return message.channel.send('<:erase:764247514312343602> **Não posso expulsar voce mesmo**')
        }

        let motivo = args.slice(1).join("   ")
        if (!motivo) {
            return message.channel.send("**<:erase:764247514312343602> Voce deve colocar um motivo para expulsar um membro!!**")
        }

        const user = message.mentions.users.first();
        
        if (user) {
            const membro = message.guild.member(user)
            if(membro) {
                membro
                .kick('')
                .catch(err => {
                    return message.channel.send('**<:erase:764247514312343602> Eu nao consegui expulsar o membro**')
                })
            }
        }
        let chx = db.get(`banChannel_${message.guild.id}`)
        if(chx === null) { return }
        let emblema = new Discord.MessageEmbed()
        .setColor('#FF7090')
        .setTitle('usuario expulso')
        .addField('usuario:', user)
        .addField('Staff:', message.author)
        .addField('Motivo:', motivo)
        .setTimestamp()
        client.channels.cache.get(chx).send(emblema)
    }
}