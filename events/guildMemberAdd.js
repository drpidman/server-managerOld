const { DiscordAPIError } = require("discord.js")
const Discord  = require('discord.js')

module.exports = (client, member) => {
    let guild = client.guilds.cache.get('756656012382961714')
    let canal = member.guild.channels.cache.find(channel => channel.id === '756656459818860604')
    let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'espada')
    let emoji2 = member.guild.emojis.cache.find(emoji2 => emoji2.name === 'mario')

    if (guild != member.guild) {
        return console.log('ops, voce nao é do meu servidor!!')
    } else {
    let emblema = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle(`Entrada`)
    .setImage('https://cdn.discordapp.com/attachments/744975450752679936/761005096921726996/20200930_202122.gif')
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024}))
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setDescription(`<:luigi:763592251614953523> **Olá ${member.user}, sejá muito bem vindo(a) no nosso Servidor, espero que se divirta muito e conheça novos players para jogar!!**`)
    .addField(` ${emoji2}Converse com outros membros`, '<#756658785388462150>')
    .addField(`${emoji}Mantenha-se atualizado sobre novos jogos`, '<#756656868419698688>')
    .addField('<:embed:763592252114862090> Não se esqueça de ler as regras!!!', '<#756659564945866823>')
    .setFooter('of gamers to Brasil Game Community ©')

    canal.send(emblema)
    }
}