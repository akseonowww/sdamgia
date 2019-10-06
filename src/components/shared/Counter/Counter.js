import React from 'react';

import './Counter.css';

const Counter = ({ name, values, decrement, increment, handleInputChange }) => {
	return (
		<div className="Counter">
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
				onInput={handleInputChange}
			/>
			<button class="CounterButton" data-input={name} onClick={increment}>
				+
			</button>
		</div>
	);
};

export default Counter;
