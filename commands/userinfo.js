const { MessageEmbed, Message } = require('discord.js')


module.exports = {
    name: "userinfo",
    run: async (client, message, args) => {
        const { guild, channel } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)
        

        const embed = new MessageEmbed()
        .setAuthor(`Informações do usuario ${user.username}`, user.displayAvatarURL())
        .setThumbnail(user.displayAvatarURL( { dynamic: true, format: 'png', size: 1024}))
        .setColor('RANDOM')
        .addFields(
            { name: "<:carteirademotorista:764256965941395466> Tag do usuario", value: user.tag},
            { name: "<:idcard:764244114744016927> ID do Usuario", value: user.id},
            { name: "<:robo:764254310783123476> bot", value: user.bot},
            { name: "<:user:766158733142655017> Nickname", value: member.nickname || 'Não tem'},
            { name: "<:login:764244468764508191> Entrou no servidor em", value: new Date(member.joinedTimestamp)},
            { name: "<:holidays:765765720273322005> Entrou no Discord em:", value: new Date(user.createdTimestamp).toLocaleDateString()},
            { name: "<:satchel:766159199612043275> Cargos", value: member.roles.cache.size - 1,}
        )
        .setTimestamp()
        channel.send(embed)
    }
}