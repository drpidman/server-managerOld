const Discord = require('discord.js')
const { prefix } = require('../config.json')

module.exports = {
    name: "help",
    run: async (client, message, agrs) => {


        if(message.author.bot) return false;

        const filter = (reaction, user) => user.id === message.author.id;
        const emblema = new Discord.MessageEmbed()
        .setTitle('Servidor de suporte')
        .setURL('https://discord.gg/Cz6ZSwA')
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format:"png", size: 1024}))
        .setDescription(`**Bot criado com o intuito de ajudar as comunidades com a moderação, comandos rapidos e super eficientes para punir aquelas maçãs podres.**`)
        .addFields(
            {  name: `${prefix}ban`, value:`Use \`${prefix}ban <@usuario> <motivo>\` para banir um usuario`, inline: true},
            {  name: `${prefix}kick`, value: `Use \`${prefix}kick <@usuario> <motivo>\` para expulsar um usuario`, inline: true},
            {  name: `${prefix}mute`, value: `Use \`${prefix}mute <@usuario> <@motivo>\` para mutar um usuario`, inline: true},
            {  name: `${prefix}unmute`, value: `Use \`${prefix}unmute <@usuario>\` para desmutar um usuario`, inline: true},
            {  name: `${prefix}warn`, value:`Use \`${prefix}warn\` para dar aviso a um usuario`, inline: true},
            {  name: `${prefix}send`, value: `Use \`${prefix}send <#canal> <mensagem>\` para enviar mensagem para o canal mencionado`, inline: true},
            {  name: `${prefix}report`, value: `Use \`${prefix}report <mensagem>\` para reportar um bug ou até mesmo enviar uma sugestão para o bot`, inline: true },
            {  name: `${prefix}userinfo`, value: `Use \`${prefix}userinfo <@usuario>\` para ver informações do perfil do mesmo`, inline: true},
            {  name: `${prefix}botinfo`, value: `Use \`${prefix}botinfo\` para ver informações sobre o bot`, },
            {  name: `${prefix}setpun`, value: `Use \`${prefix}setpun <@canal>\` Para definir um canal de punições`, inline: true},
            {  name: `${prefix}setideia`, value: `Use \`${prefix}setideia <@canal>\` Para setar um canal de sugestões`, inline: true},
            {  name: `${prefix}clear`, value: `Use \`${prefix}clear <quantidade de mensagens>\` para limpar o chat \`limite de 99 mensagens\``, inline: true },
        ).setColor('RANDOM')
        const embed = new Discord.MessageEmbed()
        .setDescription(`**Aperte na reação 📩 para enviar os comandos em seu Dm** **\nOu aperte a reação 📄 para enviar os comandos aqui**`)
        .setColor('#00000')
        const dm = await message.channel.send(embed)

        await dm.react("📩")

        dm.awaitReactions(filter, {max: 1, time: 15000, errors:["time"]}).then(collected => {
            const reaction = collected.first();

            switch (reaction.emoji.name) {
                case "📩":
                    message.author.send(emblema)
                    dm.edit(
                        new Discord.MessageEmbed()
                        .setDescription("<:paperplane:767136477188063273> **Comandos enviados em seu Dm**").setColor('BLUE')
                    )
            }
        })
        await dm.react("📄")
        dm.awaitReactions(filter, { max: 1, time: 15000, errors:['time']}).then(collected => {
            const reaction2 = collected.first()
            switch (reaction2.emoji.name) {
                case "📄":
                    dm.edit(emblema)
            }
        })
    }
}