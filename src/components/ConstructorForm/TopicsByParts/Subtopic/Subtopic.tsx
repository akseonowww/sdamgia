import React, { FC, useRef, Dispatch, SetStateAction } from 'react'

import { ITopic, ISubtopic } from 'components/ConstructorForm/Buttons/Buttons'
import { saveTopicsList } from 'components/ConstructorForm/utils'
import nahStep from '../../../Form/nahStep'
import Checkbox from '../../../Checkbox'
import Link from 'components/Link'

interface ISubtopicProps {
  page: string
  i: number
  subtopic: ISubtopic
  subI: number
  topicsList: Array<ITopic> | null
  setTopicsList: Dispatch<SetStateAction<ITopic[] | null>>
}

const Subtopic: FC<ISubtopicProps> = ({
  page,
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
    saveTopicsList(page, list)
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
        <Link
          className="Link_black"
          href={'https://ege.sdamgia.ru/test?theme=' + subtopic.id}
        >
          {subtopic.amount}
          &nbsp;шт.
        </Link>
      </div>
    </label>
  )
}

export default Subtopic
