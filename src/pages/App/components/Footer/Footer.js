import React from 'react';
import cx from 'classnames';

import './Footer.scss';

import spbsut from './assets/spbsut.png';

const Footer = ({ className }) => (
	<footer className={cx('Footer', className)}>
		<nav className="Footer-Menu">
			<a className="Link Link_black" href="/about">
				О проекте
			</a>{' '}
			·{' '}
			<a className="Link Link_black" href="/staff">
				Редакция
			</a>{' '}
			·{' '}
			<a className="Link Link_black" href="/legal">
				Правовая&nbsp;информация
			</a>{' '}
		</nav>
		<a
			className="Footer-Ad"
			href="http://priem.sut.ru/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={spbsut} alt="СПб ГУТ!" title="priem.sut.ru" width="160" />
		</a>
		<div className="Footer-Copyright">©&nbsp;Гущин Д. Д., 2011—2019</div>
	</footer>
);

export default Footer;
