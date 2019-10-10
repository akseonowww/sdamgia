import React from 'react';

import Section from '../shared/Section';
import Title from '../shared/Title';
import './Test.css';

const Test = () => (
	<Section class="Test">
		<Title>Тест</Title>
		<p class="Section-Desc">
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
