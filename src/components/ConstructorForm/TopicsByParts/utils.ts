const loadExtraTopics = (): boolean =>
  localStorage.getItem('extraTopics') === 'true'

const saveExtraTopics = (value: boolean) => {
  localStorage.setItem('extraTopics', value.toString())
}

export { loadExtraTopics, saveExtraTopics }
