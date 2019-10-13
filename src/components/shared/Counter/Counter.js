import React, { useRef } from 'react';

import './Counter.css';

const useCounter = (value, setValue, countInput) => {
	const handleCounterInputFocus = () => {
		countInput.current.setSelectionRange(0, 9999);
	};

	const handleCounterInputChange = e => {
		const { value: newValue } = e.target;

		// allow only number in counter input
		if (/\D/.test(newValue) && newValue !== '') return;

		setValue(newValue);
	};

	const decrement = e => {
		e.preventDefault();

		let newValue = Number(value);

		if (value > 0) {
			newValue = newValue - 1;
		}

		setValue(newValue);
	};

	const increment = e => {
		e.preventDefault();

		const newValue = Number(value) + 1;

		setValue(newValue);
	};

	return {
		handleCounterInputFocus,
		handleCounterInputChange,
		increment,
		decrement
	};
};

const Counter = ({ className, name, value, setValue }) => {
	const countInput = useRef(null);
	const {
		handleCounterInputFocus,
		handleCounterInputChange,
		increment,
		decrement
	} = useCounter(value, setValue, countInput);

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
			/>
			<button
				className="Counter-Button"
				onClick={increment}
			>
				+
			</button>
			<span className="Counter-Caption">шт.</span>
		</div>
	);
};

export default Counter;
