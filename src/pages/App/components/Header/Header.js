import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import 'components/Link/Link.scss';
import 'components/Link/_selected/Link_selected.scss';
import './Header.scss';

const Header = ({ className }) => (
	<header className={cx('Header', className)}>
		<div className="Header-Main">
			<NavLink activeClassName="Link_selected" to="/" exact>
				<img
					className="Header-Logo"
					src="https://ege.sdamgia.ru/img/headers/logo.svg"
					alt="Сдам ГИА"
				/>
			</NavLink>

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
			<div className="Header-SubjectTitle">
				Математика профильного уровня
			</div>
		</div>

		<img
			className="Header-SubjectImg"
			src="https://math.reshuct.by/img/headers/math.png"
			alt="Математика"
		/>
	</header>
);

export default Header;
