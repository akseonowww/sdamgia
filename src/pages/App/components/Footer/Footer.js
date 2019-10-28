import React from 'react';

import './Footer.scss';

import spbsut from './assets/spbsut.png';

const Footer = ({ className }) => (
	<footer className={`Footer ${className}`}>
		<nav className="Footer-Menu">
			<a class="Link Link_black" href="/about">
				О проекте
			</a>{' '}
			·{' '}
			<a class="Link Link_black" href="/staff">
				Редакция
			</a>{' '}
			·{' '}
			<a class="Link Link_black" href="/legal">
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
		<p className="Footer-Copyright">©&nbsp;Гущин Д. Д., 2011—2019</p>
	</footer>
);

export default Footer;
