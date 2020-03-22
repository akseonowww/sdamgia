import { IBotProps } from 'pages/App/components/Sidebar/News'

import vkBotImg from './assets/vkBotImg.png'
import telegramBotImg from './assets/telegramBotImg.png'

export const getBotList = (): Array<IBotProps> => [
  {
    url: 'https://vk.com/bot.sdamgia',
    text: 'Наш умный бот Вконтакте',
    img: vkBotImg,
  },
  {
    url: 'tg://resolve?domain=reshuege_bot',
    text: 'Наш Телеграм-бот',
    img: telegramBotImg,
  },
]
