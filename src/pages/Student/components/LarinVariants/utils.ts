const loadVariantsAll = (): boolean => {
  const variantsAllSaved = localStorage.getItem('variantsAll')

  return variantsAllSaved ? JSON.parse(variantsAllSaved) : false
}

const saveVariantsAll = (variantsAll: boolean) => {
  localStorage.setItem('variantsAll', JSON.stringify(variantsAll))
}

export { loadVariantsAll, saveVariantsAll }
