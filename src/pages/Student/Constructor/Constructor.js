import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Section from '../../../components/Section';
import Title from '../../../components/Title';
import ConstructorForm from '../../../components/ConstructorForm';
import '../../../components/Link/Link.css';
import './Constructor.css';
import { getTopicsList } from '../../../utils/constructor';

const Constructor = () => {
	const [topicsList, setTopicsList] = useState(null);

	useEffect(() => {
		const topicsListSaved = getTopicsList();

		if (!topicsListSaved) {
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
		} else {
			setTopicsList(topicsListSaved);
		}
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

			<ConstructorForm
				topicsList={topicsList}
				setTopicsList={setTopicsList}
			/>
		</Section>
	);
};

export default Constructor;
