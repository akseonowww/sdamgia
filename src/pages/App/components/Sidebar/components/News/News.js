import React from 'react';
import cx from 'classnames';

import './News.scss';

import vkBotImg from './assets/vkBotImg.png';
import telegramBotImg from './assets/telegramBotImg.png';

const News = ({ className }) => (
	<div className={cx('News', className)}>
		<a
			className="news news_urgent"
			href="https://ege.sdamgia.ru/game.htm"
			rel="noopener noreferrer"
		>
			Играть <u>в ЕГЭ-игрушку</u>
		</a>
		<a
			className="news news_urgent"
			href="https://play.google.com/store/apps/details?id=com.ilnur.handbook"
			rel="noopener noreferrer"
		>
			<u>Мобильный справочник</u>
		</a>
		<table align="center" style={{ marginBottom: '5px' }}>
			<tbody>
				<tr>
					<td align="left">
						<a
							href="https://vk.com/bot.sdamgia"
							target="_blank"
							rel="noopener noreferrer"
							title="Наш умный бот ВК"
						>
							<img src={vkBotImg} alt="" />
						</a>
					</td>
					<td width="5px"></td>
					<td align="right">
						<a
							href="tg://resolve?domain=reshuege_bot"
							target="_blank"
							rel="noopener noreferrer"
							title="Наш Телеграм-бот"
						>
							<img src={telegramBotImg} alt="" />
						</a>
					</td>
				</tr>
			</tbody>
		</table>
		<a
			className="news news_hot"
			href="https://ege.sdamgia.ru/img/blockadblock_chrome.jpg"
			rel="noopener noreferrer"
		>
			<div className="news__text">
				На сайте что-то не так? Отключите адблок
			</div>
		</a>
		<div className="News-List">
			<a
				className="Link Link_static Link_wrap News-Title"
				href="https://sdamgia.ru/"
				rel="noopener noreferrer"
			>
				<u className="Link-U Link_static-U Link_wrap-U">Новости</u>
			</a>
			<a
				className="news"
				href="https://vk.com/wall-34649478_180027"
				rel="noopener noreferrer"
			>
				<div className="news__date">15 сентября</div>
				<div className="news__text">
					Решения всех демоверсий ЕГЭ−2020
				</div>
			</a>
			<a
				className="news"
				href="https://vk.com/mgumsch"
				rel="noopener noreferrer"
			>
				<div className="news__date">15 августа</div>
				<div className="news__text">
					Подготовка к ЕГЭ и ОГЭ с нуля до 100 баллов на годовом курсе
					УМСКУЛ
				</div>
			</a>
			<a
				className="news"
				href="https://vk.com/wall-34649478_177050"
				rel="noopener noreferrer"
			>
				<div className="news__date">20 июня</div>
				<div className="news__text">
					Сначала составители ЕГЭ свою ошибку признали, потом
					расхотели
				</div>
			</a>
			<a
				className="news"
				href="https://vk.com/wall-34649478_175961"
				rel="noopener noreferrer"
			>
				<div className="news__date">14 июня</div>
				<div className="news__text">
					ЕГЭ ещё не начался, а выгнать уже смогли
				</div>
			</a>
			<a
				className="news"
				href="https://vk.com/wall-34649478_175325"
				rel="noopener noreferrer"
			>
				<div className="news__date">12 июня</div>
				<div className="news__text">
					Комментарии Д. Гущина к геометрическим заданиям ЕГЭ основной
					волны
				</div>
			</a>
		</div>

		<a
			className="news news_urgent"
			href="https://vk.com/wall-34649478_169793"
			rel="noopener noreferrer"
		>
			Новый сервис — <u>карточки</u>
		</a>
		<div className="login__title">ЧУЖОЕ НЕ БРАТЬ!</div>
		<a
			className="news"
			href="https://ege.sdamgia.ru/page/examer.ru"
			rel="noopener noreferrer"
		>
			<div className="news__text">Экзамер из Таганрога</div>
		</a>
		<a
			className="news"
			href="https://ege.sdamgia.ru/page/thieves"
			rel="noopener noreferrer"
		>
			<div className="news__text">
				Учитель Думбадзе из школы 162 Петербурга
			</div>
		</a>
		<a
			className="news"
			href="https://ege.sdamgia.ru/page/examer.ru"
			rel="noopener noreferrer"
		>
			<div className="news__text">
				<span className="smallcapitals">
					ОПРОВЕРЖЕНИЕ СВЕДЕНИЙ ОБ EXAMER ИЗ ТАГАНРОГА
				</span>
			</div>
		</a>
	</div>
);

export default News;
