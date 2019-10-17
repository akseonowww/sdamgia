import React, {useState} from 'react';

import Counter from '../../../shared/Counter/Counter';
import Checkbox from '../../../shared/Checkbox';

const FormParts = ({topicsList, setTopicsList, parts, setParts, testTotal, setTestTotal}) => {
    const [extraTopics, setExtraTopics] = useState(false);

    const handleTopicClick = id => {
		const index = id - 1;
		const list = [...topicsList];
		list[index] = { ...list[index], checked: !list[index].checked };

		setTopicsList(list);
    };
    
    const handleExtraPartNameClick = () => {
		setExtraTopics(!extraTopics);
    };

    const handleCheckboxChange = (i, subI) => {
		const list = [...topicsList];
		const topic = (list[i] = { ...list[i] });

		topic.subtopics = [...topic.subtopics];
		topic.subtopics[subI] = {
			...topic.subtopics[subI],
			checked: !topic.subtopics[subI].checked
		};

		setTopicsList(list);
    };


	

    const switchOffPart = part => {
		setParts({
			...parts,
			[part]: false
		});
	};

	const switchOnPart = part => {
		setParts({
			...parts,
			[part]: true
		});
	};
    
        const parted = topicsList.reduce(
            (acc, { id, part, title, value, checked, subtopics }) => {
                acc[part] = acc[part] || [];
                acc[part].push({
                    id,
                    title,
                    value,
                    checked,
                    subtopics
                });
                return acc;
            },
            {}
        );

        return Object.entries(parted).map(([part, topics], partI) => {
            let partName;
            switch (part) {
                case 'test':
                    partName = (
                        <div className="ConstructorForm-Row ConstructorForm-Row_label">
                            <div className="ConstructorForm-Topic">
                                Тестовая часть
                            </div>
                        </div>
                    );
                    break;
                case 'detailed':
                    partName = (
                        <div className="ConstructorForm-Row ConstructorForm-Row_label">
                            <div className="ConstructorForm-Topic">
                                Развернутая часть
                            </div>
                        </div>
                    );
                    break;
                case 'extra':
                    partName = (
                        <div className="ConstructorForm-Row ConstructorForm-Row_label">
                            <div
                                className="ConstructorForm-Topic Link Link_pseudo Link_wrap"
                                onClick={() => handleExtraPartNameClick()}
                            >
                                <u className="Link-U Link_pseudo-U Link_wrap-U">
                                    Задания, не входящие в ЕГЭ этого года
                                </u>
                            </div>
                        </div>
                    );
                    break;
                default:
                    partName = null;
                    break;
            }

            return (
                <div class="ConstructorForm-Part" key={partI}>
                    {partName}
                    {(part !== 'extra' ||
                        (part === 'extra' && extraTopics)) &&
                        topics.map(
                            (
                                { id, title, value, checked, subtopics },
                                i
                            ) => (
                                <div
                                    className="ConstructorForm-Row"
                                    key={'topic' + partI + i}
                                >
                                    <Counter
                                        className="ConstructorForm-Counter"
                                        name={`prob${id}`}
                                        value={value}
                                        list={[...topicsList]}
                                        index={id - 1}
                                        testTotal={testTotal}
                                        setValue={setTopicsList}
                                        setTestTotal={setTestTotal}
                                        part={part}
                                        switchOnPart={switchOnPart}
                                        switchOffPart={switchOffPart}
                                    />
                                    <div className="ConstructorForm-Topic">
                                        <div
                                            className="Link Link_pseudo Link_pseudo-black Link_wrap ConstructorForm-TopicName"
                                            onClick={() =>
                                                handleTopicClick(id)
                                            }
                                        >
                                            <div className="ConstructorForm-TopicNumber">
                                                {part !== 'extra'
                                                    ? id
                                                    : `Д${i + 1}`}
                                                .
                                            </div>
                                            <div className="ConstructorForm-TopicDesc">
                                                <u className="Link_wrap-U Link-U Link_pseudo-U Link_pseudo-black-U">
                                                    {title}
                                                </u>
                                            </div>
                                        </div>

                                        {checked && (
                                            <div className="ConstructorForm-TopicSubs">
                                                {subtopics.map(
                                                    (subtopic, subI) => (
                                                        <label
                                                            className="Link_wrap ConstructorForm-TopicName Label"
                                                            key={
                                                                'subtopic' +
                                                                subtopic.id
                                                            }
                                                        >
                                                            <div className="ConstructorForm-TopicNumber">
                                                                <Checkbox
                                                                    fakeCheckboxClassName="ConstructorForm-TopicSubCheckbox"
                                                                    name={
                                                                        'probtheme' +
                                                                        subtopic.id
                                                                    }
                                                                    value={
                                                                        subtopic.checked
                                                                    }
                                                                    onChange={() =>
                                                                        handleCheckboxChange(
                                                                            id -
                                                                                1,
                                                                            subI
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="ConstructorForm-TopicDesc">
                                                                {
                                                                    subtopic.title
                                                                }
                                                                &nbsp;·&nbsp;
                                                                <a
                                                                    className="Link Link_black"
                                                                    href={
                                                                        'https://ege.sdamgia.ru/test?theme=' +
                                                                        subtopic.id
                                                                    }
                                                                >
                                                                    {
                                                                        subtopic.amount
                                                                    }
                                                                    &nbsp;шт.
                                                                </a>
                                                            </div>
                                                        </label>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                </div>
            );
        });
    
};

export default FormParts;
