import React, { useState, useEffect, useCallback } from 'react';

import './NavMain.scss';

const NavMain = ({ className }) => {
	const [subjectList, setSubjectList] = useState([]);

	const exam = 'ege';

	const getUrl = useCallback((popupItem, exam) => {
		return `https://${popupItem}-${exam}.sdamgia.ru`;
	}, []);

	useEffect(() => {
		setSubjectList([
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
				url: 'inf'
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
		]);
	}, []);

	return (
		<>
			<nav
				className={`NavMain NavMain_desktop ${className} ${className}_desktop`}
			>
				{subjectList.length > 0 &&
					subjectList.map(({ title, url, sublist }, i) => {
						if (sublist) {
							return (
								<div className="NavMain-Link NavMain_desktop-Link NavMain-PopupBlock">
									<div className="NavMain-Tab NavMain_desktop-Tab">
										{title}
									</div>

									<div class="NavMain-Popup">
										{sublist.map(
											(sublistItem, sublistI) => (
												<a
													className="NavMain-Link NavMain_desktop-Link"
													href={getUrl(
														sublistItem.url,
														exam
													)}
													rel="nofollow"
													key={sublistI}
												>
													<div class="NavMain-Tab NavMain_desktop-Tab NavMain-PopupTab">
														{sublistItem.title}
													</div>
												</a>
											)
										)}
									</div>
								</div>
							);
						} else {
							return (
								<a
									className="NavMain-Link NavMain_desktop-Link"
									href={getUrl(url, exam)}
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
