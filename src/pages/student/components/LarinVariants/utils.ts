const loadVariantsAll = (): boolean => {
  const variantsAll = localStorage.getItem('variantsAll')

  if (variantsAll != null) JSON.parse(variantsAll)

  return false
}

const saveVariantsAll = (variantsAll: boolean) => {
  localStorage.setItem('variantsAll', JSON.stringify(variantsAll))
}

export { loadVariantsAll, saveVariantsAll }
