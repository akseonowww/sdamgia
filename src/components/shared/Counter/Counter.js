import React, { useRef } from 'react';

import nahStep from '../Form/nahStep';
import './Counter.css';

const useCounter = (
	value,
	list,
	index,
	setValue,
	countInput,
	switchOffPart
) => {
	const handleCounterInputFocus = () => {
		countInput.current.setSelectionRange(0, 9999);
	};

	const handleCounterInputChange = e => {
		const { value: newValue } = e.target;

		// allow only number in counter input and show nah amination
		if (/\D/.test(newValue) && newValue !== '') {
			countInput.current.style.left = 0;
			let x = 0,
				m = 0,
				nahStepTimeOut;

			nahStep(countInput.current, m, x, nahStepTimeOut);

			return;
		}

		list[index] = { ...list[index], value: newValue };
		setValue(list);

		if (!newValue) switchOffPart();
	};

	const decrement = e => {
		e.preventDefault();

		let newValue = Number(value);

		if (value > 0) {
			newValue = newValue - 1;
		}

		list[index] = { ...list[index], value: newValue };
		setValue(list);

		if (!newValue) switchOffPart();
	};

	const increment = e => {
		e.preventDefault();

		const newValue = Number(value) + 1;

		list[index] = { ...list[index], value: newValue };
		setValue(list);

		if (!newValue) switchOffPart();
	};

	return {
		handleCounterInputFocus,
		handleCounterInputChange,
		increment,
		decrement
	};
};

const Counter = ({
	className,
	name,
	value,
	list,
	index,
	setValue,
	switchOffPart
}) => {
	const countInput = useRef(null);
	const {
		handleCounterInputFocus,
		handleCounterInputChange,
		increment,
		decrement
	} = useCounter(value, list, index, setValue, countInput, switchOffPart);

	return (
		<div className={`Counter ${className}`}>
			<button
				className={
					'Counter-Button ' +
					// eslint-disable-next-line
					(value == 0 && 'Counter-Button_disabled')
				}
				onClick={decrement}
			>
				−
			</button>
			<input
				className="Counter-Input Input"
				type="tel"
				name={name}
				value={value}
				ref={countInput}
				onClick={handleCounterInputFocus}
				onChange={handleCounterInputChange}
				style={{ left: 0 }}
			/>
			<button className="Counter-Button" onClick={increment}>
				+
			</button>
			<span className="Counter-Caption">шт.</span>
		</div>
	);
};

export default Counter;
