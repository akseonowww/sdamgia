import React, { FC, useState, useEffect, useCallback } from 'react'
import cx from 'classnames'

import getSubjectList from 'utils/subjectList'
import './NavMain.scss'

interface INavMainProps {
	className?: string
}

const NavMain: FC<INavMainProps> = ({ className }) => {
	const [mobileMenu, setMobileMenu] = useState<boolean>(false)
	const [subjectList, setSubjectList] = useState<Array<any>>([])

	const exam = 'ege'

	const getUrl = useCallback((popupItem, exam) => {
		return `https://${popupItem}-${exam}.sdamgia.ru`
	}, [])

	const toggleMobileMenu = useCallback(() => {
		setMobileMenu(!mobileMenu)
	}, [mobileMenu])

	useEffect(() => {
		setSubjectList(getSubjectList())
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

									<div style={{ clear: 'right' }} />
									<div className="NavMain-Popup">
										{sublist.map((sublistItem: any, sublistI: any) => (
											<a
												className="NavMain-Link NavMain_desktop-Link"
												href={getUrl(sublistItem.url, exam)}
												rel="nofollow"
												key={sublistI}
											>
												<div className="NavMain-Tab NavMain_desktop-Tab NavMain-PopupTab">
													<span className="NavMain-PopupLink NavMain-PopupLink_mobile">
														{title + ' ' + sublistItem.mobileTitle}
													</span>
													<span className="NavMain-PopupLink NavMain-PopupLink_desktop">
														{sublistItem.title}
													</span>
												</div>
											</a>
										))}
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
