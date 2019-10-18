import React from 'react';

import Checkbox from '../../../shared/Checkbox';
import '../../../shared/Switcher/Switcher.css';
import '../../../shared/Switcher/_vertical/Switcher_vertical.css';
import '../../../shared/Switcher/_checkbox/Switcher_checkbox.css';

const Buttons = ({
	topicsList,
	setTopicsList,
	parts,
	setParts,
	testTotal,
	setTestTotal,
	getNewTestTotalText
}) => {
	const switchPart = part => {
		if (topicsList) {
			const newValue = !parts[part];
			const countValue = newValue ? 1 : 0;

			const willBeSaved = countValue === 1;

			setParts({
				...parts,
				[part]: newValue
			});

			const list = [...topicsList];
			let newTestTotalAmount = testTotal.amount;
			for (let i = 0; i < list.length; i++) {
				if (list[i].part === part) {
					let oldValue = list[i].value;

					list[i] = {
						...list[i],
						value:
							list[i].value > 1 && willBeSaved
								? oldValue
								: countValue
					};

					newTestTotalAmount =
						newTestTotalAmount + (list[i].value - oldValue);
				}
			}

			setTopicsList(list);

			setTestTotal({
				amount: newTestTotalAmount,
				text: getNewTestTotalText(newTestTotalAmount)
			});
		}
	};

	const handleResetClick = e => {
		e.preventDefault();

		if (topicsList) {
			const list = [...topicsList];
			for (let i = 0; i < list.length; i++) {
				list[i] = {
					...list[i],
					value: 0
				};
			}
			setTopicsList(list);

			setTestTotal({
				amount: 0,
				text: ''
			});

			setParts({
				test: false,
				detailed: false
			});
		}
	};

	return (
		<div className="ConstructorForm-Buttons">
			<div className="ConstructorForm-ButtonsPanel">
				<input
					className="Button ConstructorForm-SubmitButton"
					type="submit"
					value={`Составить вариант ${testTotal.text}`}
				/>

				<div className="Switcher Switcher_vertical Switcher_checkbox ConstructorForm-Switcher">
					<label className="Label Switcher-Label Switcher_vertical-Label Switcher_checkbox-Label">
						<Checkbox
							className="Switcher-Input"
							fakeCheckboxClassName="FakeCheckbox_blue Switcher_checkbox-FakeCheckbox"
							name="testPart"
							value={parts.test}
							onChange={() => switchPart('test')}
						/>
						<span className="Switcher-Text Switcher_checkbox-Text">
							Тестовая часть
						</span>
					</label>
					<label className="Label Switcher-Label Switcher_vertical-Label Switcher_checkbox-Label">
						<Checkbox
							className="Switcher-Input"
							fakeCheckboxClassName="FakeCheckbox_blue Switcher_checkbox-FakeCheckbox"
							name="detailedPart"
							value={parts.detailed}
							onChange={() => switchPart('detailed')}
						/>
						<span className="Switcher-Text Switcher_checkbox-Text">
							Развернутая часть
						</span>
					</label>
				</div>

				<button
					className="Link Link_pseudo Link_wrap ConstructorForm-ResetButton"
					onClick={handleResetClick}
				>
					<span>×</span>
					<u className="Link-U Link_pseudo-U Link_wrap-U ConstructorForm-ResetButtonText">
						Очистить поля
					</u>
				</button>
			</div>
		</div>
	);
};

export default Buttons;
