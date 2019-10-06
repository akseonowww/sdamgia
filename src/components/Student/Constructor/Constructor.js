import React, { useState } from 'react';

import Section from '../../shared/Section';
import Grid from '../../shared/Grid';
import Title from '../../shared/Title';
import Counter from '../../shared/Counter/Counter';
import '../../shared/Input/Input.css';
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
							<div className="ConstructorForm-Topic">Тема</div>
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
						</div>
						<div className="ConstructorForm-ExtraContent">
							<div className="ConstructorForm-Row ConstructorForm-Row_extra">
								<div className="ConstructorForm-Topic">
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