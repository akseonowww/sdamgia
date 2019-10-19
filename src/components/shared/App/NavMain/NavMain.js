import React from 'react';

import './NavMain.scss';

const NavMain = ({ className }) => (
	<nav className={'NavMain Nav ' + className}>
		<a
			className="NavMain-Link"
			href="https://math-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">≡ Математика</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://inf-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">Информатика</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://rus-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">Русский язык</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://en-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">Английский язык</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://de-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">Немецкий язык</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://fr-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">Французcкий язык</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://sp-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">Испанский язык</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://phys-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">Физика</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://chem-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">Химия</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://bio-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">Биология</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://geo-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">География</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://soc-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">Обществознание</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://lit-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">Литература</div>
		</a>
		<a
			className="NavMain-Link"
			href="https://hist-ege.sdamgia.ru/?redir=1"
			rel="nofollow"
		>
			<div className="NavMain-Tab">История</div>
		</a>
		<div style={{ clear: 'both' }}></div>
	</nav>
);

export default NavMain;
