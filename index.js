const DiscordJS = require('discord.js')
const client = new DiscordJS.Client()

client.once('ready', () => {
  console.log('Ready!')
})

client.on('message', (message) => {
  if (message.content === 'やぁ' && !message.author.bot) message.reply('こんにちは！')
})

client.login('your token')
