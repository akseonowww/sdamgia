import React, { useState, Dispatch, SetStateAction } from 'react'

import { ITopic } from './Buttons/Buttons'
import Grid from '../Grid'
import TopicsByParts from './TopicsByParts'
import Buttons from './Buttons'
import './ConstructorForm.scss'

export const getNewTestTotalText = (total: number): string => {
  if (total > 0) {
    const totalWord = 'задани'

    const newTotalWord =
      totalWord + (total % 10 === 1 && total % 100 !== 11 ? 'я' : 'й')

    return 'из\u00A0' + total + '\u00A0' + newTotalWord
  } else {
    return ''
  }
}

export interface ITestTotal {
  amount: number
  text: string
}

export interface IParts {
  [test: string]: boolean
  detailed: boolean
}

interface IConstructorFormProps {
  topicsList: Array<ITopic> | null
  setTopicsList: Dispatch<SetStateAction<ITopic[] | null>>
}

const ConstructorForm = ({
  topicsList,
  setTopicsList,
}: IConstructorFormProps) => {
  const [testTotal, setTestTotal] = useState<ITestTotal>({
    amount: 0,
    text: '',
  })

  const [parts, setParts] = useState<IParts>({
    test: false,
    detailed: false,
  })

  return (
    <form action="/test?a=generate" method="GET">
      <Grid className="ConstructorForm">
        <div className="ConstructorForm-TopicList">
          <div className="ConstructorForm-Row ConstructorForm-Row_head">
            <div className="ConstructorForm-Counter">Количество</div>
            <div className="ConstructorForm-Topic">Тема</div>
          </div>
          {topicsList && (
            <TopicsByParts
              className="Constructor-PartList"
              topicsList={topicsList}
              setTopicsList={setTopicsList}
              parts={parts}
              setParts={setParts}
              testTotal={testTotal}
              setTestTotal={setTestTotal}
            />
          )}
        </div>

        <Buttons
          topicsList={topicsList}
          setTopicsList={setTopicsList}
          parts={parts}
          setParts={setParts}
          testTotal={testTotal}
          setTestTotal={setTestTotal}
          getNewTestTotalText={getNewTestTotalText}
        />
      </Grid>
    </form>
  )
}

export default ConstructorForm
