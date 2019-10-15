import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Section from '../../shared/Section';
import Grid from '../../shared/Grid';
import Title from '../../shared/Title';
import Counter from '../../shared/Counter/Counter';
import Checkbox from '../../shared/Checkbox';
import '../../shared/Switcher/Switcher.css';
import '../../shared/Switcher/_vertical/Switcher_vertical.css';
import '../../shared/Switcher/_checkbox/Switcher_checkbox.css';
import '../../shared/Link/Link.css';
import './Constructor.css';

const Constructor = () => {
	const [topicsList, setTopicsList] = useState(null);

	const [parts, setParts] = useState({
		test: false,
		detailed: false
	});

	const [testTotal, setTestTotal] = useState({
		amount: 0,
		text: ''
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

	const handleTopicClick = id => {
		const index = id - 1;
		const list = [...topicsList];
		list[index] = { ...list[index], checked: !list[index].checked };

		setTopicsList(list);
	};

	const handleCheckboxChange = (i, subI) => {
		const list = [...topicsList];
		const topic = (list[i] = { ...list[i] });

		topic.subtopics = [...topic.subtopics];
		topic.subtopics[subI] = {
			...topic.subtopics[subI],
			checked: !topic.subtopics[subI].checked
		};

		setTopicsList(list);
	};

	const switchPart = part => {
		const newValue = !parts[part];
		const countValue = newValue ? 1 : 0;

		const willBeSaved = countValue === 1;

		const list = [...topicsList];
		for (let i = 0; i < list.length; i++) {
			if (list[i].part === part) {
				list[i] = {
					...list[i],
					value:
						list[i].value > 1 && willBeSaved
							? list[i].value
							: countValue
				};
			}
		}
		setTopicsList(list);

		setParts({
			...parts,
			[part]: newValue
		});
	};

	const switchOffPart = part => {
		setParts({
			...parts,
			[part]: false
		});
	};

	const handleResetClick = e => {
		e.preventDefault();

		const list = [...topicsList];
		for (let i = 0; i < list.length; i++) {
			list[i] = {
				...list[i],
				value: 0
			};
		}
		setTopicsList(list);

		setParts({
			test: false,
			detailed: false
		});
	};

	const getContentByParts = () => {
		if (topicsList) {
			const parted = topicsList.reduce(
				(acc, { id, part, title, value, checked, subtopics }) => (
					(acc[part] = acc[part] || []).push({
						id,
						title,
						value,
						checked,
						subtopics
					}),
					acc
				),
				{}
			);

			return Object.entries(parted).map(([part, topics], partI) => {
				let partName;
				switch (part) {
					case 'test':
						partName = 'Тестовая часть';
						break;
					case 'detailed':
						partName = 'Развернутая часть';
						break;
					case 'extra':
						partName = 'Задания, не входящие в экзамен этого года';
						break;
				}

				return (
					<div class="ConstructorForm-Part" key={partI}>
						<div className="ConstructorForm-Row ConstructorForm-Row_label">
							<div className="ConstructorForm-Topic">
								{partName}
							</div>
						</div>
						{topics.map(
							({ id, title, value, checked, subtopics }, i) => (
								<div
									className="ConstructorForm-Row"
									key={'topic' + partI + i}
								>
									<Counter
										className="ConstructorForm-Counter"
										name={`prob${id}`}
										value={value}
										list={[...topicsList]}
										index={id - 1}
										setValue={setTopicsList}
										switchOffPart={() =>
											switchOffPart(part)
										}
									/>
									<div className="ConstructorForm-Topic">
										<div
											className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
											onClick={() => handleTopicClick(id)}
										>
											<div className="ConstructorForm-TopicNumber">
												{part !== 'extra'
													? id
													: `Д${i + 1}`}
												.
											</div>
											<div className="ConstructorForm-TopicDesc">
												<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
													{title}
												</u>
											</div>
										</div>

										{checked && (
											<div className="ConstructorForm-TopicSubs">
												{subtopics.map(
													(subtopic, subI) => (
														<label
															className="Link_wrap ConstructorForm-TopicName Label"
															key={
																'subtopic' +
																subtopic.id
															}
														>
															<div className="ConstructorForm-TopicNumber">
																<Checkbox
																	fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
																	name={
																		'probtheme' +
																		subtopic.id
																	}
																	value={
																		subtopic.checked
																	}
																	onChange={() =>
																		handleCheckboxChange(
																			i,
																			subI
																		)
																	}
																/>
															</div>
															<div className="ConstructorForm-TopicDesc">
																{subtopic.title}
																&nbsp;·&nbsp;
																<a
																	className="Link Link_black"
																	href={
																		'https://ege.sdamgia.ru/test?theme=' +
																		subtopic.id
																	}
																>
																	{
																		subtopic.amount
																	}
																	&nbsp;шт.
																</a>
															</div>
														</label>
													)
												)}
											</div>
										)}
									</div>
								</div>
							)
						)}
					</div>
				);
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
						{getContentByParts()}
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
