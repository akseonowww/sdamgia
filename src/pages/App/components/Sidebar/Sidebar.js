import React from 'react';

import NavSide from './components/NavSide';
import Search from './components/Search/Search';
import ProfileWidget from './components/ProfileWidget/ProfileWidget';
import News from './components/News/News';
import OurSources from './components/OurSources/OurSources';
import './Sidebar.scss';

import sidebarBannerAd from './assets/sidebarBannerAd.png';

const Sidebar = () => (
	<>
		<aside className="SidebarBtns">сайты - меню - вход - новости</aside>

		<aside className="Sidebar PageLayout-Sidebar">
			<div className="sdamgia_btns">
				<a href="https://sdamgia.ru">СДАМ ГИА</a>
				<a href="https://ege.sdamgia.ru">РЕШУ ЕГЭ</a>
				<a href="https://oge.sdamgia.ru">РЕШУ ОГЭ</a>
				<a href="https://vpr.sdamgia.ru">РЕШУ ВПР</a>
				<a href="https://ct.sdamgia.ru">РЕШУ ЦТ</a>
			</div>

			<NavSide />

			<Search className="Sidebar-Search" />

			<div className="Info">
				<ProfileWidget className="Info-Item Info-ProfileWidget" />

				<News />

				<OurSources className="Info-Item" />
			</div>

			<img
				className="Sidebar-BannerAd Sidebar-BannerAd "
				src={sidebarBannerAd}
				alt="Реклама"
			/>
		</aside>
	</>
);

export default Sidebar;
