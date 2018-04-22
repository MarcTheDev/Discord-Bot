const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('config.json');
bot.on("message", async message => {

});
bot.token(config.token);