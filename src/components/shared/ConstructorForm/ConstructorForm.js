import React, { useState } from 'react';

import Grid from '../Grid';
import FormParts from './FormPart/';
import Buttons from './Buttons/';
import './ConstructorForm.css';

export const getNewTestTotalText = total => {
	if (total > 0) {
		const totalWord = 'задани';

		const newTotalWord =
			totalWord + (total % 10 === 1 && total % 100 !== 11 ? 'я' : 'й');

		return 'из\u00A0' + total + '\u00A0' + newTotalWord;
	} else {
		return '';
	}
};

const ConstructorForm = ({ topicsList, setTopicsList }) => {
	const [testTotal, setTestTotal] = useState({
		amount: 0,
		text: ''
	});

	const [parts, setParts] = useState({
		test: false,
		detailed: false
	});

	return (
		<form action="/test?a=generate" method="GET">
			<Grid className="ConstructorForm">
				<div className="ConstructorForm-TopicList">
					<div className="ConstructorForm-Row ConstructorForm-Row_head">
						<div className="ConstructorForm-Counter">
							Количество
						</div>
						<div className="ConstructorForm-Topic">Тема</div>
					</div>
					{topicsList && (
						<FormParts
							topicsList={topicsList}
							setTopicsList={setTopicsList}
							parts={parts}
							setParts={setParts}
							testTotal={testTotal}
							setTestTotal={setTestTotal}
						/>
					)}
				</div>

				<Buttons
					topicsList={topicsList}
					setTopicsList={setTopicsList}
					parts={parts}
					setParts={setParts}
					testTotal={testTotal}
					setTestTotal={setTestTotal}
					getNewTestTotalText={getNewTestTotalText}
				/>
			</Grid>
		</form>
	);
};

export default ConstructorForm;
