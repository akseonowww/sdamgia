import React from 'react';

import Section from 'components/Section';
import Title from 'components/Title';
import './Test.scss';

const Test = () => (
	<Section className="Test">
		<Title>Тест</Title>
		<p className="Section-Desc">
			При выполнении заданий с кратким ответом впишите в поле для ответа
			цифру, которая соответствует номеру правильного ответа, или число,
			слово, последовательность букв (слов) или цифр. Ответ следует
			записывать без пробелов и каких-либо дополнительных символов.
			Дробную часть отделяйте от целой десятичной запятой. Единицы
			измерений писать не нужно.
		</p>
	</Section>
);

export default Test;
