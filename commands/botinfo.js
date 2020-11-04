const Discord = require('discord.js');
const os = require("os")
module.exports = {
    name: "botinfo",
    run: async(client, message, args) => {
        let tempoTotal = client.uptime / 1000;
        let dias = Math.floor(tempoTotal / 86400)
        let horas = Math.floor(tempoTotal / 3600)
        tempoTotal %=3600
        let minutos = Math.floor(tempoTotal /60)
        let segundos = tempoTotal % 60;
        let tempoAtivo =  `${dias.toFixed()}d,${horas.toFixed()}hr,${minutos.toFixed()}min,${segundos.toFixed()}s`;
        
        const os = require('os')
        let usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();
        let  getpercentage = 
        ((usedMemory/totalMemory) * 100).toFixed(2) + '%' 
        const emblema = new Discord.MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .addField(`<:cogwheel:765764504213913633> Criador:`, '<@696425896600535110>')
        .addField(`Criado em:`, '<:holidays:765765720273322005> 28/06/2020')
        .addField(`linguagem:`, '<:jsformat:765766565215731772> JavaScript')
        .addField(`Versão Node:`,  '<:node:765768006063489024> 12.19.0')
        .addField(`Hospedagem:`, '<:discloud:765769971561005067> DisCloud')
        .addField(`Tempo Online`, tempoAtivo)
        .addField(`Metricas`, `Latencia do Servidor: ${Date.now() - message.createdTimestamp}ms \nLatencia da API: ${Math.round(client.ws.ping)}ms \nUso de Memoria: ${getpercentage}`)
        .setColor('DARK')
        message.channel.send(emblema)
    }
}