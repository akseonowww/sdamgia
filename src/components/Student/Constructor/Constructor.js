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

const useCounter = (initial = { count1: 0, count2: 0 }) => {
	const [values, setValues] = useState(initial);

	const decrement = e => {
		const { input } = e.target.dataset;
		let newValue = Number(values[input]);

		e.preventDefault();

		if (values[input] > 0) {
			newValue = newValue - 1;
		}

		setValues({
			...values,
			...{ [input]: newValue }
		});
	};

	const increment = e => {
		const { input } = e.target.dataset;
		let newValue = Number(values[input]) + 1;

		e.preventDefault();

		setValues({
			...values,
			...{ [input]: newValue }
		});
	};

	return { values, setValues, increment, decrement };
};

const Constructor = () => {
	const { values, setValues, increment, decrement } = useCounter({
		testPart: false,
		count1: 0,
		count2: 0,
		count3: 0,
		count4: 0,
		count5: 0,
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
		count8: 0,
		count9: 0,
		count10: 0,
		count11: 0,
		count12: 0,
		detailedPart: false,
		count13: 0,
		count14: 0,
		count15: 0,
		count16: 0,
		count17: 0,
		count18: 0,
		count19: 0
	});
	const [subtopics, setSubtopics] = useState({
		subtopics6: false
	});

	const handleInputChange = e => {
		const target = e.target;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		setValues({
			...values,
			...{ [name]: value }
		});
	};

	const handleTopicClick = e => {
		const { subtopics: subtopicsName } = e.currentTarget.dataset;

		e.preventDefault();

		setSubtopics({
			...subtopics,
			...{ [subtopicsName]: !subtopics[subtopicsName] }
		});
	};

	const switchTestPart = () => {
		const value = !values.testPart ? 1 : 0;

		setValues({
			...values,
			...{
				testPart: !values.testPart,
				count1: value,
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
									name="count1"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											1.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Простейшие текстовые задачи
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count2"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											2.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Чтение графиков и диаграмм
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count3"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											3.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Квадратная решетка, координатная
												плоскость
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count4"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											4.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Начала теории вероятностей
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count5"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											5.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Простейшие уравнения
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count6"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button
										className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
										data-subtopics="subtopics6"
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
									</button>

									{subtopics.subtopics6 && (
										<div
											className="ConstructorForm-TopicSubs"
											style={{ display: 'block' }}
										>
											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
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
													треугольника
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
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
													треугольника
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
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
													Треугольники общего вида
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
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
													Параллелограммы
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
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
													Задания тренировочных
													и диагностических работ
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
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
													Центральные и вписанные углы
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
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
													Касательная, хорда, секущая
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
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
													Вписанные окружности
												</div>
											</label>

											<label className="Link_wrap ConstructorForm-TopicName Label">
												<div className="ConstructorForm-TopicNumber">
													<Checkbox
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
													Описанные окружности
												</div>
											</label>
										</div>
									)}
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count7"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											7.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Производная и первообразная
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count8"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											8.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Стереометрия
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count9"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											9.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Вычисления и преобразования
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count10"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											10.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Задачи с прикладным содержанием
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count11"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											11.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Текстовые задачи
											</u>
										</div>
									</button>
									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count12"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											12.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Наибольшее и наименьшее значение
												функций
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row ConstructorForm-Row_label">
								<div className="ConstructorForm-Topic">
									Развернутая часть
								</div>
							</div>
							<div className="ConstructorForm-Row">
								<Counter
									name="count13"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											13.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Уравнения
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count14"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											14.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Стереометрическая задача
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count15"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											15.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Неравенства
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count16"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											16.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Планиметрическая задача
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count17"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											17.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Финансовая математика
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count18"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											18.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Задача с параметром
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<Counter
									name="count19"
									values={values}
									decrement={decrement}
									increment={increment}
									handleInputChange={handleInputChange}
								/>
								<div className="ConstructorForm-Topic">
									<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
										<div className="ConstructorForm-TopicNumber">
											19.
										</div>
										<div className="ConstructorForm-TopicDesc">
											<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
												Числа и их свойства
											</u>
										</div>
									</button>

									<div className="ConstructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>
						</div>

						<div className="ConstructorForm-ExtraContent">
							<div className="ConstructorForm-Row ConstructorForm-Row_label">
								<div className="ConstructorForm-Topic">
									<button class="Link Link_pseudo">
										Задания, не входящие в ЕГЭ этого года
									</button>
								</div>
							</div>
							<div className="ConstructorForm-ExtraTopics">
								<div className="ConstructorForm-Row">
									<div className="ConstructorForm-Counter">
										<button
											className={
												'ConstructorForm-CounterButton ' +
												(values.count1 == 0 &&
													'ConstructorForm-CounterButton_disabled')
											}
											data-input="count1"
											onClick={decrement}
										>
											−
										</button>
										<input
											className="ConstructorForm-CounterInput Input"
											type="text"
											name="count1"
											value={values.count1}
											onInput={handleInputChange}
										/>
										<button
											class="ConstructorForm-CounterButton"
											data-input="count1"
											onClick={increment}
										>
											+
										</button>
									</div>
									<div className="ConstructorForm-Topic">
										<button className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName">
											<div className="ConstructorForm-TopicNumber">
												Д1.
											</div>
											<div className="ConstructorForm-TopicDesc">
												<u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
													Выбор оптимального варианта
												</u>
											</div>
										</button>
										<div className="ConstructorForm-TopicSubs">
											Выбор варианта из двух возможных
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="ConstructorForm-Buttons">
						<div className="ConstructorForm-ButtonsPanel">
							<input
								className="Button ConstructorForm-SubmitButton"
								type="submit"
								value="Составить вариант"
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
								<span>
									×
								</span>
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
