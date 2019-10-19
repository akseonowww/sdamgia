import React from 'react';

const PartName = ({ part, handleExtraPartNameClick }) => {
	let partName;
	switch (part) {
		case 'test':
			partName = 'Тестовая часть';
			break;
		case 'detailed':
			partName = 'Развернутая часть';
			break;
		case 'extra':
			partName = 'Задания, не входящие в ЕГЭ этого года';
			break;
		default:
			break;
	}

	return (
		<div
			className={
				part !== 'extra'
					? 'ConstructorForm-Row ConstructorForm-Row_label'
					: 'ConstructorForm-Row ConstructorForm-Row_label Link Link_pseudo Link_wrap'
			}
			onClick={part === 'extra' && handleExtraPartNameClick}
		>
			<div className="ConstructorForm-Topic">
				{part !== 'extra' ? (
					<>{partName}</>
				) : (
					<u className="Link-U Link_pseudo-U Link_wrap-U">
						{partName}
					</u>
				)}
			</div>
		</div>
	);
};

export default PartName;
