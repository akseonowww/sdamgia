import React, { useRef } from 'react';

import nahStep from '../Form/nahStep';
import { getNewTestTotalText } from '../ConstructorForm';
import { saveTopicsList, saveTestTotal } from '../../utils/constructor';
import '../Input/Input.scss';
import './Counter.scss';

const useCounter = (
	value,
	list,
	index,
	setValue,
	countInput,
	testTotal,
	setTestTotal,
	part,
	switchOnPart,
	switchOffPart
) => {
	const handleCounterInputFocus = () => {
		countInput.current.setSelectionRange(0, 9999);
	};

	const handleCounterInputChange = e => {
		const { value: newValue } = e.target;

		// allow only number in counter input and show nah amination
		if ((/\D/.test(newValue) && newValue !== '') || newValue > 999999) {
			countInput.current.style.left = 0;
			let x = 0,
				m = 0,
				nahStepTimeOut;

			nahStep(countInput.current, m, x, nahStepTimeOut);

			return;
		}

		const oldValue = list[index].value;
		list[index] = { ...list[index], value: newValue };
		setValue(list);
		saveTopicsList(list);

		const newTestTotalAmount = testTotal.amount + (newValue - oldValue);
		const newTestTotalText = getNewTestTotalText(newTestTotalAmount);
		const newTestTotal = {
			amount: newTestTotalAmount,
			text: newTestTotalText
		};
		setTestTotal(newTestTotal);
		saveTestTotal(newTestTotal);

		if (newValue) {
			for (let i = 0; i < list.length; i++) {
				if (list[i].part === part && list[i].value < 1) return;
			}
			switchOnPart(part);
		} else {
			switchOffPart(part);
		}
	};

	const decrement = e => {
		e.preventDefault();

		let newValue = Number(value);

		if (value > 0) {
			newValue = newValue - 1;
		}

		list[index] = { ...list[index], value: newValue };
		setValue(list);
		saveTopicsList(list);

		const newTestTotalAmount = testTotal.amount - 1;
		const newTestTotalText = getNewTestTotalText(newTestTotalAmount);
		const newTestTotal = {
			amount: newTestTotalAmount,
			text: newTestTotalText
		};
		setTestTotal(newTestTotal);
		saveTestTotal(newTestTotal);

		if (!newValue) switchOffPart(part);
	};

	const increment = e => {
		e.preventDefault();

		const newValue = Number(value) + 1;

		list[index] = { ...list[index], value: newValue };
		setValue(list);
		saveTopicsList(list);

		const newTestTotalAmount = testTotal.amount + 1;
		const newTestTotalText = getNewTestTotalText(newTestTotalAmount);
		const newTestTotal = {
			amount: newTestTotalAmount,
			text: newTestTotalText
		};
		setTestTotal(newTestTotal);
		saveTestTotal(newTestTotal);

		for (let i = 0; i < list.length; i++) {
			if (list[i].part === part && list[i].value < 1) return;
		}
		switchOnPart(part);
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
	testTotal,
	setTestTotal,
	part,
	switchOnPart,
	switchOffPart
}) => {
	const countInput = useRef(null);
	const {
		handleCounterInputFocus,
		handleCounterInputChange,
		increment,
		decrement
	} = useCounter(
		value,
		list,
		index,
		setValue,
		countInput,
		testTotal,
		setTestTotal,
		part,
		switchOnPart,
		switchOffPart
	);

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
				className="Input Counter-Input"
				type="tel"
				name={name}
				value={value}
				ref={countInput}
				onClick={handleCounterInputFocus}
				onChange={handleCounterInputChange}
				style={{ left: 0 }}
				tabIndex={index + 1}
			/>
			<button className="Counter-Button" onClick={increment}>
				+
			</button>
			<span className="Counter-Caption">шт.</span>
		</div>
	);
};

export default Counter;
