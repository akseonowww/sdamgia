import { INewsItemProps } from 'pages/App/components/Sidebar/components/News/components/NewsItem'

export const getNewsList = (): Array<INewsItemProps> => [
  {
    type: 'default',
    date: '15 сентября',
    text: 'Решения всех демоверсий ЕГЭ−2020',
    url: 'https://vk.com/wall-34649478_180027',
  },
  {
    type: 'default',
    date: '15 августа',
    text: 'Подготовка к ЕГЭ и ОГЭ с нуля до 100 баллов на годовом курсе УМСКУЛ',
    url: 'https://vk.com/mgumsch',
  },
  {
    type: 'default',
    date: '20 июня',
    text: 'Сначала составители ЕГЭ свою ошибку признали, потом расхотели',
    url: 'https://vk.com/wall-34649478_177050',
  },
  {
    type: 'default',
    date: '14 июня',
    text: 'ЕГЭ ещё не начался, а выгнать уже смогли',
    url: 'https://vk.com/wall-34649478_175961',
  },
  {
    type: 'default',
    date: '12 июня',
    text: 'Комментарии Д. Гущина к геометрическим заданиям ЕГЭ основной волны',
    url: 'https://vk.com/wall-34649478_175325',
  },
  {
    type: 'urgent',
    date: undefined,
    text: 'Новый сервис — карточки',
    url: 'https://vk.com/wall-34649478_169793',
  },
]
