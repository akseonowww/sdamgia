import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'

import Section from 'components/Section'
import Title from 'components/Title'
import ConstructorForm from 'components/ConstructorForm'
import { getTopicsList } from 'pages/Student/components/Constructor/utils'
import 'components/Link/Link.scss'

interface ITopic {
  id: number
  title: string
  part: string
  subtopics: Array<ISubtopic>
  value?: number
  checked?: boolean
}

interface ISubtopic {
  id: number
  title: string
  amount: number
  checked?: boolean
}

const Constructor: FC = () => {
  const [topicsList, setTopicsList] = useState<Array<ITopic> | null>(null)

  useEffect(() => {
    const topicsListSaved = getTopicsList()

    if (!topicsListSaved) {
      axios
        .get('http://sidorchik.ru/reshuege/api/')
        .then(response => response.data)
        .then(data =>
          data.map((topic: ITopic) => ({
            id: topic.id,
            title: topic.title,
            part: topic.part,
            subtopics: topic.subtopics.map(subtopic => ({
              id: subtopic.id,
              title: subtopic.title,
              amount: subtopic.amount,
              checked: true,
            })),
            value: 0,
            checked: false,
          }))
        )
        .then(data => setTopicsList(data))
        .catch(error => {
          console.log(error)

          setTopicsList(
            [
              {
                id: 1,
                title: 'Простейшие текстовые задачи',
                part: 'test',
                subtopics: [
                  { id: 174, title: 'Вычисления', amount: 24 },
                  { id: 1, title: 'Округление с недостатком', amount: 8 },
                  { id: 2, title: 'Округление с избытком', amount: 21 },
                  { id: 249, title: 'Проценты', amount: 24 },
                  { id: 5, title: 'Проценты и округление', amount: 9 },
                ],
              },
              {
                id: 2,
                title: 'Чтение графиков и диаграмм',
                part: 'test',
                subtopics: [
                  {
                    id: 6,
                    title: 'Определение величины по графику',
                    amount: 25,
                  },
                  {
                    id: 8,
                    title: 'Определение величины по диаграмме',
                    amount: 18,
                  },
                  {
                    id: 7,
                    title: 'Вычисление величин по графику или диаграмме',
                    amount: 10,
                  },
                ],
              },
              {
                id: 3,
                title: 'Квадратная решетка, координатная плоскость',
                part: 'test',
                subtopics: [
                  {
                    id: 252,
                    title: 'Многоугольники: вычисление длин и углов',
                    amount: 28,
                  },
                  {
                    id: 190,
                    title: 'Многоугольники: вычисление площадей',
                    amount: 53,
                  },
                  { id: 123, title: 'Круг и его элементы', amount: 13 },
                  { id: 181, title: 'Координатная плоскость', amount: 25 },
                ],
              },
              {
                id: 4,
                title:
                  'Начала теории вероятностей. И текст, который добавлен специально для примера, чтобы показать, что верстка не ломается с длинной-длинной темой задания',
                part: 'test',
                subtopics: [
                  {
                    id: 166,
                    title: 'Классическое определение вероятности',
                    amount: 51,
                  },
                  {
                    id: 185,
                    title: 'Теоремы о вероятностях событий',
                    amount: 34,
                  },
                ],
              },
              {
                id: 5,
                title: 'Простейшие уравнения',
                part: 'test',
                subtopics: [
                  {
                    id: 14,
                    title: 'Линейные, квадратные, кубические уравнения',
                    amount: 10,
                  },
                  { id: 9, title: 'Рациональные уравнения', amount: 13 },
                  { id: 10, title: 'Иррациональные уравнения', amount: 15 },
                  { id: 11, title: 'Показательные уравнения', amount: 17 },
                  { id: 12, title: 'Логарифмические уравнения', amount: 16 },
                  { id: 13, title: 'Тригонометрические уравнения', amount: 3 },
                ],
              },
              {
                id: 6,
                title: 'Планиметрия',
                part: 'test',
                subtopics: [
                  {
                    id: 79,
                    title: 'Решение прямоугольного треугольника',
                    amount: 48,
                  },
                  {
                    id: 90,
                    title: 'Решение равнобедренного треугольника',
                    amount: 45,
                  },
                  { id: 96, title: 'Треугольники общего вида', amount: 27 },
                  { id: 102, title: 'Параллелограммы', amount: 34 },
                  { id: 94, title: 'Трапеция', amount: 25 },
                  {
                    id: 111,
                    title: 'Центральные и вписанные углы',
                    amount: 12,
                  },
                  { id: 112, title: 'Касательная, хорда, секущая', amount: 11 },
                  { id: 113, title: 'Вписанные окружности', amount: 24 },
                  { id: 114, title: 'Описанные окружности', amount: 29 },
                ],
              },
              {
                id: 7,
                title: 'Производная и первообразная',
                part: 'test',
                subtopics: [
                  { id: 69, title: 'Физический смысл производной', amount: 6 },
                  {
                    id: 68,
                    title: 'Геометрический смысл производной, касательная',
                    amount: 24,
                  },
                  {
                    id: 70,
                    title: 'Применение производной к исследованию функций',
                    amount: 25,
                  },
                  { id: 183, title: 'Первообразная', amount: 5 },
                ],
              },
              {
                id: 8,
                title: 'Стереометрия',
                part: 'test',
                subtopics: [
                  { id: 192, title: 'Куб', amount: 12 },
                  {
                    id: 193,
                    title: 'Прямоугольный параллелепипед',
                    amount: 29,
                  },
                  {
                    id: 180,
                    title: 'Элементы составных многогранников',
                    amount: 15,
                  },
                  {
                    id: 148,
                    title: 'Площадь поверхности составного многогранника',
                    amount: 17,
                  },
                  {
                    id: 140,
                    title: 'Объем составного многогранника просмотреть',
                    amount: 17,
                  },
                  { id: 178, title: 'Призма', amount: 51 },
                  { id: 177, title: 'Пирамида', amount: 65 },
                  { id: 197, title: 'Комбинации тел', amount: 37 },
                  { id: 194, title: 'Цилиндр', amount: 18 },
                  { id: 144, title: 'Конус', amount: 29 },
                  { id: 151, title: 'Шар', amount: 8 },
                ],
              },
              {
                id: 9,
                title: 'Вычисления и преобразования',
                part: 'test',
                subtopics: [
                  {
                    id: 55,
                    title: 'Преобразования числовых рациональных выражений',
                    amount: 6,
                  },
                  {
                    id: 60,
                    title: 'Преобразования алгебраических выражений и дробей',
                    amount: 23,
                  },
                  {
                    id: 56,
                    title: 'Преобразования числовых иррациональных выражений',
                    amount: 17,
                  },
                  {
                    id: 61,
                    title: 'Преобразования буквенных иррациональных выражений',
                    amount: 11,
                  },
                  {
                    id: 57,
                    title: 'Вычисление значений степенных выражений',
                    amount: 18,
                  },
                  { id: 62, title: 'Действия со степенями', amount: 30 },
                  {
                    id: 58,
                    title: 'Преобразования числовых логарифмических выражений',
                    amount: 32,
                  },
                  {
                    id: 63,
                    title: 'Преобразования буквенных логарифмических выражений',
                    amount: 4,
                  },
                  {
                    id: 65,
                    title: 'Вычисление значений тригонометрических выражений',
                    amount: 29,
                  },
                  {
                    id: 59,
                    title:
                      'Преобразования числовых тригонометрических выражений',
                    amount: 38,
                  },
                  {
                    id: 64,
                    title:
                      'Преобразования буквенных тригонометрических выражений',
                    amount: 3,
                  },
                ],
              },
              {
                id: 10,
                title: 'Задачи с прикладным содержанием',
                part: 'test',
                subtopics: [
                  {
                    id: 71,
                    title: 'Линейные уравнения и неравенства',
                    amount: 3,
                  },
                  {
                    id: 72,
                    title: 'Квадратные и степенные уравнения и неравенства',
                    amount: 15,
                  },
                  {
                    id: 76,
                    title: 'Рациональные уравнения и неравенства',
                    amount: 13,
                  },
                  {
                    id: 77,
                    title: 'Иррациональные уравнения и неравенства',
                    amount: 10,
                  },
                  {
                    id: 73,
                    title: 'Показательные уравнения и неравенства',
                    amount: 7,
                  },
                  {
                    id: 74,
                    title: 'Логарифмические уравнения и неравенства',
                    amount: 4,
                  },
                  {
                    id: 75,
                    title: 'Тригонометрические уравнения и неравенства',
                    amount: 16,
                  },
                  { id: 184, title: 'Разные задачи', amount: 6 },
                ],
              },
              {
                id: 11,
                title: 'Текстовые задачи',
                part: 'test',
                subtopics: [
                  {
                    id: 88,
                    title: 'Задачи на проценты, сплавы и смеси',
                    amount: 16,
                  },
                  { id: 84, title: 'Задачи на движение по прямой', amount: 28 },
                  {
                    id: 85,
                    title: 'Задачи на движение по окружности',
                    amount: 5,
                  },
                  { id: 86, title: 'Задачи на движение по воде', amount: 14 },
                  { id: 87, title: 'Задачи на совместную работу', amount: 24 },
                  { id: 89, title: 'Задачи на прогрессии', amount: 9 },
                ],
              },
              {
                id: 12,
                title: 'Наибольшее и наименьшее значение функций',
                part: 'test',
                subtopics: [
                  {
                    id: 81,
                    title: 'Исследование степенных и иррациональных функций',
                    amount: 55,
                  },
                  { id: 83, title: 'Исследование частных', amount: 11 },
                  { id: 82, title: 'Исследование произведений', amount: 29 },
                  {
                    id: 80,
                    title:
                      'Исследование показательных и логарифмических функций',
                    amount: 23,
                  },
                  {
                    id: 78,
                    title: 'Исследование тригонометрических функций',
                    amount: 28,
                  },
                  {
                    id: 175,
                    title: 'Исследование функций без помощи производной',
                    amount: 16,
                  },
                ],
              },
              {
                id: 13,
                title: 'Уравнения',
                part: 'detailed',
                subtopics: [
                  { id: 275, title: 'Иррациональные уравнения', amount: 9 },
                  { id: 290, title: 'Рациональные уравнения', amount: 3 },
                  {
                    id: 291,
                    title:
                      'Тригонометрические уравнения, разложение на множители',
                    amount: 25,
                  },
                  {
                    id: 186,
                    title: 'Логарифмические и показательные уравнения',
                    amount: 11,
                  },
                  {
                    id: 167,
                    title: 'Тригонометрические уравнения',
                    amount: 35,
                  },
                  {
                    id: 202,
                    title: 'Тригонометрические уравнения, исследование ОДЗ',
                    amount: 30,
                  },
                  { id: 201, title: 'Уравнения смешанного типа', amount: 22 },
                ],
              },
              {
                id: 14,
                title: 'Стереометрическая задача',
                part: 'detailed',
                subtopics: [
                  {
                    id: 280,
                    title: 'Расстояние между прямыми и плоскостями',
                    amount: 9,
                  },
                  {
                    id: 281,
                    title: 'Расстояние от точки до прямой и до плоскости',
                    amount: 11,
                  },
                  { id: 282, title: 'Сечения многогранников', amount: 27 },
                  { id: 283, title: 'Угол между плоскостями', amount: 19 },
                  {
                    id: 284,
                    title: 'Угол между прямой и плоскостью',
                    amount: 15,
                  },
                  {
                    id: 285,
                    title: 'Угол между скрещивающимися прямыми',
                    amount: 12,
                  },
                  { id: 257, title: 'Объемы многогранников', amount: 19 },
                  {
                    id: 206,
                    title: 'Круглые тела: цилиндр, конус, шар',
                    amount: 19,
                  },
                ],
              },
              {
                id: 15,
                title: 'Неравенства',
                part: 'detailed',
                subtopics: [
                  { id: 242, title: 'Рациональные неравенства', amount: 28 },
                  {
                    id: 243,
                    title: 'Неравенства, содержащие радикалы',
                    amount: 8,
                  },
                  { id: 237, title: 'Показательные неравенства', amount: 102 },
                  { id: 238, title: 'Логарифмические неравенства', amount: 76 },
                  {
                    id: 239,
                    title: 'Неравенства с логарифмами по переменному основанию',
                    amount: 80,
                  },
                  { id: 244, title: 'Неравенства с модулем', amount: 14 },
                  { id: 245, title: 'Смешанные неравенства', amount: 56 },
                ],
              },
              {
                id: 16,
                title: 'Планиметрическая задача',
                part: 'detailed',
                subtopics: [
                  {
                    id: 276,
                    title: 'Многоугольники и их свойства',
                    amount: 52,
                  },
                  {
                    id: 277,
                    title: 'Окружности и системы окружностей',
                    amount: 14,
                  },
                  { id: 278, title: 'Окружности и треугольники', amount: 35 },
                  {
                    id: 279,
                    title: 'Окружности и четырёхугольники',
                    amount: 38,
                  },
                ],
              },
              {
                id: 17,
                title: 'Финансовая математика',
                part: 'detailed',
                subtopics: [
                  {
                    id: 247,
                    title: 'Задачи на оптимальный выбор ',
                    amount: 51,
                  },
                  { id: 221, title: 'Банки, вклады, кредиты', amount: 114 },
                ],
              },
              {
                id: 18,
                title: 'Задача с параметром',
                part: 'detailed',
                subtopics: [
                  { id: 268, title: 'Комбинация «кривых»', amount: 10 },
                  { id: 267, title: 'Комбинация прямых', amount: 8 },
                  { id: 271, title: 'Координаты (x, a)', amount: 14 },
                  {
                    id: 272,
                    title: 'Кусочное построение графика функции',
                    amount: 9,
                  },
                  {
                    id: 265,
                    title: 'Левая и правая части в качестве отдельных графиков',
                    amount: 11,
                  },
                  { id: 274, title: 'Перебор случаев', amount: 50 },
                  { id: 270, title: 'Подвижная галочка', amount: 4 },
                  { id: 269, title: 'Расстояние между точками', amount: 7 },
                  { id: 273, title: 'Симметрия в решениях', amount: 15 },
                  { id: 266, title: 'Уравнение окружности', amount: 24 },
                  {
                    id: 235,
                    title: 'Функции, зависящие от параметра',
                    amount: 14,
                  },
                  { id: 171, title: 'Уравнения с параметром', amount: 20 },
                  {
                    id: 207,
                    title: 'Расположение корней квадратного трехчлена',
                    amount: 8,
                  },
                  {
                    id: 208,
                    title: 'Использование симметрий, оценок, монотонности',
                    amount: 27,
                  },
                ],
              },
              {
                id: 19,
                title: 'Числа и их свойства',
                part: 'detailed',
                subtopics: [
                  { id: 172, title: 'Числа и их свойства', amount: 70 },
                  {
                    id: 217,
                    title: 'Числовые наборы на карточках и досках',
                    amount: 33,
                  },
                  {
                    id: 209,
                    title: 'Последовательности и прогрессии',
                    amount: 43,
                  },
                  {
                    id: 210,
                    title: 'Сюжетные задачи: кино, театр, мотки верёвки',
                    amount: 51,
                  },
                ],
              },
              {
                id: 20,
                title: 'Выбор оптимального варианта',
                part: 'extra',
                subtopics: [
                  {
                    id: 54,
                    title: 'Выбор варианта из двух возможных',
                    amount: 5,
                  },
                  {
                    id: 53,
                    title: 'Выбор варианта из трех возможных',
                    amount: 25,
                  },
                  {
                    id: 173,
                    title: 'Выбор варианта из четырех возможных',
                    amount: 5,
                  },
                ],
              },
            ].map(topic => ({
              id: topic.id,
              title: topic.title,
              part: topic.part,
              subtopics: topic.subtopics.map(subtopic => ({
                id: subtopic.id,
                title: subtopic.title,
                amount: subtopic.amount,
                checked: true,
              })),
              value: 0,
              checked: false,
            }))
          )
        })
    } else {
      setTopicsList(topicsListSaved)
    }
  }, [])

  return (
    <Section>
      <Title>Конструктор варианта</Title>

      <p className="Section-Desc">
        Не тратьте время на то, что знаете{' '}
        <span className="Nowrap">
          хорошо,
          <span className="Halfspace">&nbsp;</span>—
        </span>{' '}
        собирайте работу из определенных заданий. Рекомендуем регулярно решать
        такие и персональные варианты: вы будете тренироваться в том, что
        не получается, до тех пор, пока не начнет получаться.
      </p>

      <ConstructorForm topicsList={topicsList} setTopicsList={setTopicsList} />
    </Section>
  )
}

export default Constructor
