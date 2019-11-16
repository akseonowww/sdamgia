import React from 'react';
import cx from 'classnames';

import './News.scss';

import vkBotImg from './assets/vkBotImg.png';
import telegramBotImg from './assets/telegramBotImg.png';

const News = ({ className }) => (
	<div className={cx('News', className)}>
		<a
			className="News-Item News-Item_urgent Link Link_white Link_wrap"
			href="https://ege.sdamgia.ru/game.htm"
			rel="noopener noreferrer"
		>
			Играть{' '}
			<u className="Link-U Link_white-U Link_wrap-U">в ЕГЭ-игрушку</u>
		</a>
		<a
			className="News-Item News-Item_urgent Link Link_white Link_wrap"
			href="https://play.google.com/store/apps/details?id=com.ilnur.handbook"
			rel="noopener noreferrer"
		>
			<u className="Link-U Link_white-U Link_wrap-U">
				Мобильный справочник
			</u>
		</a>

		<div className="News-Bots">
			<a
				className="News-Bot News-Bot_Vk"
				href="https://vk.com/bot.sdamgia"
				rel="noopener noreferrer"
				title="Наш умный бот Вконтакте"
			>
				<img src={vkBotImg} alt="Наш умный бот Вконтакте" />
			</a>
			<a
				className="News-Bot News-Bot_Telegram"
				href="tg://resolve?domain=reshuege_bot"
				rel="noopener noreferrer"
				title="Наш Телеграм-бот"
			>
				<img src={telegramBotImg} alt="Наш Телеграм-бот" />
			</a>
		</div>

		<a
			className="News-Item News-Item_hot Link Link_static"
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
				className="News-Item Link Link_static"
				href="https://vk.com/wall-34649478_180027"
				rel="noopener noreferrer"
			>
				<div className="News-Date Smallcapitals">15 сентября</div>
				<div className="News-Text">
					Решения всех демоверсий ЕГЭ−2020
				</div>
			</a>
			<a
				className="News-Item Link Link_static"
				href="https://vk.com/mgumsch"
				rel="noopener noreferrer"
			>
				<div className="News-Date Smallcapitals">15 августа</div>
				<div className="News-Text">
					Подготовка к ЕГЭ и ОГЭ с нуля до 100 баллов на годовом курсе
					УМСКУЛ
				</div>
			</a>
			<a
				className="News-Item Link Link_static"
				href="https://vk.com/wall-34649478_177050"
				rel="noopener noreferrer"
			>
				<div className="News-Date Smallcapitals">20 июня</div>
				<div className="News-Text">
					Сначала составители ЕГЭ свою ошибку признали, потом
					расхотели
				</div>
			</a>
			<a
				className="News-Item Link Link_static"
				href="https://vk.com/wall-34649478_175961"
				rel="noopener noreferrer"
			>
				<div className="News-Date Smallcapitals">14 июня</div>
				<div className="News-Text">
					ЕГЭ ещё не начался, а выгнать уже смогли
				</div>
			</a>
			<a
				className="News-Item Link Link_static"
				href="https://vk.com/wall-34649478_175325"
				rel="noopener noreferrer"
			>
				<div className="News-Date Smallcapitals">12 июня</div>
				<div className="News-Text">
					Комментарии Д. Гущина к геометрическим заданиям ЕГЭ основной
					волны
				</div>
			</a>
		</div>

		<a
			className="News-Item News-Item_urgent Link Link_white Link_wrap"
			href="https://vk.com/wall-34649478_169793"
			rel="noopener noreferrer"
		>
			Новый сервис —{' '}
			<u className="Link-U Link_white-U Link_wrap-U">карточки</u>
		</a>

		<div className="News-Thiefs">
			<div className="News-Title">ЧУЖОЕ НЕ БРАТЬ!</div>
			<a
				className="News-Item Link Link_static"
				href="https://ege.sdamgia.ru/page/examer.ru"
				rel="noopener noreferrer"
			>
				<div className="News-Text">Экзамер из Таганрога</div>
			</a>
			<a
				className="News-Item Link Link_static"
				href="https://ege.sdamgia.ru/page/thieves"
				rel="noopener noreferrer"
			>
				<div className="News-Text">
					Учитель Думбадзе из школы 162 Петербурга
				</div>
			</a>
			<a
				className="News-Item Link Link_static"
				href="https://ege.sdamgia.ru/page/examer.ru"
				rel="noopener noreferrer"
			>
				<div className="News-Text Smallcapitals">
					ОПРОВЕРЖЕНИЕ СВЕДЕНИЙ ОБ EXAMER ИЗ ТАГАНРОГА
				</div>
			</a>
		</div>
	</div>
);

export default News;
