const Discord = require('discord.js')

module.exports = {
    run:async(client, message, args) => {
        message.delete()
        const argumento = args.join(' ')
        if(!argumento) {
            return message.channel.send('<:erase:764247514312343602> Escreva o seu report!')
        }
        let user = client.users.cache.find(u => u.id === '696425896600535110')
        const emblema = new Discord.MessageEmbed()
        .setTitle(`Novo reporte`)
        .addField(`Nome do usuario:`, message.author)
        .addField(`Reporte:`, argumento)
        .setColor('#FF0000')
        .setFooter(`ID: ${message.author.id}`)
        .setTimestamp()
        user.send(emblema)
        await message.channel.send('**Obrigado por reportar, sua mensagem foi enviada para o desenvolvedor!!**')
    }
}