import React, { useState, useMemo, useCallback } from 'react';

import './NavMain.scss';

const NavMain = ({ className }) => {
	const [popup, setPopup] = useState(false);

	const exam = useMemo(() => 'ege', []);
	const subjectsList = useMemo(
		() => [
			{
				title: '≡ Математика',
				sublist: [
					{
						title: 'Базовый уровень',
						url: 'mathb'
					},
					{
						title: 'Профильный уровень',
						url: 'math'
					}
				]
			},
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
				{subjectsList.map(({ title, url, sublist }, i) => {
					if (sublist) {
						return (
							<div className="NavMain-Link NavMain_desktop-Link NavMain-PopupBlock">
								<div
									className="NavMain-Tab NavMain_desktop-Tab"
									onMouseEnter={showPopup}
								>
									{title}
								</div>

								{popup && (
									<div
										class="NavMain-Popup"
										onMouseLeave={hidePopup}
									>
										{sublist.map((popupItem, sublistI) => (
											<a
												className="NavMain-Link NavMain_desktop-Link"
												href={`https://${popupItem}${exam}.sdamgia.ru`}
												rel="nofollow"
												key={sublistI}
											>
												<div class="NavMain-Tab NavMain_desktop-Tab NavMain-PopupTab">
													{popupItem.title}
												</div>
											</a>
										))}
									</div>
								)}
							</div>
						);
					} else {
						return (
							<a
								className="NavMain-Link NavMain_desktop-Link"
								href={`https://${url}-${exam}.sdamgia.ru`}
								rel="nofollow"
								key={i}
							>
								<div className="NavMain-Tab NavMain_desktop-Tab">
									{title}
								</div>
							</a>
						);
					}
				})}

				<div style={{ clear: 'both' }}></div>
			</nav>

			<nav className={`NavMain ${className} ${className}_mobile`}>
				≡ математика
			</nav>
		</>
	);
};

export default NavMain;
