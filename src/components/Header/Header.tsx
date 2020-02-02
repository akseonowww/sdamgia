import React, { FC } from 'react'
import { cn } from '@bem-react/classname'

interface IHeaderProps {
	siteTitle?: string
	className?: string
}

const Header: FC<IHeaderProps> = ({ siteTitle = '' }) => {
	const header = cn('Header')

	return <header className={header()}>Шапка «{siteTitle}»</header>
}

export default Header
