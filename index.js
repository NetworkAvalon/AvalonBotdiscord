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

  client.on('message', msg => {
    if (msg.startsWith ('!bot')) {
      msg.reply('antiafk');
    }
  });

client.login(config.token);