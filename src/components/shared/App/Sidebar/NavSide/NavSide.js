import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavSide.scss';

import sideAd from '../assets/agm.gif';

const NavSide = () => {
	return (
		<div className="NavSide">
			<div style={{ width: '160px', margin: 'auto' }}>
				<center>
					<a
						href="https://ege-study.ru/online-repeticionniy-matematika?utm_source=sdamgia&amp;utm_medium=sdamgia&amp;utm_campaign=online_probniy_sent"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={sideAd} alt="Наши друзья. Рекомендуем" />
					</a>
				</center>
			</div>
			<a
				className="Link Link_black Link_wrap NavSide-Link"
				href="/manual"
				title="Шкалы, статистика, оценивание заданий"
			>
				<u className="Link-U Link_black-U Link_wrap-U">Об экзамене</u>
			</a>
			<a
				className="Link Link_black Link_wrap NavSide-Link"
				href="/prob_catalog"
				title="Рубрицированные задания, статистика по решенным и нерешенным заданиям"
			>
				<u className="Link-U Link_black-U Link_wrap-U">
					Каталог заданий
				</u>
			</a>
			<NavLink
				className="Link Link_black Link_wrap NavSide-Link"
				activeClassName="NavLink_selected Link_selected"
				to="/"
				exact
				title="Пройти тестирование, проверить себя"
			>
				<u className="Link-U Link_black-U Link_wrap-U">Ученику</u>
			</NavLink>
			<a
				className="Link Link_black Link_wrap NavSide-Link"
				href="/teacher"
				title="Создание и проверка работ для учащихся, классный журнал"
			>
				<u className="Link-U Link_black-U Link_wrap-U">Учителю</u>
			</a>
			<a
				className="Link Link_black Link_wrap NavSide-Link"
				href="/methodist"
				title="Подборка тренировочных работ, реальных экзаменационных вариантов предыдущих лет"
			>
				<u className="Link-U Link_black-U Link_wrap-U">Варианты</u>
			</a>
			<a
				className="Link Link_black Link_wrap NavSide-Link"
				href="/expert"
				title="Критерии проверки работ, за что снижают баллы"
			>
				<u className="Link-U Link_black-U Link_wrap-U">Эксперту</u>
			</a>
			<a
				className="Link Link_black Link_wrap NavSide-Link"
				href="/course"
				title="Создать свой курс, задать задание учащимся дистанционно"
			>
				<u className="Link-U Link_black-U Link_wrap-U">Школа</u>
			</a>
			<a
				className="Link Link_black Link_wrap NavSide-Link"
				href="/handbook"
				title="Краткий справочник по предмету"
			>
				<u className="Link-U Link_black-U Link_wrap-U">Справочник</u>
			</a>
			<a
				className="Link Link_black Link_wrap NavSide-Link"
				href="/page/theory"
				title="Теория по предмету"
			>
				<u className="Link-U Link_black-U Link_wrap-U">Теория</u>
			</a>
			<a
				className="Link Link_black Link_wrap NavSide-Link"
				href="/guestbook"
				title="Сказать добрые слова редакции"
			>
				<u className="Link-U Link_black-U Link_wrap-U">
					Сказать спасибо
				</u>
			</a>
			<a
				className="Link Link_black Link_wrap NavSide-Link"
				href="/callback?f=faq"
				title="Задать вопрос об экзаменах и о работе портала"
			>
				<u className="Link-U Link_black-U Link_wrap-U">
					Вопрос — ответ
				</u>
			</a>
			<a
				className="Link Link_black Link_wrap NavSide-Link"
				href="/user_stat"
			>
				<u className="Link-U Link_black-U Link_wrap-U">
					Моя статистика
				</u>
			</a>
			<a className="Link Link_black Link_wrap NavSide-Link" href="/favorite">
				<u className="Link-U Link_black-U Link_wrap-U">Избранное</u>
			</a>
		</div>
	);
};

export default NavSide;
