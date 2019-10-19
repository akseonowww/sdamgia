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
			return (
				<div className="ConstructorForm-Row ConstructorForm-Row_label">
					<div
						className="ConstructorForm-Topic Link Link_pseudo Link_wrap"
						onClick={handleExtraPartNameClick}
					>
						<u className="Link-U Link_pseudo-U Link_wrap-U">
							Задания, не входящие в ЕГЭ этого года
						</u>
					</div>
				</div>
			);
		default:
			break;
	}

	return (
		<div className="ConstructorForm-Row ConstructorForm-Row_label">
			<div className="ConstructorForm-Topic">{partName}</div>
		</div>
	);
};

export default PartName;
