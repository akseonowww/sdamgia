import React from 'react';
import cx from 'classnames';

import '../Input/Input.scss';
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
				className={cx('Checkbox', className)}
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
