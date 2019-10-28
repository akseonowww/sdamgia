import React from 'react';

import './Footer.scss';

import spbsut from './assets/spbsut.png';

const Footer = ({ className }) => (
	<footer className={`Footer ${className}`}>
		<p style={{ float: 'left' }}>
			<a class="Link Link_black" href="/about">
				О проекте
			</a>{' '}
			· <a class="Link Link_black" href="/staff">Редакция</a> ·{' '}
			<a class="Link Link_black" href="/legal">
				Правовая информация
			</a>{' '}
		</p>
		<p align="right">©&nbsp;Гущин Д. Д., 2011—2019</p> <br />
		<center style={{ clear: 'both' }}>
			<a
				href="http://priem.sut.ru/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={spbsut}
					alt="СПб ГУТ!"
					title="priem.sut.ru"
					width="160"
				/>
			</a>
		</center>
	</footer>
);

export default Footer;
