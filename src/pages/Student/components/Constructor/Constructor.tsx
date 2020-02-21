import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'

import Section from 'components/Section'
import Title from 'components/Title'
import ConstructorForm from 'components/ConstructorForm'
import {
  getTopicsList,
  getTopicListData,
} from 'pages/Student/components/Constructor/utils'
import 'components/Link/Link.scss'

export interface ITopic {
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

          setTopicsList(getTopicListData)
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
