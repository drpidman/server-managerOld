const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const Enmap = require('enmap')
const config = require('./config.json')

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.config = config;

	fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
	  const event = require(`./events/${file}`);
	  let eventName = file.split(".")[0];
	  client.on(eventName, event.bind(null, client));
	});
  });
	  client.commands = new Enmap();
	fs.readdir("./commands/", (err, files) => {
  	if (err) return console.error(err);
  	files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`comando =====|${commandName}|===== iniciado`);
	client.commands.set(commandName, props);
  });
});

client.shard.broadcastEval('this.guilds.cache.size')
.then(results => console.log(`${results.reduce((prev, val) => prev + val, 0)} guildas totais`))
.catch(console.error)

client.login(token)

