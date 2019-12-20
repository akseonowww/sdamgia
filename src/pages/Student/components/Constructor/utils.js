const getTopicsList = () => JSON.parse(localStorage.getItem('constructor'));

const saveTopicsList = list => {
	localStorage.setItem('constructor', JSON.stringify(list));
};

const getExtraTopics = () => localStorage.getItem('extraTopics') === 'true';

const saveExtraTopics = value => {
	localStorage.setItem('extraTopics', value);
};

const getParts = () => JSON.parse(localStorage.getItem('parts'));

const saveParts = parts => {
	localStorage.setItem('parts', JSON.stringify(parts));
};

const getTestTotal = () => JSON.parse(localStorage.getItem('testTotal'));

const saveTestTotal = parts => {
	localStorage.setItem('testTotal', JSON.stringify(parts));
};

export {
	getTopicsList,
	saveTopicsList,
	getExtraTopics,
	saveExtraTopics,
	getParts,
	saveParts,
	getTestTotal,
	saveTestTotal
};
