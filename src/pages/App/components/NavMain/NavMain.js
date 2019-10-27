import React from 'react';

import './NavMain.scss';

const NavMain = ({ className }) => (
	<>
		<nav
			className={`NavMain NavMain_desktop ${className} ${className}_desktop`}
		>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://math-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">≡ Математика</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://inf-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">Информатика</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://rus-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">Русский язык</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://en-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">Английский язык</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://de-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">Немецкий язык</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://fr-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">Французcкий язык</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://sp-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">Испанский язык</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://phys-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">Физика</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://chem-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">Химия</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://bio-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">Биология</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://geo-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">География</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://soc-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">Обществознание</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://lit-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">Литература</div>
			</a>
			<a
				className="NavMain-Link NavMain_desktop-Link"
				href="https://hist-ege.sdamgia.ru/?redir=1"
				rel="nofollow"
			>
				<div className="NavMain-Tab NavMain_desktop-Tab">История</div>
			</a>
			<div style={{ clear: 'both' }}></div>
		</nav>

		<nav className={`NavMain ${className} ${className}_mobile`}>
			≡ математика
		</nav>
	</>
);

export default NavMain;
