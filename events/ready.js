const { config, prefix } = require('../config.json')
module.exports = (client, message) => {
 console.log(`logado em ${client.user.tag}`)

 client.user.setActivity("b!help for list my commands", { type: "STREAMING", url: "https://www.twitch.tv/tobias_sp015" })
}