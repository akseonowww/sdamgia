import React, { useState, useEffect, useCallback } from 'react'

import Counter from '../../Counter/Counter'
import Subtopic from './Subtopic'
import PartName from './PartName/PartName'
import {
  saveTopicsList,
  loadExtraTopics,
  saveExtraTopics,
  saveParts,
} from '../../../pages/Student/components/Constructor/utils'

const TopicsByParts = ({
  topicsList,
  setTopicsList,
  parts,
  setParts,
  testTotal,
  setTestTotal,
}) => {
  const [extraTopics, setExtraTopics] = useState(false)

  useEffect(() => {
    if (loadExtraTopics()) setExtraTopics(loadExtraTopics())
  }, [])

  const handleTopicClick = useCallback(
    index => {
      const list = [...topicsList]
      list[index] = { ...list[index], checked: !list[index].checked }

      setTopicsList(list)
      saveTopicsList(list)
    },
    [topicsList, setTopicsList]
  )

  const handleExtraPartNameClick = useCallback(() => {
    const newValue = !extraTopics

    setExtraTopics(newValue)
    saveExtraTopics(newValue)
  }, [extraTopics])

  const switchOffPart = useCallback(
    part => {
      const newParts = {
        ...parts,
        [part]: false,
      }
      setParts(newParts)
      saveParts(newParts)
    },
    [parts, setParts]
  )

  const switchOnPart = useCallback(
    part => {
      const newParts = {
        ...parts,
        [part]: true,
      }
      setParts(newParts)
      saveParts(newParts)
    },
    [parts, setParts]
  )

  const topicsListParted = topicsList.reduce(
    (acc, { id, part, title, value, checked, subtopics }) => {
      acc[part] = acc[part] || []
      acc[part].push({
        id,
        title,
        value,
        checked,
        subtopics,
      })
      return acc
    },
    {}
  )

  return Object.entries(topicsListParted).map(([part, topics], partI) => (
    <div className="ConstructorForm-Part" key={partI}>
      <PartName
        part={part}
        handleExtraPartNameClick={handleExtraPartNameClick}
      />

      {(part !== 'extra' || (part === 'extra' && extraTopics)) &&
        topics.map(({ id, title, value, checked, subtopics }, i) => (
          <div className="ConstructorForm-Row" key={'topic' + partI + i}>
            <Counter
              className="ConstructorForm-Counter"
              name={`prob${id}`}
              value={value}
              list={[...topicsList]}
              index={id - 1}
              testTotal={testTotal}
              setValue={setTopicsList}
              setTestTotal={setTestTotal}
              part={part}
              switchOnPart={switchOnPart}
              switchOffPart={switchOffPart}
            />
            <div className="ConstructorForm-Topic">
              <div
                className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
                onClick={() => handleTopicClick(id - 1)}
              >
                <div className="ConstructorForm-TopicNumber">
                  {part !== 'extra' ? id : `Д${i + 1}`}.
                </div>
                <div className="ConstructorForm-TopicDesc">
                  <u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
                    {title}
                  </u>
                </div>
              </div>

              {checked && (
                <div className="ConstructorForm-TopicSubs">
                  {subtopics.map((subtopic, subI) => (
                    <Subtopic
                      i={id - 1}
                      subtopic={subtopic}
                      subI={subI}
                      topicsList={topicsList}
                      setTopicsList={setTopicsList}
                      key={'subtopic' + subtopic.id}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  ))
}

export default TopicsByParts
