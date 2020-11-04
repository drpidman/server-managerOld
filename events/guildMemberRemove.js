const { DiscordAPIError } = require("discord.js")
const Discord  = require('discord.js')

module.exports = (client, member) => {
    let guild = client.guilds.cache.get('756656012382961714')
    let saida = member.guild.channels.cache.find(channel => channel.id === '756656517653987459')
    let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'brilhante')
    
    if (guild != member.guild) {
        return console.log('ops, voce nao é do meu servidor!!')
    } else {
    let emblema = new Discord.MessageEmbed()
    .setTitle(`Saida`)
    .setAuthor(member.user.tag)
    .setColor('RANDOM')
    .setDescription(` ${emoji} ${member.user} saiu do servidor, espero que algum dia volte :/ `)
    .setImage('https://media1.tenor.com/images/d620f43fcc7dba0a79712b6d41a8ed2d/tenor.gif')
    .setTimestamp();

    saida.send(emblema)
    }
}