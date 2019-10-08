import React, { useRef } from 'react';

import './Counter.css';

const Counter = ({ className, name, values, decrement, increment, handleInputChange }) => {
	const countInput = useRef(null);
	
	const handleInputFocus = () => {
		countInput.current.select();
	};

	return (
		<div className={`Counter ${className}`}>
			<button
				className={
					'CounterButton ' +
					(values[name] == 0 && 'CounterButton_disabled')
				}
				data-input={name}
				onClick={decrement}
			>
				−
			</button>
			<input
				className="CounterInput Input"
				type="text"
				name={name}
				value={values[name]}
				ref={countInput}
				onClick={handleInputFocus}
				onChange={handleInputChange}
			/>
			<button class="CounterButton" data-input={name} onClick={increment}>
				+
			</button>
		</div>
	);
};

export default Counter;
