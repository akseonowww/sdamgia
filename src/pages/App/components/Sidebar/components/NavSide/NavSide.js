import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import './NavSide.scss';

const NavSide = () => {
	const [pages, setPages] = useState(null);

	useEffect(() => {
		axios
			.get('http://sidorchik.ru/reshuege/api/sidebar/menu/')
			.then(response => response.data)
			.then(data =>
				data.map(({ url, exact, text, hint }) => ({
					url,
					exact,
					text,
					hint
				}))
			)
			.then(data => setPages(data))
			.catch(error => {
				console.log(error);

				const data = [
					{
						url: '/manual',
						exact: false,
						text: 'Об экзаменеs',
						hint: 'Шкалы, статистика, оценивание заданий'
					},
					{
						url: '/prob_catalog',
						exact: false,
						text: 'Каталог заданий',
						hint:
							'Рубрицированные задания, статистика по решенным и нерешенным заданиям'
					},
					{
						url: '/',
						exact: true,
						text: 'Ученику',
						hint: 'Пройти тестирование, проверить себя'
					},
					{
						url: '/teacher',
						exact: false,
						text: 'Учителю',
						hint:
							'Создание и проверка работ для учащихся, классный журнал'
					},
					{
						url: '/methodist',
						exact: false,
						text: 'Варианты',
						hint:
							'Подборка тренировочных работ, реальных экзаменационных вариантов предыдущих лет'
					},
					{
						url: '/expert',
						exact: false,
						text: 'Эксперту',
						hint: 'Критерии проверки работ, за что снижают баллы'
					},
					{
						url: '/course',
						exact: false,
						text: 'Школа',
						hint:
							'Создать свой курс, задать задание учащимся дистанционно'
					},
					{
						url: '/handbook',
						exact: false,
						text: 'Справочник',
						hint: 'Краткий справочник по предмету'
					},
					{
						url: '/page/theory',
						exact: false,
						text: 'Теория',
						hint: 'Теория по предмету'
					},
					{
						url: '/guestbook',
						exact: false,
						text: 'Сказать спасибо',
						hint: 'Сказать добрые слова редакции'
					},
					{
						url: '/callback?f=faq',
						exact: false,
						text: 'Вопрос — ответ',
						hint: 'Задать вопрос об экзаменах и о работе портала'
					},
					{
						url: '/user_stat',
						exact: false,
						text: 'Моя статистика',
						hint: 'Узнать, какие задания подтянуть'
					},
					{
						url: '/favorite',
						exact: false,
						text: 'Избранное',
						hint: 'Посмотреть отобранные вами задания'
					}
				];

				setPages(data);
			});
	}, []);

	return (
		<div className="NavSide">
			{pages &&
				pages.map(({ url, exact, text, hint }, i) => (
					<NavLink
						className="Link Link_black Link_wrap NavSide-Link"
						activeClassName="NavLink_selected Link_selected"
						to={url}
						exact={exact}
						title={hint}
						key={i}
					>
						<u className="Link-U Link_black-U Link_wrap-U">
							{text}
						</u>
					</NavLink>
				))}
		</div>
	);
};

export default NavSide;
