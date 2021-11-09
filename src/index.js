const { Client } = require('discord.js')
const client = new Client({
  intents: [/** 必要に応じてIntentを追加すること */]
})

client.once('ready', () => {
  console.log('Ready!')
})

client.on('messageCreate', (message) => {
  if (message.content === 'やぁ' && !message.author.bot) message.reply('こんにちは！').catch(console.error)
})

client.login('your token')
  .catch(console.error)
