import { ITopic } from 'components/ConstructorForm/Buttons/Buttons'

const loadTopicsList = (): Array<ITopic> | null => {
  const topicListSaved = localStorage.getItem('topicList')

  return topicListSaved ? JSON.parse(topicListSaved) : null
}

const saveTopicsList = (topicList: Array<ITopic>) => {
  localStorage.setItem('topicList', JSON.stringify(topicList))
}

const getExtraTopics = () => localStorage.getItem('extraTopics') === 'true'

const saveExtraTopics = (value: any) => {
  localStorage.setItem('extraTopics', value)
}

const getParts = () => {
  const partsSaved = localStorage.getItem('parts')

  return partsSaved ? JSON.parse(partsSaved) : null
}

const saveParts = (parts: any) => {
  localStorage.setItem('parts', JSON.stringify(parts))
}

const getTestTotal = () => {
  const testTotalSaved = localStorage.getItem('testTotal')

  return testTotalSaved ? JSON.parse(testTotalSaved) : null
}

const saveTestTotal = (parts: any) => {
  localStorage.setItem('testTotal', JSON.stringify(parts))
}

export {
  loadTopicsList,
  saveTopicsList,
  getExtraTopics,
  saveExtraTopics,
  getParts,
  saveParts,
  getTestTotal,
  saveTestTotal,
}
