import React from 'react';

import './NavMain.scss';

const NavMain = ({ className }) => {
	const exam = 'ege';
	const subjectsList = [
		{
			title: 'Информатика',
			url: 'math'
		},
		{
			title: 'Русский язык',
			url: 'rus'
		},
		{
			title: 'Английский язык',
			url: 'en'
		},
		{
			title: 'Немецкий язык',
			url: 'de'
		},
		{
			title: 'Французcкий язык',
			url: 'fr'
		},
		{
			title: 'Испанский язык',
			url: 'sp'
		},
		{
			title: 'Физика',
			url: 'phys'
		},
		{
			title: 'Химия',
			url: 'chem'
		},
		{
			title: 'Биология',
			url: 'bio'
		},
		{
			title: 'География',
			url: 'geo'
		},
		{
			title: 'Обществознание',
			url: 'soc'
		},
		{
			title: 'Литература',
			url: 'lit'
		},
		{
			title: 'История',
			url: 'hist'
		}
	];

	return (
		<>
			<nav
				className={`NavMain NavMain_desktop ${className} ${className}_desktop`}
			>
				<a
					className="NavMain-Link NavMain_desktop-Link"
					href="/"
					rel="nofollow"
				>
					<div className="NavMain-Tab NavMain_desktop-Tab">
						≡ Математика
					</div>
				</a>

				{subjectsList.map(({ title, url }) => (
					<a
						className="NavMain-Link NavMain_desktop-Link"
						href={`https://${url}-${exam}.sdamgia.ru`}
						rel="nofollow"
					>
						<div className="NavMain-Tab NavMain_desktop-Tab">
							{title}
						</div>
					</a>
				))}

				<div style={{ clear: 'both' }}></div>
			</nav>

			<nav className={`NavMain ${className} ${className}_mobile`}>
				≡ математика
			</nav>
		</>
	);
};

export default NavMain;
