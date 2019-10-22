import React from 'react';

import '../Input/Input.css';
import './Checkbox.scss';

const Checkbox = ({
	className,
	fakeCheckboxClassName,
	name,
	value,
	onChange
}) => {
	return (
		<>
			<input
				className={`Checkbox ${className}`}
				type="checkbox"
				name={name}
				checked={value}
				onChange={onChange}
			/>
			<span
				className={`Input FakeCheckbox ${fakeCheckboxClassName}`}
			></span>
		</>
	);
};

export default Checkbox;
