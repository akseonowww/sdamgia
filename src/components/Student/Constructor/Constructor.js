import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Section from '../../shared/Section';
import Grid from '../../shared/Grid';
import Title from '../../shared/Title';
import '../../shared/Link/Link.css';
import './Constructor.css';
import FormParts from './FormPart/FormParts';
import Buttons from './Buttons/Buttons';

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

const Constructor = () => {
	const [topicsList, setTopicsList] = useState(null);

	const [testTotal, setTestTotal] = useState({
		amount: 0,
		text: ''
	});

	const [parts, setParts] = useState({
		test: false,
		detailed: false
	});

	useEffect(() => {
		axios
			.get('http://sidorchik.ru/reshuege/api/')
			.then(response => response.data)
			.then(data =>
				data.map(topic => ({
					id: topic.id,
					title: topic.title,
					part: topic.part,
					subtopics: topic.subtopics.map(subtopic => ({
						id: subtopic.id,
						title: subtopic.title,
						amount: subtopic.amount,
						checked: true
					})),
					value: 0,
					checked: false
				}))
			)
			.then(data => setTopicsList(data))
			.catch(error => console.log(error));
	}, []);

	return (
		<Section>
			<Title>Конструктор варианта</Title>

			<p className="Section-Desc">
				Не тратьте время на то, что знаете{' '}
				<nobr>
					хорошо,
					<span className="halfspace">&nbsp;</span>—
				</nobr>{' '}
				собирайте работу из определенных заданий. Рекомендуем регулярно
				решать такие и персональные варианты: вы будете тренироваться
				в том, что не получается, до тех пор, пока не начнет получаться.
			</p>

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
		</Section>
	);
};

export default Constructor;
