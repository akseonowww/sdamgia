import React, { useState } from 'react';

import Section from '../../shared/Section';
import Grid from '../../shared/Grid';
import Title from '../../shared/Title';
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
		count1: 0,
		count2: 0
	});

	const handleInputChange = e => {
		const { name: input, value } = e.target;

		setValues({
			...values,
			...{ [input]: value }
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
							<div className="CostructorForm-Topic">Тема</div>
						</div>
						<div className="ConstructorForm-MainContent">
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
								<div className="CostructorForm-Topic">
									<div className="CostructorForm-TopicName">
										<div className="CostructorForm-TopicNumber">
											1.&nbsp;
										</div>
										<div className="CostructorForm-TopicDesc">
											<button className="Link Link_pseudo Link_pseudo-black">
												Про­стей­шие текстовые задачи
											</button>
										</div>
									</div>
									<div className="CostructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>

							<div className="ConstructorForm-Row">
								<div className="ConstructorForm-Counter">
									<button
										className={
											'ConstructorForm-CounterButton ' +
											(values.count2 == 0 &&
												'ConstructorForm-CounterButton_disabled')
										}
										data-input="count2"
										onClick={decrement}
									>
										−
									</button>
									<input
										className="ConstructorForm-CounterInput Input"
										name="count2"
										type="text"
										value={values.count2}
										onInput={handleInputChange}
									/>
									<button
										class="ConstructorForm-CounterButton"
										data-input="count2"
										onClick={increment}
									>
										+
									</button>
								</div>
								<div className="CostructorForm-Topic">
									<div className="CostructorForm-TopicName">
										<div className="CostructorForm-TopicNumber">
											11.&nbsp;
										</div>
										<div className="CostructorForm-TopicDesc">
											<button className="Link Link_pseudo Link_pseudo-black">
												Текстовые задачи
											</button>
										</div>
									</div>
									<div className="CostructorForm-TopicSubs">
										Вычисления
									</div>
								</div>
							</div>
						</div>
						<div className="ConstructorForm-ExtraContent">
							<div className="ConstructorForm-Row ConstructorForm-Row_extra">
								<div className="CostructorForm-Topic">
									<button class="Link Link_pseudo Link_pseudo-black">
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
									<div className="CostructorForm-Topic">
										<div className="CostructorForm-TopicName">
											<div className="CostructorForm-TopicNumber">
												Д1.&nbsp;
											</div>
											<div className="CostructorForm-TopicDesc">
												<button className="Link Link_pseudo Link_pseudo-black">
													Выбор оптимального варианта
												</button>
											</div>
										</div>
										<div className="CostructorForm-TopicSubs">
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
								className="Button"
								type="submit"
								value="Составить вариант"
							/>
						</div>
					</div>
				</Grid>
			</form>
		</Section>
	);
};

export default Constructor;
