import React, { useState, useEffect, useCallback } from 'react';
import cx from 'classnames';

import './NavMain.scss';

const NavMain = ({ className }) => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [subjectList, setSubjectList] = useState([]);

	const exam = 'ege';

	const getUrl = useCallback((popupItem, exam) => {
		return `https://${popupItem}-${exam}.sdamgia.ru`;
	}, []);

	const toggleMobileMenu = () => {
		setMobileMenu(!mobileMenu);
	};

	useEffect(() => {
		setSubjectList([
			{
				title: 'Математика',
				sublist: [
					{
						title: 'Базовый уровень',
						mobileTitle: 'база',
						url: 'mathb'
					},
					{
						title: 'Профильный уровень',
						mobileTitle: 'профиль',
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
				className={`NavMain ${className} ${className}_mobile`}
				onClick={toggleMobileMenu}
			>
				≡ {subjectList[0] && subjectList[0].title}
			</nav>

			<nav
				className={cx(
					'NavMain',
					'NavMain_desktop',
					className,
					`${className}_desktop`,
					{ NavMain_show: mobileMenu }
				)}
			>
				{subjectList.length > 0 &&
					subjectList.map(({ title, url, sublist }, i) => {
						if (sublist) {
							return (
								<div
									className="NavMain-Link NavMain_desktop-Link NavMain-PopupBlock"
									key={i}
								>
									<div className="NavMain-Tab NavMain_desktop-Tab NavMain-PopupTitle">
										≡ {title}
									</div>

									<div className="NavMain-Popup">
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
													<div className="NavMain-Tab NavMain_desktop-Tab NavMain-PopupTab">
														<span className="NavMain-PopupLink NavMain-PopupLink_mobile">
															{title +
																' ' +
																sublistItem.mobileTitle}
														</span>
														<span className="NavMain-PopupLink NavMain-PopupLink_desktop">
															{sublistItem.title}
														</span>
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
		</>
	);
};

export default NavMain;
