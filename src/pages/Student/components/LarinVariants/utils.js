const loadVariantsAll = () => JSON.parse(localStorage.getItem('variantsAll'));

const saveVariantsAll = variantsAll => {
	localStorage.setItem('variantsAll', JSON.stringify(variantsAll));
};

export { loadVariantsAll, saveVariantsAll };
