import React, { useRef } from 'react';

import Checkbox from '../../../../shared/Checkbox';
import nahStep from '../../../../shared/Form/nahStep';

const SubtopicList = ({ i, subtopic, subI, topicsList, setTopicsList }) => {
	const subtopicLabel = useRef(null);

	const handleCheckboxChange = (i, subI) => {
		const list = [...topicsList];
		const topic = (list[i] = { ...list[i] });
		topic.subtopics = [...topic.subtopics];

		const newValue = !topic.subtopics[subI].checked;

		// Allow more than one subtopic checked
		const subtopicsLength = topic.subtopics.length;
		let uncheckedNumber = 0;
		for (let subtopicI = 0; subtopicI < subtopicsLength; subtopicI++) {
			if (topic.subtopics[subtopicI].checked === false) uncheckedNumber++;
		}
		if (uncheckedNumber === subtopicsLength - 1 && newValue === false) {
			subtopicLabel.current.style.left = 0;
			let x = 0,
				m = 0,
				nahStepTimeOut;
			nahStep(subtopicLabel.current, m, x, nahStepTimeOut);

			return;
		}

		topic.subtopics[subI] = {
			...topic.subtopics[subI],
			checked: newValue
		};
		setTopicsList(list);
	};

	return (
		<label
			className="Link_wrap ConstructorForm-TopicName Label"
			ref={subtopicLabel}
		>
			<div className="ConstructorForm-TopicNumber">
				<Checkbox
					fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
					name={'probtheme' + subtopic.id}
					value={subtopic.checked}
					onChange={() => handleCheckboxChange(i, subI)}
				/>
			</div>
			<div className="ConstructorForm-TopicDesc">
				{subtopic.title}
				&nbsp;·&nbsp;
				<a
					className="Link Link_black"
					href={'https://ege.sdamgia.ru/test?theme=' + subtopic.id}
				>
					{subtopic.amount}
					&nbsp;шт.
				</a>
			</div>
		</label>
	);
};

export default SubtopicList;
