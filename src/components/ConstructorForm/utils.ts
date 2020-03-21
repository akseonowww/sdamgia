import { ITopic } from './Buttons/Buttons'
import { IParts, ITestTotal } from './ConstructorForm'

const loadTopicsList = (page: string): Array<ITopic> | null => {
  const topicListSaved = localStorage.getItem(`${page}TopicList`)

  return topicListSaved ? JSON.parse(topicListSaved) : null
}

const saveTopicsList = (page: string, topicList: Array<ITopic>) => {
  localStorage.setItem(`${page}TopicList`, JSON.stringify(topicList))
}

const loadParts = (page: string): IParts => {
  const partsSaved = localStorage.getItem(`${page}Parts`)

  return partsSaved ? JSON.parse(partsSaved) : null
}

const saveParts = (page: string, parts: IParts) => {
  localStorage.setItem(`${page}Parts`, JSON.stringify(parts))
}

const loadTestTotal = (page: string): ITestTotal => {
  const testTotalSaved = localStorage.getItem(`${page}TestTotal`)

  return testTotalSaved ? JSON.parse(testTotalSaved) : null
}

const saveTestTotal = (page: string, testTotal: ITestTotal) => {
  localStorage.setItem(`${page}TestTotal`, JSON.stringify(testTotal))
}

export {
  saveTopicsList,
  loadTopicsList,
  saveParts,
  loadParts,
  saveTestTotal,
  loadTestTotal,
}
