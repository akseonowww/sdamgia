import React, { useState, useRef } from 'react';

import './Counter.css';

export const useCounter = (initial = { count1: 0, count2: 0 }) => {
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

		let newTotalTasksNumber = 'из 9 заданий';
		if (input === 'count19') {
			newTotalTasksNumber = 'из 10 заданий';
		}

		setValues({
			...values,
			...{ totalTasksNumber: newTotalTasksNumber, [input]: newValue }
		});
	};

	return { values, setValues, increment, decrement };
};

const Counter = ({
	className,
	name,
	values,
	decrement,
	increment,
	handleInputChange
}) => {
	const countInput = useRef(null);

	const handleInputFocus = () => {
		countInput.current.setSelectionRange(0, 9999);
	};

	return (
		<div className={`Counter ${className}`}>
			<button
				className={
					'Counter-Button ' +
					// eslint-disable-next-line
					(values[name] == 0 && 'Counter-Button_disabled')
				}
				data-input={name}
				onClick={decrement}
			>
				−
			</button>
			<input
				className="Counter-Input Input"
				type="tel"
				name={name}
				value={values[name]}
				ref={countInput}
				onClick={handleInputFocus}
				onChange={handleInputChange}
			/>
			<button
				className="Counter-Button"
				data-input={name}
				onClick={increment}
			>
				+
			</button>
			<span className="Counter-Caption">шт.</span>
		</div>
	);
};

export default Counter;
