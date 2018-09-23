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
    if (msg.content === '!bot') {
      msg.channel.send('antiafk');
    }
  });

  client.on('message', function(message) {
    if (message.content === "!loop") { 
        var interval = setInterval (function () {
          client.channels.get("493228844896092162").send("antiafk")
            .catch(console.error);
        }, 5 * 60000); 
    }
  });

client.login(config.token);