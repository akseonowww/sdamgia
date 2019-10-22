import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = ({ className }) => (
	<header className={`Header ${className}`}>
		<NavLink to="/" exact activeClassName="Link_selected">
			<img
				src="https://ege.sdamgia.ru/img/headers/logo.svg"
				className="Header-Logo"
				alt="Сдам ГИА"
			/>
		</NavLink>
		<img
			className="header_subj_logo"
			src="https://math.reshuct.by/img/headers/math.png"
			style={{
				float: 'right',
				height: '100px',
				margin: '5px'
			}}
			alt="Математика"
		/>
		<div className="Header-Title">
			<a
				className="Header-Link"
				target="_blank"
				rel="noopener noreferrer"
				href="https://sdamgia.ru"
			>
				СДАМ ГИА
			</a>
			:{' '}
			<NavLink
				to="/"
				exact
				className="Header-Link"
				activeClassName="Header-Link_selected Link_selected"
			>
				РЕШУ ЕГЭ
			</NavLink>
		</div>
		<div className="header_site_info">
			Образовательный портал для подготовки к экзаменам
		</div>
		<div className="header_subj_name">Математика профильного уровня</div>
		<div style={{ clear: 'both' }}></div>
	</header>
);

export default Header;
