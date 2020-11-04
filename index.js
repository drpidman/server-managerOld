const { ShardingManager } = require('discord.js');
const { token } = require('./config.json');
const { client } = require('discord.js')
const manager = new ShardingManager('./bot.js', { token: token});
manager.on('shardCreate', shard => {
    console.log(`Shard ${shard.id} on`)
});

manager.spawn();