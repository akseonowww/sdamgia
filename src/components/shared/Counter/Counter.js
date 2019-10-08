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
					'Counter-Button ' +
					(values[name] == 0 && 'Counter-Button_disabled')
				}
				data-input={name}
				onClick={decrement}
			>
				−
			</button>
			<input
				className="Counter-Input Input"
				type="text"
				name={name}
				value={values[name]}
				ref={countInput}
				onClick={handleInputFocus}
				onChange={handleInputChange}
			/>
			<button className="Counter-Button" data-input={name} onClick={increment}>
				+
			</button>
			<span className="Counter-Caption">шт.</span>
		</div>
	);
};

export default Counter;
