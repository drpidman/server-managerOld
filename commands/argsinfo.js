const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
        if (args[0] === 'foo') {
            return message,channel.send('bar');
        }
        message.channel.send(`Argumentos:${args}\nQuantia de argumentos: ${args.length}`);
    }     