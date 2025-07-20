require('dotenv').config();
const { Telegraf } = require('telegraf');

// Initialize bot
const bot = new Telegraf(process.env.BOT_TOKEN);

// START command
bot.start((ctx) => {
  ctx.reply('Hey, I’m LizzyBot. How can I please you today? 😘');
});

// HELP command
bot.help((ctx) => {
  ctx.reply('Send me a message or a tip, baby 😉');
});

// Echo text messages
bot.on('text', (ctx) => {
  const message = ctx.message.text;
  ctx.reply(`You said: ${message}`);
});

// Launch the bot
bot.launch()
  .then(() => {
    console.log('LizzyBot is live 🚀');
  })
  .catch((err) => {
    console.error('Failed to launch LizzyBot:', err);
  });

// Keep alive (for Render or Replit)
setInterval(() => {
  console.log('Ping to keep alive...');
}, 60000);

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));