require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Basic reply
bot.start((ctx) => ctx.reply('Hey, I’m LizzyBot. How can I please you today? 😘'));
bot.help((ctx) => ctx.reply('Send me a message or a tip, baby 😏'));

// Echo user messages
bot.on('text', (ctx) => {
  ctx.reply(`You said: ${ctx.message.text}`);
});

// Launch the bot
bot.launch().then(() => {
  console.log('LizzyBot is live 🚀');
});

// Prevent Render from shutting down
setInterval(() => {
  console.log('Ping to keep alive...');
}, 60000);