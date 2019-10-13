import React, { useState } from 'react';

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
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);
	const [count4, setCount4] = useState(0);
	const [count5, setCount5] = useState(0);
	const [count6, setCount6] = useState(0);
	const [count7, setCount7] = useState(0);
	const [count8, setCount8] = useState(0);
	const [count9, setCount9] = useState(0);
	const [count10, setCount10] = useState(0);
	const [count11, setCount11] = useState(0);
	const [count12, setCount12] = useState(0);
	const [count13, setCount13] = useState(0);
	const [count14, setCount14] = useState(0);
	const [count15, setCount15] = useState(0);
	const [count16, setCount16] = useState(0);
	const [count17, setCount17] = useState(0);
	const [count18, setCount18] = useState(0);
	const [count19, setCount19] = useState(0);
	const [extraCount1, setExtraCount1] = useState(0);

	const [values, setValues] = useState({
		subtopic11: true,
		subtopic12: true,
		subtopic13: true,
		subtopic14: true,
		subtopic15: true,
		subtopic21: true,
		subtopic22: true,
		subtopic23: true,
		subtopic31: true,
		subtopic32: true,
		subtopic33: true,
		subtopic34: true,
		subtopic41: true,
		subtopic42: true,
		subtopic51: true,
		subtopic52: true,
		subtopic53: true,
		subtopic54: true,
		subtopic55: true,
		subtopic56: true,
		subtopic61: true,
		subtopic62: true,
		subtopic63: true,
		subtopic64: true,
		subtopic65: true,
		subtopic66: true,
		subtopic67: true,
		subtopic68: true,
		subtopic69: true,
		subtopic71: true,
		subtopic72: true,
		subtopic73: true,
		subtopic74: true,
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
		subtopic101: true,
		subtopic102: true,
		subtopic103: true,
		subtopic104: true,
		subtopic105: true,
		subtopic106: true,
		subtopic107: true,
		subtopic108: true,
		subtopic111: true,
		subtopic112: true,
		subtopic113: true,
		subtopic114: true,
		subtopic115: true,
		subtopic116: true,
		subtopic121: true,
		subtopic122: true,
		subtopic123: true,
		subtopic124: true,
		subtopic125: true,
		subtopic126: true,
		subtopic131: true,
		subtopic132: true,
		subtopic133: true,
		subtopic134: true,
		subtopic135: true,
		subtopic136: true,
		subtopic137: true,
		subtopic141: true,
		subtopic142: true,
		subtopic143: true,
		subtopic144: true,
		subtopic145: true,
		subtopic146: true,
		subtopic147: true,
		subtopic148: true,
		subtopic151: true,
		subtopic152: true,
		subtopic153: true,
		subtopic154: true,
		subtopic155: true,
		subtopic156: true,
		subtopic157: true,
		subtopic161: true,
		subtopic162: true,
		subtopic163: true,
		subtopic164: true,
		subtopic171: true,
		subtopic172: true,
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
		subtopic191: true,
		subtopic192: true,
		subtopic193: true,
		subtopic194: true,
		extraSubtopic11: true,
		extraSubtopic12: true,
		extraSubtopic13: true
	});

	const [testPart, setTestPart] = useState(false);
	const [detailedPart, setDetailedPart] = useState(false);

	const switchOffTestPart = () => {
		setTestPart(false);
	};

	const switchOffDetailedPart = () => {
		setDetailedPart(false);
	};

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

	const [testTotal, setTestTotal] = useState({
		amount: 0,
		text: ''
	});

	const handleCheckboxChange = e => {
		const { name, checked: newValue } = e.target;

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
		const newValue = !testPart;
		const countValue = newValue ? 1 : 0;

		const willBeSaved = countValue === 1;

		setCount1(count1 > 1 && willBeSaved ? count1 : countValue);
		setCount2(count2 > 1 && willBeSaved ? count2 : countValue);
		setCount3(count3 > 1 && willBeSaved ? count3 : countValue);
		setCount4(count4 > 1 && willBeSaved ? count4 : countValue);
		setCount5(count5 > 1 && willBeSaved ? count5 : countValue);
		setCount6(count6 > 1 && willBeSaved ? count6 : countValue);
		setCount7(count7 > 1 && willBeSaved ? count7 : countValue);
		setCount8(count8 > 1 && willBeSaved ? count8 : countValue);
		setCount9(count9 > 1 && willBeSaved ? count9 : countValue);
		setCount10(count10 > 1 && willBeSaved ? count10 : countValue);
		setCount11(count11 > 1 && willBeSaved ? count11 : countValue);
		setCount12(count12 > 1 && willBeSaved ? count12 : countValue);

		setTestPart(newValue);
	};

	const switchDetailedPart = () => {
		const newValue = !detailedPart;
		const countValue = newValue ? 1 : 0;

		const willBeSaved = countValue === 1;

		setCount13(count13 > 1 && willBeSaved ? count13 : countValue);
		setCount14(count14 > 1 && willBeSaved ? count14 : countValue);
		setCount15(count15 > 1 && willBeSaved ? count15 : countValue);
		setCount16(count16 > 1 && willBeSaved ? count16 : countValue);
		setCount17(count17 > 1 && willBeSaved ? count17 : countValue);
		setCount18(count18 > 1 && willBeSaved ? count18 : countValue);
		setCount19(count19 > 1 && willBeSaved ? count19 : countValue);

		setDetailedPart(newValue);
	};

	const handleResetClick = e => {
		e.preventDefault();

		setCount1(0);
		setCount2(0);
		setCount3(0);
		setCount4(0);
		setCount5(0);
		setCount6(0);
		setCount7(0);
		setCount8(0);
		setCount9(0);
		setCount10(0);
		setCount11(0);
		setCount12(0);

		setCount13(0);
		setCount14(0);
		setCount15(0);
		setCount16(0);
		setCount17(0);
		setCount18(0);
		setCount19(0);

		switchOffTestPart();
		switchOffDetailedPart();
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
									value={count1}
									setValue={setCount1}
									switchOffPart={switchOffTestPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count2}
									setValue={setCount2}
									switchOffPart={switchOffTestPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count3}
									setValue={setCount3}
									switchOffPart={switchOffTestPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count4}
									setValue={setCount4}
									switchOffPart={switchOffTestPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count5}
									setValue={setCount5}
									switchOffPart={switchOffTestPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count6}
									setValue={setCount6}
									switchOffPart={switchOffTestPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count7}
									setValue={setCount7}
									switchOffPart={switchOffTestPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count8}
									setValue={setCount8}
									switchOffPart={switchOffTestPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count9}
									setValue={setCount9}
									switchOffPart={switchOffTestPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count10}
									setValue={setCount10}
									switchOffPart={switchOffTestPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count11}
									setValue={setCount11}
									switchOffPart={switchOffTestPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count12}
									setValue={setCount12}
									switchOffPart={switchOffTestPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count13}
									setValue={setCount13}
									switchOffPart={switchOffDetailedPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count14}
									setValue={setCount14}
									switchOffPart={switchOffDetailedPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count15}
									setValue={setCount15}
									switchOffPart={switchOffDetailedPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count16}
									setValue={setCount16}
									switchOffPart={switchOffDetailedPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count17}
									setValue={setCount17}
									switchOffPart={switchOffDetailedPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count18}
									setValue={setCount18}
									switchOffPart={switchOffDetailedPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
									value={count19}
									setValue={setCount19}
									switchOffPart={switchOffDetailedPart}
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
															handleCheckboxChange
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
											value={extraCount1}
											setValue={setExtraCount1}
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
																	handleCheckboxChange
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
																	handleCheckboxChange
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
																	handleCheckboxChange
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
								value={`Составить вариант ${testTotal.text}`}
							/>

							<div className="Switcher Switcher_vertical Switcher_checkbox ConstructorForm-Switcher">
								<label className="Label Switcher-Label Switcher_vertical-Label Switcher_checkbox-Label">
									<Checkbox
										className="Switcher-Input"
										fakeCheckboxClassName="FakeCheckbox_blue Switcher_checkbox-FakeCheckbox"
										name="testPart"
										value={testPart}
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
										value={detailedPart}
										onChange={switchDetailedPart}
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
