import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TG_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `Привет ${msg.chat.first_name}! Открой Web App по кнопке ниже:`, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            mode: 'fullsize',
            text: 'Открыть Web App',
            web_app: {
              url: 'https://eat-mate-two.vercel.app/'
            }
          }
        ]
      ]
    }
  });

  bot.setChatMenuButton({
    menu_button: {
      type: 'web_app',
      text: 'Открыть WebApp',
      web_app: {
        url: 'https://eat-mate-two.vercel.app/', // замени на свой URL
      },
    },
  });
});