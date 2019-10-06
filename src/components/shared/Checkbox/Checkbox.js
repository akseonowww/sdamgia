import React from 'react';

import '../Input/Input.css';
import './Checkbox.css';

const Checkbox = ({ name, value, onChange }) => {
	return (
		<>
			<input
				class="Checkbox"
				type="checkbox"
				name={name}
				checked={value}
				onChange={onChange}
			/>
			<span class="Input FakeCheckbox"></span>
		</>
	);
};

export default Checkbox;
