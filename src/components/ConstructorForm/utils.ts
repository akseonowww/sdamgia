import { ITopic } from './Buttons/Buttons'
import { IParts, ITestTotal } from './ConstructorForm'

const loadTopicsList = (): Array<ITopic> | null => {
  const topicListSaved = localStorage.getItem('topicList')

  return topicListSaved ? JSON.parse(topicListSaved) : null
}

const saveTopicsList = (topicList: Array<ITopic>) => {
  localStorage.setItem('topicList', JSON.stringify(topicList))
}

const loadParts = (): IParts => {
  const partsSaved = localStorage.getItem('parts')

  return partsSaved ? JSON.parse(partsSaved) : null
}

const saveParts = (parts: IParts) => {
  localStorage.setItem('parts', JSON.stringify(parts))
}

const loadTestTotal = (): ITestTotal => {
  const testTotalSaved = localStorage.getItem('testTotal')

  return testTotalSaved ? JSON.parse(testTotalSaved) : null
}

const saveTestTotal = (testTotal: ITestTotal) => {
  localStorage.setItem('testTotal', JSON.stringify(testTotal))
}

export {
  saveTopicsList,
  loadTopicsList,
  saveParts,
  loadParts,
  saveTestTotal,
  loadTestTotal,
}
