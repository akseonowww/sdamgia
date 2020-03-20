import React, { FC, useRef, Dispatch, SetStateAction } from 'react'

import Checkbox from '../../../Checkbox'
import nahStep from '../../../Form/nahStep'
import { saveTopicsList } from '../../../../pages/Student/components/Constructor/utils'
import { ITopic, ISubtopic } from 'components/ConstructorForm/Buttons/Buttons'

interface ISubtopicProps {
  i: number
  subtopic: ISubtopic
  subI: number
  topicsList: Array<ITopic> | null
  setTopicsList: Dispatch<SetStateAction<ITopic[] | null>>
}

const Subtopic: FC<ISubtopicProps> = ({
  i,
  subtopic,
  subI,
  topicsList,
  setTopicsList,
}) => {
  const subtopicLabel = useRef<HTMLLabelElement | null>(null)

  const handleCheckboxChange = (i: number, subI: number) => {
    if (!topicsList) return

    const list = [...topicsList]
    const topic = (list[i] = { ...list[i] })
    topic.subtopics = [...topic.subtopics]

    const newValue = !topic.subtopics[subI].checked

    // Allow more than one subtopic checked
    const subtopicsLength = topic.subtopics.length
    let uncheckedNumber = 0
    for (let subtopicI = 0; subtopicI < subtopicsLength; subtopicI++) {
      if (topic.subtopics[subtopicI].checked === false) uncheckedNumber++
    }
    if (uncheckedNumber === subtopicsLength - 1 && newValue === false) {
      if (subtopicLabel && subtopicLabel.current) {
        subtopicLabel.current.style.left = '0'
        let x = 0,
          m = 0,
          nahStepTimeOut
        nahStep(subtopicLabel.current, m, x, nahStepTimeOut)

        return
      }
    }

    topic.subtopics[subI] = {
      ...topic.subtopics[subI],
      checked: newValue,
    }
    setTopicsList(list)
    saveTopicsList(list)
  }

  return (
    <label
      className="Link_wrap ConstructorForm-TopicName Label"
      ref={subtopicLabel}
    >
      <div className="ConstructorForm-TopicNumber">
        <Checkbox
          fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
          name={'probtheme' + subtopic.id}
          value={subtopic.checked}
          onChange={() => handleCheckboxChange(i, subI)}
        />
      </div>
      <div className="ConstructorForm-TopicDesc">
        {subtopic.title}
        &nbsp;·&nbsp;
        <a
          className="Link Link_black"
          href={'https://ege.sdamgia.ru/test?theme=' + subtopic.id}
        >
          {subtopic.amount}
          &nbsp;шт.
        </a>
      </div>
    </label>
  )
}

export default Subtopic
