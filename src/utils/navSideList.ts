export interface IPage {
  url: string
  exact: boolean
  text: string
  hint: string
}

export const getNavSideList = (): Array<IPage> => [
  {
    url: '/manual',
    exact: false,
    text: 'Об экзамене',
    hint: 'Шкалы, статистика, оценивание заданий',
  },
  {
    url: '/prob_catalog',
    exact: false,
    text: 'Каталог заданий',
    hint:
      'Рубрицированные задания, статистика по решенным и нерешенным заданиям',
  },
  {
    url: '/',
    exact: true,
    text: 'Ученику',
    hint: 'Пройти тестирование, проверить себя',
  },
  {
    url: '/teacher',
    exact: false,
    text: 'Учителю',
    hint: 'Создание и проверка работ для учащихся, классный журнал',
  },
  {
    url: '/methodist',
    exact: false,
    text: 'Варианты',
    hint:
      'Подборка тренировочных работ, реальных экзаменационных вариантов предыдущих лет',
  },
  {
    url: '/expert',
    exact: false,
    text: 'Эксперту',
    hint: 'Критерии проверки работ, за что снижают баллы',
  },
  {
    url: '/course',
    exact: false,
    text: 'Школа',
    hint: 'Создать свой курс, задать задание учащимся дистанционно',
  },
  {
    url: '/handbook',
    exact: false,
    text: 'Справочник',
    hint: 'Краткий справочник по предмету',
  },
  {
    url: '/page/theory',
    exact: false,
    text: 'Теория',
    hint: 'Теория по предмету',
  },
  {
    url: '/guestbook',
    exact: false,
    text: 'Сказать спасибо',
    hint: 'Сказать добрые слова редакции',
  },
  {
    url: '/callback?f=faq',
    exact: false,
    text: 'Вопрос — ответ',
    hint: 'Задать вопрос об экзаменах и о работе портала',
  },
  {
    url: '/user_stat',
    exact: false,
    text: 'Моя статистика',
    hint: 'Узнать, какие задания подтянуть',
  },
  {
    url: '/favorite',
    exact: false,
    text: 'Избранное',
    hint: 'Посмотреть отобранные вами задания',
  },
]
