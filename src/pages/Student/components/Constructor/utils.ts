import { ITopic } from 'components/ConstructorForm/Buttons/Buttons'
import { IParts, ITestTotal } from 'components/ConstructorForm/ConstructorForm'

const loadTopicsList = (): Array<ITopic> | null => {
  const topicListSaved = localStorage.getItem('topicList')

  return topicListSaved ? JSON.parse(topicListSaved) : null
}

const saveTopicsList = (topicList: Array<ITopic>) => {
  localStorage.setItem('topicList', JSON.stringify(topicList))
}

const loadExtraTopics = (): boolean =>
  localStorage.getItem('extraTopics') === 'true'

const saveExtraTopics = (value: boolean) => {
  localStorage.setItem('extraTopics', value.toString())
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
  loadTopicsList,
  saveTopicsList,
  loadExtraTopics,
  saveExtraTopics,
  loadParts,
  saveParts,
  loadTestTotal,
  saveTestTotal,
}
