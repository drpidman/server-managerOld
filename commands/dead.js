const { config, ownerID } = require ('../config.json')
module.exports = {
    name: "reload",
    run: async(client, message, args) => {
        if(message.author.id !== ownerID) {
            return message.channel.send('**Somente o Dono do BOT pode executar este comando**')
        }
        console.log(`Bot reiniciado por ${message.author.tag}`)
        console.log('node .')
        process.exit()
    }
 }