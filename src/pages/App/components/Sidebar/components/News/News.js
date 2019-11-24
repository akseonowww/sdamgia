import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cx from 'classnames';

import './News.scss';

import vkBotImg from './assets/vkBotImg.png';
import telegramBotImg from './assets/telegramBotImg.png';
import NewsItem from './components/NewsItem/NewsItem';

const News = ({ className }) => {
	const [bots, setBots] = useState(null);
	const [news, setNews] = useState(null);
	const [thieves, setThieves] = useState(null);
	const [sourcesNews, setSourcesNews] = useState(null);

	useEffect(() => {
		axios
			.get('http://sidorchik.ru/reshuege/api/sidebar/bots/')
			.then(response => response.data)
			.then(data =>
				data.map(({ url, text, img }) => ({
					url,
					text,
					img
				}))
			)
			.then(data => setBots(data))
			.catch(error => {
				console.log(error);

				const data = [
					{
						url: 'https://vk.com/bot.sdamgia',
						text: 'Наш умный бот Вконтакте',
						img: vkBotImg
					},
					{
						url: 'tg://resolve?domain=reshuege_bot',
						text: 'Наш Телеграм-бот',
						img: telegramBotImg
					}
				];

				setBots(data);
			});

		axios
			.get('http://sidorchik.ru/reshuege/api/sidebar/news/')
			.then(response => response.data)
			.then(data =>
				data.map(({ type, date, text, url, urls }) => ({
					type,
					date,
					text,
					url,
					urls
				}))
			)
			.then(data => setNews(data))
			.catch(error => {
				console.log(error);

				const data = [
					{
						type: 'default',
						date: '15 сентября',
						text: 'Решения всех демоверсий ЕГЭ−2020',
						url: 'https://vk.com/wall-34649478_180027'
					},
					{
						type: 'default',
						date: '15 августа',
						text:
							'Подготовка к ЕГЭ и ОГЭ с нуля до 100 баллов на годовом курсе УМСКУЛ',
						url: 'https://vk.com/mgumsch'
					},
					{
						type: 'default',
						date: '20 июня',
						text:
							'Сначала составители ЕГЭ свою ошибку признали, потом расхотели',
						url: 'https://vk.com/wall-34649478_177050'
					},
					{
						type: 'default',
						date: '14 июня',
						text: 'ЕГЭ ещё не начался, а выгнать уже смогли',
						url: 'https://vk.com/wall-34649478_175961'
					},
					{
						type: 'default',
						date: '12 июня',
						text:
							'Комментарии Д. Гущина к геометрическим заданиям ЕГЭ основной волны',
						url: 'https://vk.com/wall-34649478_175325'
					},
					{
						type: 'urgent',
						date: undefined,
						text: 'Новый сервис — карточки',
						url: 'https://vk.com/wall-34649478_169793'
					}
				];

				setNews(data);
			});

		axios
			.get('http://sidorchik.ru/reshuege/api/sidebar/thieves/')
			.then(response => response.data)
			.then(data =>
				data.map(({ type, text, url }) => ({
					type,
					text,
					url
				}))
			)
			.then(data => setThieves(data))
			.catch(error => {
				console.log(error);

				const data = [
					{
						type: 'default',
						text: 'Экзамер из Таганрога',
						url: 'https://ege.sdamgia.ru/page/examer.ru'
					},
					{
						type: 'default',
						text: 'Учитель Думбадзе из школы 162 Петербурга',
						url: 'https://ege.sdamgia.ru/page/thieves'
					},
					{
						type: 'default',
						text: 'ОПРОВЕРЖЕНИЕ СВЕДЕНИЙ ОБ EXAMER ИЗ ТАГАНРОГА',
						url: 'https://ege.sdamgia.ru/page/examer.ru',
						letterCase: 'upper'
					}
				];

				setThieves(data);
			});

		axios
			.get('http://sidorchik.ru/reshuege/api/sidebar/sources-news/')
			.then(response => response.data)
			.then(data =>
				data.map(({ type, date, text, url }) => ({
					type,
					date,
					text,
					url
				}))
			)
			.then(data => setSourcesNews(data))
			.catch(error => {
				console.log(error);

				const data = [
					{
						type: 'urgent',
						text: 'Играть в ЕГЭ-игрушку',
						url: 'https://ege.sdamgia.ru/game.htm'
					},
					{
						type: 'urgent',
						text: 'Мобильный справочник',
						url:
							'https://play.google.com/store/apps/details?id=com.ilnur.handbook'
					}
				];

				setSourcesNews(data);
			});
	}, []);

	return (
		<div className={cx('News', className)}>
			{sourcesNews &&
				sourcesNews.map(({ type, date, text, url }, i) => (
					<NewsItem
						type={type}
						date={date}
						text={text}
						url={url}
						key={i}
					/>
				))}

			<div className="News-Bots">
				{bots && bots.map(({ url, text, img }) => (
					<a
						className="News-Bot"
						href={url}
						rel="noopener noreferrer"
						title={text}
					>
						<img src={img} alt={text} />
					</a>
				))}
			</div>

			{[
				{
					type: 'hot',
					date: null,
					text: 'На сайте что-то не так? Отключите адблок',
					url: 'https://ege.sdamgia.ru/img/blockadblock_chrome.jpg'
				}
			].map(({ type, date, text, url }, i) => (
				<NewsItem
					type={type}
					date={date}
					text={text}
					url={url}
					key={i}
				/>
			))}

			<div className="News-List">
				<a
					className="Link Link_static Link_wrap News-Title"
					href="https://sdamgia.ru/"
					rel="noopener noreferrer"
				>
					<u className="Link-U Link_static-U Link_wrap-U">Новости</u>
				</a>

				{news &&
					news.map(({ type, date, text, url, urls }, i) => (
						<NewsItem
							type={type}
							date={date}
							text={text}
							url={url}
							urls={urls}
							key={i}
						/>
					))}
			</div>

			<div className="News-Thiefs">
				<div className="News-Title">ЧУЖОЕ НЕ БРАТЬ!</div>

				{thieves &&
					thieves.map(({ type, text, url, letterCase }, i) => (
						<a
							className={cx(
								'News-Item',
								{
									[`News-Item_${type}`]: type !== 'default'
								},
								'Link',
								'Link_static'
							)}
							href={url}
							rel="noopener noreferrer"
							key={i}
						>
							<div
								className={cx('News-Text', {
									Smallcapitals: letterCase === 'upper'
								})}
							>
								{text}
							</div>
						</a>
					))}
			</div>
		</div>
	);
};

export default News;
