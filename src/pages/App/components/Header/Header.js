import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../../../components/Link/Link.scss';
import '../../../../components/Link/_selected/Link_selected.scss';
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
			className="Header-SubjectImg"
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
				className="Header-Link Link Link_black"
				href="https://sdamgia.ru"
				rel="noopener noreferrer"
			>
				СДАМ ГИА
			</a>
			:{' '}
			<NavLink
				className="Header-Link Link Link_black"
				activeClassName="Link_selected"
				to="/"
				exact
			>
				РЕШУ ЕГЭ
			</NavLink>
		</div>
		<div className="Header-WebsiteDesc">
			Образовательный портал для подготовки к экзаменам
		</div>
		<div className="Header-SubjectTitle">Математика профильного уровня</div>
		<div style={{ clear: 'both' }}></div>
	</header>
);

export default Header;
