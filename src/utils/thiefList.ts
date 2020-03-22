import { IThiefProps } from 'pages/App/components/Sidebar/News'

export const getThiefList = (): Array<IThiefProps> => [
  {
    type: 'default',
    text: 'Экзамер из Таганрога',
    url: 'https://ege.sdamgia.ru/page/examer.ru',
  },
  {
    type: 'default',
    text: 'Учитель Думбадзе из школы 162 Петербурга',
    url: 'https://ege.sdamgia.ru/page/thieves',
  },
  {
    type: 'default',
    text: 'ОПРОВЕРЖЕНИЕ СВЕДЕНИЙ ОБ EXAMER ИЗ ТАГАНРОГА',
    url: 'https://ege.sdamgia.ru/page/examer.ru',
    letterCase: 'upper',
  },
]
