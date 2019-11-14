import React, { useState, useMemo, useCallback } from 'react';

import './NavMain.scss';

const NavMain = ({ className }) => {
	const [popup, setPopup] = useState(false);

	const exam = useMemo(() => 'ege', []);
	const subjectsList = useMemo(
		() => [
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
		],
		[]
	);

	const showPopup = useCallback(() => {
		setPopup(true);
	}, []);

	const hidePopup = useCallback(() => {
		setPopup(false);
	}, []);

	return (
		<>
			<nav
				className={`NavMain NavMain_desktop ${className} ${className}_desktop`}
			>
				<div className="NavMain-Link NavMain_desktop-Link NavMain-PopupBlock">
					<div
						class="NavMain-Tab NavMain_desktop-Tab"
						onMouseEnter={showPopup}
					>
						≡ Математика
					</div>

					{popup && (
						<div class="NavMain-Popup" onMouseLeave={hidePopup}>
							<a
								className="NavMain-Link NavMain_desktop-Link"
								href="https://mathb-ege.sdamgia.ru"
								rel="nofollow"
							>
								<div class="NavMain-Tab NavMain_desktop-Tab NavMain-PopupTab">
									Базовый уровень
								</div>
							</a>
							<a
								className="NavMain-Link NavMain_desktop-Link"
								href="https://math-ege.sdamgia.ru"
								rel="nofollow"
							>
								<div className="NavMain-Tab NavMain_desktop-Tab NavMain-PopupTab">
									Профильный уровень
								</div>
							</a>
						</div>
					)}
				</div>

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
