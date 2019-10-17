import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Section from '../../shared/Section';
import Grid from '../../shared/Grid';
import Title from '../../shared/Title';
import Checkbox from '../../shared/Checkbox';
import '../../shared/Switcher/Switcher.css';
import '../../shared/Switcher/_vertical/Switcher_vertical.css';
import '../../shared/Switcher/_checkbox/Switcher_checkbox.css';
import '../../shared/Link/Link.css';
import './Constructor.css';
import FormParts from './FormPart/FormParts';

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

	const switchPart = part => {
		if (topicsList) {
			const newValue = !parts[part];
			const countValue = newValue ? 1 : 0;

			const willBeSaved = countValue === 1;

			setParts({
				...parts,
				[part]: newValue
			});

			const list = [...topicsList];
			let newTestTotalAmount = testTotal.amount;
			for (let i = 0; i < list.length; i++) {
				if (list[i].part === part) {
					let oldValue = list[i].value;

					list[i] = {
						...list[i],
						value:
							list[i].value > 1 && willBeSaved
								? oldValue
								: countValue
					};

					newTestTotalAmount =
						newTestTotalAmount + (list[i].value - oldValue);
				}
			}

			setTopicsList(list);

			setTestTotal({
				amount: newTestTotalAmount,
				text: getNewTestTotalText(newTestTotalAmount)
			});
		}
	};

	const handleResetClick = e => {
		e.preventDefault();

		if (topicsList) {
			const list = [...topicsList];
			for (let i = 0; i < list.length; i++) {
				list[i] = {
					...list[i],
					value: 0
				};
			}
			setTopicsList(list);

			setTestTotal({
				amount: 0,
				text: ''
			});

			setParts({
				test: false,
				detailed: false
			});
		}
	};

	return (
		<Section>
			<Title>Конструктор варианта</Title>

			<p className="Section-Desc">
				Не тратьте время на то, что знаете{' '}
				<nobr>
					хорошо,
					<span class="halfspace">&nbsp;</span>—
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

					<div className="ConstructorForm-Buttons">
						<div className="ConstructorForm-ButtonsPanel">
							<input
								className="Button ConstructorForm-SubmitButton"
								type="submit"
								value={`Составить вариант ${testTotal.text}`}
							/>

							<div className="Switcher Switcher_vertical Switcher_checkbox ConstructorForm-Switcher">
								<label className="Label Switcher-Label Switcher_vertical-Label Switcher_checkbox-Label">
									<Checkbox
										className="Switcher-Input"
										fakeCheckboxClassName="FakeCheckbox_blue Switcher_checkbox-FakeCheckbox"
										name="testPart"
										value={parts.test}
										onChange={() => switchPart('test')}
									/>
									<span className="Switcher-Text Switcher_checkbox-Text">
										Тестовая часть
									</span>
								</label>
								<label className="Label Switcher-Label Switcher_vertical-Label Switcher_checkbox-Label">
									<Checkbox
										className="Switcher-Input"
										fakeCheckboxClassName="FakeCheckbox_blue Switcher_checkbox-FakeCheckbox"
										name="detailedPart"
										value={parts.detailed}
										onChange={() => switchPart('detailed')}
									/>
									<span className="Switcher-Text Switcher_checkbox-Text">
										Развернутая часть
									</span>
								</label>
							</div>

							<button
								className="Link Link_pseudo Link_wrap ConstructorForm-ResetButton"
								onClick={handleResetClick}
							>
								<span>×</span>
								<u className="Link-U Link_pseudo-U Link_wrap-U ConstructorForm-ResetButtonText">
									Очистить поля
								</u>
							</button>
						</div>
					</div>
				</Grid>
			</form>
		</Section>
	);
};

export default Constructor;
