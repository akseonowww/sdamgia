import React, { useState } from 'react';

import Section from '../../shared/Section';
import Grid from '../../shared/Grid';
import Title from '../../shared/Title';
import Counter, { useCounter } from '../../shared/Counter/Counter';
import Checkbox from '../../shared/Checkbox';
import '../../shared/Switcher/Switcher.css';
import '../../shared/Switcher/_vertical/Switcher_vertical.css';
import '../../shared/Switcher/_checkbox/Switcher_checkbox.css';
import '../../shared/Link/Link.css';
import './Constructor.css';

const Constructor = () => {
	const { values, setValues, increment, decrement } = useCounter({
		totalTasksNumber: 'из 9 заданий',
		testPart: false,
		count1: 0,
		subtopic11: true,
		subtopic12: true,
		subtopic13: true,
		subtopic14: true,
		subtopic15: true,
		count2: 0,
		subtopic21: true,
		subtopic22: true,
		subtopic23: true,
		count3: 0,
		subtopic31: true,
		subtopic32: true,
		subtopic33: true,
		subtopic34: true,
		count4: 0,
		subtopic41: true,
		subtopic42: true,
		count5: 0,
		subtopic51: true,
		subtopic52: true,
		subtopic53: true,
		subtopic54: true,
		subtopic55: true,
		subtopic56: true,
		count6: 0,
		subtopic61: true,
		subtopic62: true,
		subtopic63: true,
		subtopic64: true,
		subtopic65: true,
		subtopic66: true,
		subtopic67: true,
		subtopic68: true,
		subtopic69: true,
		count7: 0,
		subtopic71: true,
		subtopic72: true,
		subtopic73: true,
		subtopic74: true,
		count8: 0,
		subtopic81: true,
		subtopic82: true,
		subtopic83: true,
		subtopic84: true,
		subtopic85: true,
		subtopic86: true,
		subtopic87: true,
		subtopic88: true,
		subtopic89: true,
		subtopic810: true,
		subtopic811: true,
		count9: 0,
		subtopic91: true,
		subtopic92: true,
		subtopic93: true,
		subtopic94: true,
		subtopic95: true,
		subtopic96: true,
		subtopic97: true,
		subtopic98: true,
		subtopic99: true,
		subtopic910: true,
		subtopic911: true,
		count10: 0,
		subtopic101: true,
		subtopic102: true,
		subtopic103: true,
		subtopic104: true,
		subtopic105: true,
		subtopic106: true,
		subtopic107: true,
		subtopic108: true,
		count11: 0,
		subtopic111: true,
		subtopic112: true,
		subtopic113: true,
		subtopic114: true,
		subtopic115: true,
		subtopic116: true,
		count12: 0,
		subtopic121: true,
		subtopic122: true,
		subtopic123: true,
		subtopic124: true,
		subtopic125: true,
		subtopic126: true,
		detailedPart: false,
		count13: 0,
		subtopic131: true,
		subtopic132: true,
		subtopic133: true,
		subtopic134: true,
		subtopic135: true,
		subtopic136: true,
		subtopic137: true,
		count14: 0,
		subtopic141: true,
		subtopic142: true,
		subtopic143: true,
		subtopic144: true,
		subtopic145: true,
		subtopic146: true,
		subtopic147: true,
		subtopic148: true,
		count15: 0,
		subtopic151: true,
		subtopic152: true,
		subtopic153: true,
		subtopic154: true,
		subtopic155: true,
		subtopic156: true,
		subtopic157: true,
		count16: 0,
		subtopic161: true,
		subtopic162: true,
		subtopic163: true,
		subtopic164: true,
		count17: 0,
		subtopic171: true,
		subtopic172: true,
		count18: 0,
		subtopic181: true,
		subtopic182: true,
		subtopic183: true,
		subtopic184: true,
		subtopic185: true,
		subtopic186: true,
		subtopic187: true,
		subtopic188: true,
		subtopic189: true,
		subtopic1810: true,
		subtopic1811: true,
		subtopic1812: true,
		subtopic1813: true,
		subtopic1814: true,
		count19: 0,
		subtopic191: true,
		subtopic192: true,
		subtopic193: true,
		subtopic194: true,
		extraCount1: 0,
		extraSubtopic11: true,
		extraSubtopic12: true,
		extraSubtopic13: true
	});

	const [topics, setTopics] = useState({
		subtopics1: false,
		subtopics2: false,
		subtopics3: false,
		subtopics4: false,
		subtopics5: false,
		subtopics6: false,
		subtopics7: false,
		subtopics8: false,
		subtopics9: false,
		subtopics10: false,
		subtopics11: false,
		subtopics12: false,
		subtopics13: false,
		subtopics14: false,
		subtopics15: false,
		subtopics16: false,
		subtopics17: false,
		subtopics18: false,
		subtopics19: false,
		topicsExtra: false,
		extraSubtopics1: false
	});

	const handleInputChange = e => {
		const { name, type, value, checked } = e.target;
		let newValue;

		if (type === 'checkbox') {
			newValue = checked;
		} else {
			// allow only number in counter input
			if (/\D/.test(value) && value !== '') return;

			newValue = value;
		}

		setValues({
			...values,
			...{ [name]: newValue }
		});
	};

	const handleTopicClick = e => {
		const { topics: topicsName } = e.currentTarget.dataset;

		e.preventDefault();

		setTopics({
			...topics,
			...{ [topicsName]: !topics[topicsName] }
		});
	};

	const switchTestPart = () => {
		const value = !values.testPart ? 1 : 0;

		setValues({
			...values,
			...{
				testPart: !values.testPart,
				count1: value,
				count2: value,
				count3: value,
				count4: value,
				count5: value,
				count6: value,
				count7: value,
				count8: value,
				count9: value,
				count10: value,
				count11: value,
				count12: value
			}
		});
	};

	const switchDetailedPart = () => {
		const value = !values.detailedPart ? 1 : 0;

		setValues({
			...values,
			...{
				detailedPart: !values.detailedPart,
				count13: value,
				count14: value,
				count15: value,
				count16: value,
				count17: value,
				count18: value,
				count19: value
			}
		});
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

						<div className="ConstructorForm-Row ConstructorForm-Row_label">
							<div className="ConstructorForm-Topic">
								Тестовая часть
							</div>
						</div>
						<div className="ConstructorForm-MainContent">
							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count1"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics1"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											1.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Простейшие текстовые задачи
											</u>
										</div>
									</div>

									{topics.subtopics1 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic11"
														value={
															values.subtopic11
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Вычисления&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=174"
														className="Link Link_black"
													>
														24 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic12"
														value={
															values.subtopic12
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Округление
													с недостатком&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=1"
														className="Link Link_black"
													>
														8 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic13"
														value={
															values.subtopic13
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Округление
													с избытком&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=2"
														className="Link Link_black"
													>
														21 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic14"
														value={
															values.subtopic14
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Проценты&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=249"
														className="Link Link_black"
													>
														24 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic15"
														value={
															values.subtopic15
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Проценты
													и округление&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=5"
														className="Link Link_black"
													>
														9 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count2"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics2"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											2.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Чтение графиков и диаграмм
											</u>
										</div>
									</div>

									{topics.subtopics2 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic21"
														value={
															values.subtopic21
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Определение величины
													по графику&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=6"
														className="Link Link_black"
													>
														25 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic22"
														value={
															values.subtopic22
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Определение величины
													по диаграмме&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=8"
														className="Link Link_black"
													>
														18 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic13"
														value={
															values.subtopic13
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Вычисление величин
													по графику или
													диаграмме&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=7"
														className="Link Link_black"
													>
														10 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count3"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics3"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											3.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Квадратная решетка, координатная
												плоскость
											</u>
										</div>
									</div>

									{topics.subtopics3 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic31"
														value={
															values.subtopic31
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Многоугольники: вычисление
													длин и углов&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=252"
														className="Link Link_black"
													>
														28 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic32"
														value={
															values.subtopic32
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Многоугольники: вычисление
													площадей&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=190"
														className="Link Link_black"
													>
														53 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic33"
														value={
															values.subtopic33
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Круг и его
													элементы&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=123"
														className="Link Link_black"
													>
														13 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic34"
														value={
															values.subtopic34
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Координатная
													плоскость&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=181"
														className="Link Link_black"
													>
														25 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count4"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics4"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											4.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Начала теории вероятностей.
												И текст, который добавлен
												специально для&nbsp;примера,
												чтобы показать, что верстка
												не ломается с длинной-длинной
												темой&nbsp;задания
											</u>
										</div>
									</div>

									{topics.subtopics4 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic41"
														value={
															values.subtopic41
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Классическое определение
													вероятности&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=166"
														className="Link Link_black"
													>
														51 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic42"
														value={
															values.subtopic42
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Теоремы о вероятностях
													событий&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=185"
														className="Link Link_black"
													>
														34 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count5"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics5"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											5.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Простейшие уравнения
											</u>
										</div>
									</div>

									{topics.subtopics5 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic51"
														value={
															values.subtopic51
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Линейные, квадратные,
													кубические
													уравнения&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=14"
														className="Link Link_black"
													>
														10 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic52"
														value={
															values.subtopic52
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Рациональные
													уравнения&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=9"
														className="Link Link_black"
													>
														13 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic53"
														value={
															values.subtopic53
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Иррациональные
													уравнения&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=10"
														className="Link Link_black"
													>
														15 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic54"
														value={
															values.subtopic54
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Показательные
													уравнения&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=11"
														className="Link Link_black"
													>
														17 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic55"
														value={
															values.subtopic55
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Логарифмические
													уравнения&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=12"
														className="Link Link_black"
													>
														16 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic56"
														value={
															values.subtopic56
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Тригонометрические
													уравнения&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=13"
														className="Link Link_black"
													>
														3 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count6"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics6"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											6.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Планиметрия
											</u>
										</div>
									</div>

									{topics.subtopics6 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic61"
														value={
															values.subtopic61
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Решение прямоугольного
													треугольника&nbsp;·&nbsp;
													<a
														href="https://math-ege.sdamgia.ru/test?theme=79"
														className="Link Link_black"
													>
														48 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic62"
														value={
															values.subtopic62
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Решение равнобедренного
													треугольника&nbsp;·&nbsp;
													<a
														href="https://math-ege.sdamgia.ru/test?theme=79"
														className="Link Link_black"
													>
														45 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic63"
														value={
															values.subtopic63
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Треугольники общего
													вида&nbsp;·&nbsp;
													<a
														href="https://math-ege.sdamgia.ru/test?theme=79"
														className="Link Link_black"
													>
														27 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic64"
														value={
															values.subtopic64
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Параллелограммы&nbsp;·&nbsp;
													<a
														href="https://math-ege.sdamgia.ru/test?theme=79"
														className="Link Link_black"
													>
														34 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic65"
														value={
															values.subtopic65
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Трапеция&nbsp;·&nbsp;
													<a
														href="https://math-ege.sdamgia.ru/test?theme=79"
														className="Link Link_black"
													>
														25 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic66"
														value={
															values.subtopic66
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Центральные и вписанные
													углы&nbsp;·&nbsp;
													<a
														href="https://math-ege.sdamgia.ru/test?theme=79"
														className="Link Link_black"
													>
														12 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic67"
														value={
															values.subtopic67
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Касательная, хорда,
													секущая&nbsp;·&nbsp;
													<a
														href="https://math-ege.sdamgia.ru/test?theme=79"
														className="Link Link_black"
													>
														11 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic68"
														value={
															values.subtopic68
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Вписанные
													окружности&nbsp;·&nbsp;
													<a
														href="https://math-ege.sdamgia.ru/test?theme=79"
														className="Link Link_black"
													>
														24 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic69"
														value={
															values.subtopic69
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Описанные
													окружности&nbsp;·&nbsp;
													<a
														href="https://math-ege.sdamgia.ru/test?theme=79"
														className="Link Link_black"
													>
														29 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count7"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics7"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											7.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Производная и первообразная
											</u>
										</div>
									</div>

									{topics.subtopics7 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic71"
														value={
															values.subtopic71
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Физический смысл
													производной&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=69"
														className="Link Link_black"
													>
														6 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic82"
														value={
															values.subtopic82
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Геометрический смысл
													производной,
													касательная&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=68"
														className="Link Link_black"
													>
														24 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic73"
														value={
															values.subtopic73
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Применение производной
													к исследованию
													функций&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=70"
														className="Link Link_black"
													>
														25 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic54"
														value={
															values.subtopic54
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Первообразная&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=183"
														className="Link Link_black"
													>
														5 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count8"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics8"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											8.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Стереометрия
											</u>
										</div>
									</div>

									{topics.subtopics8 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic81"
														value={
															values.subtopic81
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Куб&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=192"
														className="Link Link_black"
													>
														12 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic82"
														value={
															values.subtopic82
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Прямоугольный
													параллелепипед&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=193"
														className="Link Link_black"
													>
														29 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic83"
														value={
															values.subtopic83
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Элементы составных
													многогранников&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=180"
														className="Link Link_black"
													>
														15 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic84"
														value={
															values.subtopic84
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Площадь поверхности
													составного
													многогранника&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=148"
														className="Link Link_black"
													>
														17 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic85"
														value={
															values.subtopic85
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Объем составного
													многогранника&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=140"
														className="Link Link_black"
													>
														17 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic86"
														value={
															values.subtopic86
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Призма&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=178"
														className="Link Link_black"
													>
														51 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic87"
														value={
															values.subtopic87
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Пирамида&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=177"
														className="Link Link_black"
													>
														65 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic88"
														value={
															values.subtopic88
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Комбинации тел&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=197"
														className="Link Link_black"
													>
														37 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic89"
														value={
															values.subtopic89
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Цилиндр&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=194"
														className="Link Link_black"
													>
														18 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic810"
														value={
															values.subtopic810
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Конус&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=144"
														className="Link Link_black"
													>
														29 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic811"
														value={
															values.subtopic811
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Шар&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=151"
														className="Link Link_black"
													>
														8 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count9"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics9"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											9.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Вычисления и преобразования
											</u>
										</div>
									</div>

									{topics.subtopics9 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic91"
														value={
															values.subtopic91
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Преобразования числовых
													рациональных
													выражений&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=55"
														className="Link Link_black"
													>
														6 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic92"
														value={
															values.subtopic92
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Преобразования
													алгебраических выражений
													и дробей&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=60"
														className="Link Link_black"
													>
														23 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic93"
														value={
															values.subtopic93
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Преобразования числовых
													иррациональных
													выражений&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=56"
														className="Link Link_black"
													>
														17 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic94"
														value={
															values.subtopic94
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Преобразования буквенных
													иррациональных
													выражений&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=61"
														className="Link Link_black"
													>
														11 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic95"
														value={
															values.subtopic95
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Вычисление значений
													степенных
													выражений&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=57"
														className="Link Link_black"
													>
														18 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic96"
														value={
															values.subtopic96
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Действия со
													степенями&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=62"
														className="Link Link_black"
													>
														30 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic97"
														value={
															values.subtopic97
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Преобразования числовых
													логарифмических
													выражений&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=58"
														className="Link Link_black"
													>
														32 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic98"
														value={
															values.subtopic98
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Преобразования буквенных
													логарифмических
													выражений&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=63"
														className="Link Link_black"
													>
														4 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic99"
														value={
															values.subtopic99
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Вычисление значений
													тригонометрических
													выражений&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=65"
														className="Link Link_black"
													>
														29 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic910"
														value={
															values.subtopic910
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Преобразования числовых
													тригонометрических
													выражений&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=59"
														className="Link Link_black"
													>
														38 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic911"
														value={
															values.subtopic911
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Преобразования буквенных
													тригонометрических
													выражений&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=64"
														className="Link Link_black"
													>
														3 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count10"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics10"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											10.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Задачи с прикладным содержанием
											</u>
										</div>
									</div>

									{topics.subtopics10 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic101"
														value={
															values.subtopic101
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Линейные уравнения
													и неравенства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=71"
														className="Link Link_black"
													>
														3 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic102"
														value={
															values.subtopic102
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Квадратные и степенные
													уравнения
													и неравенства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=72"
														className="Link Link_black"
													>
														15 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic103"
														value={
															values.subtopic103
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Рациональные уравнения
													и неравенства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=76"
														className="Link Link_black"
													>
														13 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic104"
														value={
															values.subtopic104
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Иррациональные уравнения
													и неравенства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=77"
														className="Link Link_black"
													>
														10 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic105"
														value={
															values.subtopic105
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Показательные уравнения
													и неравенства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=73"
														className="Link Link_black"
													>
														7 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic106"
														value={
															values.subtopic106
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Логарифмические уравнения
													и неравенства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=74"
														className="Link Link_black"
													>
														4 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic107"
														value={
															values.subtopic107
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Тригонометрические уравнения
													и неравенства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=75"
														className="Link Link_black"
													>
														16 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic108"
														value={
															values.subtopic108
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Разные задачи&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=184"
														className="Link Link_black"
													>
														6 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count11"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics11"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											11.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Текстовые задачи
											</u>
										</div>
									</div>

									{topics.subtopics11 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic111"
														value={
															values.subtopic111
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Задачи на проценты, сплавы
													и смеси&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=88"
														className="Link Link_black"
													>
														16 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic112"
														value={
															values.subtopic112
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Задачи на движение
													по прямой&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=84"
														className="Link Link_black"
													>
														28 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic113"
														value={
															values.subtopic113
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Задачи на движение
													по окружности&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=85"
														className="Link Link_black"
													>
														5 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic114"
														value={
															values.subtopic114
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Задачи на движение
													по воде&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=86"
														className="Link Link_black"
													>
														14 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic115"
														value={
															values.subtopic115
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Задачи на совместную
													работу&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=87"
														className="Link Link_black"
													>
														24 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic116"
														value={
															values.subtopic116
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Задачи
													на прогрессии&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=89"
														className="Link Link_black"
													>
														9 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count12"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics12"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											12.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Наибольшее и наименьшее значение
												функций
											</u>
										</div>
									</div>

									{topics.subtopics12 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic121"
														value={
															values.subtopic121
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Исследование степенных
													и иррациональных
													функций&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=81"
														className="Link Link_black"
													>
														55 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic122"
														value={
															values.subtopic122
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Исследование
													частных&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=83"
														className="Link Link_black"
													>
														11 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic123"
														value={
															values.subtopic123
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Исследование
													произведений&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=82"
														className="Link Link_black"
													>
														29 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic124"
														value={
															values.subtopic124
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Исследование показательных
													и логарифмических
													функций&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=80"
														className="Link Link_black"
													>
														23 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic125"
														value={
															values.subtopic125
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Исследование
													тригонометрических
													функций&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=78"
														className="Link Link_black"
													>
														28 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic126"
														value={
															values.subtopic126
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Исследование функций
													без&nbsp;помощи
													производной&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=175"
														className="Link Link_black"
													>
														16 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row ConstructorForm-Row_label">
								<div className="ConstructorForm-Topic">
									Развернутая часть
								</div>
							</div>
							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count13"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics13"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											13.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Уравнения
											</u>
										</div>
									</div>

									{topics.subtopics13 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic131"
														value={
															values.subtopic131
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Иррациональные
													уравнения&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=275"
														className="Link Link_black"
													>
														9 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic132"
														value={
															values.subtopic132
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Рациональные
													уравнения&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=290"
														className="Link Link_black"
													>
														3 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic133"
														value={
															values.subtopic133
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Тригонометрические
													уравнения, разложение
													на множители&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=291"
														className="Link Link_black"
													>
														25 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic134"
														value={
															values.subtopic134
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Логарифмические
													и показательные
													уравнения&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=186"
														className="Link Link_black"
													>
														11 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic135"
														value={
															values.subtopic135
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Тригонометрические
													уравнения&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=167"
														className="Link Link_black"
													>
														35 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic136"
														value={
															values.subtopic136
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Тригонометрические
													уравнения,
													исследование&nbsp;ОДЗ&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=202"
														className="Link Link_black"
													>
														30 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic137"
														value={
															values.subtopic137
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Уравнения
													смешанного&nbsp;типа&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=201"
														className="Link Link_black"
													>
														22 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count14"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics14"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											14.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Стереометрическая задача
											</u>
										</div>
									</div>

									{topics.subtopics14 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic141"
														value={
															values.subtopic141
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Расстояние между прямыми
													и плоскостями&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=280"
														className="Link Link_black"
													>
														9 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic142"
														value={
															values.subtopic142
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Расстояние от точки
													до прямой
													и до плоскости&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=281"
														className="Link Link_black"
													>
														11 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic143"
														value={
															values.subtopic143
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Сечения
													многогранников&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=282"
														className="Link Link_black"
													>
														27 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic144"
														value={
															values.subtopic144
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Угол
													между&nbsp;плоскостями&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=283"
														className="Link Link_black"
													>
														19 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic145"
														value={
															values.subtopic145
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Угол между прямой
													и плоскостью&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=284"
														className="Link Link_black"
													>
														15 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic146"
														value={
															values.subtopic146
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Угол между скрещивающимися
													прямыми&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=285"
														className="Link Link_black"
													>
														12 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic147"
														value={
															values.subtopic147
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Объемы
													многогранников&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=257"
														className="Link Link_black"
													>
														19 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic148"
														value={
															values.subtopic148
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Круглые тела: цилиндр,
													конус,&nbsp;шар&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=206"
														className="Link Link_black"
													>
														19 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count15"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics15"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											15.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Неравенства
											</u>
										</div>
									</div>

									{topics.subtopics15 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic151"
														value={
															values.subtopic151
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Рациональные
													неравенства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=242"
														className="Link Link_black"
													>
														28 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic152"
														value={
															values.subtopic152
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Неравенства, содержащие
													радикалы&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=243"
														className="Link Link_black"
													>
														8 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic153"
														value={
															values.subtopic153
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Показательные
													неравенства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=237"
														className="Link Link_black"
													>
														102 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic154"
														value={
															values.subtopic154
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Логарифмические
													неравенства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=238"
														className="Link Link_black"
													>
														76 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic155"
														value={
															values.subtopic155
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Неравенства с логарифмами
													по переменному
													основанию&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=239"
														className="Link Link_black"
													>
														80 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic156"
														value={
															values.subtopic156
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Неравенства
													с модулем&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=244"
														className="Link Link_black"
													>
														14 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic157"
														value={
															values.subtopic157
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Смешанные
													неравенства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=201"
														className="Link Link_black"
													>
														56 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count16"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics16"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											16.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Планиметрическая задача
											</u>
										</div>
									</div>

									{topics.subtopics16 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic161"
														value={
															values.subtopic161
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Многоугольники
													и их свойства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=276"
														className="Link Link_black"
													>
														52 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic162"
														value={
															values.subtopic162
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Окружности и системы
													окружностей&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=277"
														className="Link Link_black"
													>
														14 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic163"
														value={
															values.subtopic163
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Окружности
													и треугольники&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=278"
														className="Link Link_black"
													>
														35 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic164"
														value={
															values.subtopic164
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Окружности
													и четырёхугольники&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=279"
														className="Link Link_black"
													>
														38 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count17"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics17"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											17.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Финансовая математика
											</u>
										</div>
									</div>

									{topics.subtopics17 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic171"
														value={
															values.subtopic171
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Задачи на оптимальный
													выбор&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=276"
														className="Link Link_black"
													>
														51 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic172"
														value={
															values.subtopic172
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Банки,
													вклады,&nbsp;кредиты&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=277"
														className="Link Link_black"
													>
														114 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count18"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics18"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											18.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Задача с параметром
											</u>
										</div>
									</div>

									{topics.subtopics18 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic181"
														value={
															values.subtopic181
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Комбинация
													«кривых»&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=268"
														className="Link Link_black"
													>
														10 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic182"
														value={
															values.subtopic182
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Комбинация
													прямых&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=267"
														className="Link Link_black"
													>
														8 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic183"
														value={
															values.subtopic183
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Координаты (x,
													a)&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=271"
														className="Link Link_black"
													>
														14 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic184"
														value={
															values.subtopic184
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Кусочное построение графика
													функции&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=272"
														className="Link Link_black"
													>
														9 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic185"
														value={
															values.subtopic185
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Левая и правая части
													в качестве отдельных
													графиков&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=265"
														className="Link Link_black"
													>
														11 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic186"
														value={
															values.subtopic186
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Перебор случаев&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=274"
														className="Link Link_black"
													>
														50 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic187"
														value={
															values.subtopic187
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Подвижная
													галочка&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=270"
														className="Link Link_black"
													>
														4 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic188"
														value={
															values.subtopic188
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Расстояние
													между&nbsp;точками&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=269"
														className="Link Link_black"
													>
														7 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic189"
														value={
															values.subtopic189
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Симметрия
													в решениях&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=273"
														className="Link Link_black"
													>
														15 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic1810"
														value={
															values.subtopic1810
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Уравнение
													окружности&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=266"
														className="Link Link_black"
													>
														24 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic1811"
														value={
															values.subtopic1811
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Функции, зависящие
													от параметра&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme235"
														className="Link Link_black"
													>
														14 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic1812"
														value={
															values.subtopic1812
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Уравнения
													с параметром&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=171"
														className="Link Link_black"
													>
														20 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic1813"
														value={
															values.subtopic1813
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Расположение корней
													квадратного
													трехчлена&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=207"
														className="Link Link_black"
													>
														8 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic1814"
														value={
															values.subtopic1814
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Использование симметрий,
													оценок,
													монотонности&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=208"
														className="Link Link_black"
													>
														27 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									className="ConstructorForm-Counter"
									name="count19"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<div
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-topics="subtopics19"
										onClick={handleTopicClick}
									>
										<div className="ConstructorForm-TopicNumber">
											19.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Числа и их свойства
											</u>
										</div>
									</div>

									{topics.subtopics19 && (
										<div className="ConstructorForm-TopicSubs">
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic191"
														value={
															values.subtopic191
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Числа
													и их свойства&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=172"
														className="Link Link_black"
													>
														70 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic192"
														value={
															values.subtopic192
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Числовые наборы на карточках
													и досках&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=217"
														className="Link Link_black"
													>
														33 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic193"
														value={
															values.subtopic193
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Последовательности
													и прогрессии&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=209"
														className="Link Link_black"
													>
														43 шт.
													</a>
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
														fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
														name="subtopic194"
														value={
															values.subtopic194
														}
														onChange={
															handleInputChange
														}
													/>
												</div>
												<div className="ConstructorForm-TopicDesc">
													Сюжетные задачи: кино,
													театр,
													мотки&nbsp;верёвки&nbsp;·&nbsp;
													<a
														href="https://ege.sdamgia.ru/test?theme=210"
														className="Link Link_black"
													>
														51 шт.
													</a>
												</div>
											</label>
										</div>
									)}
								</div>
							</div>
						</div>

						<div className="ConstructorForm-ExtraContent">
							<div className="ConstructorForm-Row ConstructorForm-Row_label">
								<div
									className="Link Link_pseudo Link_wrap ConstructorForm-Topic"
									data-topics="topicsExtra"
									onClick={handleTopicClick}
								>
									<u className="Link-U Link_pseudo-U Link_wrap-U">
										Задания, не входящие в ЕГЭ этого года
									</u>
								</div>
							</div>

							{topics.topicsExtra && (
								<div className="ConstructorForm-ExtraTopics">
									<div className="ConstructorForm-Row">
										<Counter
											className="ConstructorForm-Counter"
											name="extraCount1"
											values={values}
											decrement={decrement}
											increment={increment}
											handleInputChange={
												handleInputChange
											}
										/>
										<div className="ConstructorForm-Topic">
											<div
												className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
												data-topics="extraSubtopics1"
												onClick={handleTopicClick}
											>
												<div className="ConstructorForm-TopicNumber">
													Д1.
												</div>
												<div className="ConstructorForm-TopicDesc">
													<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
														Выбор оптимального
														варианта
													</u>
												</div>
											</div>

											{topics.extraSubtopics1 && (
												<div className="ConstructorForm-TopicSubs">
													<label className="Link_wrap ConstructorForm-TopicName Label">
														<div className="ConstructorForm-TopicNumber">
															<Checkbox
																fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
																name="extraSubtopic11"
																value={
																	values.extraSubtopic11
																}
																onChange={
																	handleInputChange
																}
															/>
														</div>
														<div className="ConstructorForm-TopicDesc">
															Выбор варианта
															из двух
															возможных&nbsp;·&nbsp;
															<a
																href="https://ege.sdamgia.ru/test?theme=54"
																className="Link Link_black"
															>
																5 шт.
															</a>
														</div>
													</label>

													<label className="Link_wrap ConstructorForm-TopicName Label">
														<div className="ConstructorForm-TopicNumber">
															<Checkbox
																fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
																name="extraSubtopic12"
																value={
																	values.extraSubtopic12
																}
																onChange={
																	handleInputChange
																}
															/>
														</div>
														<div className="ConstructorForm-TopicDesc">
															Выбор варианта
															из трех
															возможных&nbsp;·&nbsp;
															<a
																href="https://ege.sdamgia.ru/test?theme=53"
																className="Link Link_black"
															>
																25 шт.
															</a>
														</div>
													</label>

													<label className="Link_wrap ConstructorForm-TopicName Label">
														<div className="ConstructorForm-TopicNumber">
															<Checkbox
																fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
																name="extraSubtopic13"
																value={
																	values.extraSubtopic13
																}
																onChange={
																	handleInputChange
																}
															/>
														</div>
														<div className="ConstructorForm-TopicDesc">
															Выбор варианта
															из четырех
															возможных&nbsp;·&nbsp;
															<a
																href="https://ege.sdamgia.ru/test?theme=173"
																className="Link Link_black"
															>
																5 шт.
															</a>
														</div>
													</label>
												</div>
											)}
										</div>
									</div>
								</div>
							)}
						</div>
					</div>

					<div className="ConstructorForm-Buttons">
						<div className="ConstructorForm-ButtonsPanel">
							<input
								className="Button ConstructorForm-SubmitButton"
								type="submit"
								value={`Составить вариант ${values.totalTasksNumber}`}
							/>

							<div className="Switcher Switcher_vertical Switcher_checkbox ConstructorForm-Switcher">
								<label className="Label Switcher-Label Switcher_vertical-Label Switcher_checkbox-Label">
									<Checkbox
										className="Switcher-Input"
										fakeCheckboxClassName="FakeCheckbox_blue Switcher_checkbox-FakeCheckbox"
										name="testPart"
										value={values.testPart}
										onChange={switchTestPart}
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
										value={values.detailedPart}
										onChange={switchDetailedPart}
									/>
									<span className="Switcher-Text Switcher_checkbox-Text">
										Развернутая часть
									</span>
								</label>
							</div>

							<button className="Link Link_pseudo Link_wrap ConstructorForm-ResetButton">
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
