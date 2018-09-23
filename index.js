const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  client.on("ready", () => {
    console.log(`Estou on na AvalonNetwork com ${client.users.size} players!`); 
    client.user.setActivity(`@Network_Avalon`);
  });


client.on("message", async message => {
  
  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(message.startsWith("!bot")){
    client.channels.get("493228844896092162").send("antiafk")
}
});

client.login(config.token);