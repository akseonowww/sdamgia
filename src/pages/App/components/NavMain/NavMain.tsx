import React, { FC, useState, useEffect, useCallback } from 'react'
import cx from 'classnames'

import { getSubjectList, ISubject, ISubjectLevel } from 'utils/subjectList'
import './NavMain.scss'

interface INavMainProps {
	className?: string
}

const NavMain: FC<INavMainProps> = ({ className }) => {
	const [mobileMenu, setMobileMenu] = useState<boolean>(false)
	const [subjectList, setSubjectList] = useState<Array<ISubject>>([])

	const exam = 'ege'

	const getUrl = useCallback((popupItem, exam) => {
		return `https://${popupItem}-${exam}.sdamgia.ru`
	}, [])

	const toggleMobileMenu = useCallback(() => {
		setMobileMenu(!mobileMenu)
	}, [mobileMenu])

	useEffect(() => {
		const data = getSubjectList()
		setSubjectList(data)
	}, [])

	return (
		<>
			<nav
				className={cx('NavMain', className, `${className}_mobile`)}
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
					subjectList.map(({ title, url, levels }, i) => {
						if (levels) {
							return (
								<div
									className="NavMain-Link NavMain_desktop-Link NavMain-PopupBlock"
									key={i}
								>
									<div className="NavMain-Tab NavMain_desktop-Tab NavMain-PopupTitle">
										≡ {title}
									</div>

									<div style={{ clear: 'right' }} />
									<div className="NavMain-Popup">
										{levels.map(
											(levelsItem: ISubjectLevel, levelsI: number) => (
												<a
													className="NavMain-Link NavMain_desktop-Link"
													href={getUrl(levelsItem.url, exam)}
													rel="nofollow"
													key={levelsI}
												>
													<div className="NavMain-Tab NavMain_desktop-Tab NavMain-PopupTab">
														<span className="NavMain-PopupLink NavMain-PopupLink_mobile">
															{title + ' ' + levelsItem.mobileTitle}
														</span>
														<span className="NavMain-PopupLink NavMain-PopupLink_desktop">
															{levelsItem.title}
														</span>
													</div>
												</a>
											)
										)}
									</div>
								</div>
							)
						} else {
							return (
								<a
									className="NavMain-Link NavMain_desktop-Link"
									href={getUrl(url, exam)}
									rel="nofollow"
									key={i}
								>
									<div className="NavMain-Tab NavMain_desktop-Tab">{title}</div>
								</a>
							)
						}
					})}

				<div style={{ clear: 'both' }}></div>
			</nav>
		</>
	)
}

export default NavMain
