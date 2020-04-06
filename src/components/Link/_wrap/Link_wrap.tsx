import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import Link from '..'
import './Link_wrap.scss'

interface ILink_wrapProps {
  className?: string
  activeClassName?: string
  classNameU?: string
  to?: string
  href?: string
  exact?: boolean
  title?: string
  customChildren?: boolean
  handleClick?: () => void
  children: ReactNode
}

const Link_wrap: FC<ILink_wrapProps> = ({
  className,
  activeClassName,
  classNameU,
  to,
  href = '/',
  exact,
  title,
  customChildren,
  handleClick,
  children,
}) => {
  const link = cn('Link')
  const link_wrap = cn(link({ wrap: true }))
  const link_wrapU = () => link_wrap('U').split(' ')[1]

  if (customChildren) {
    return (
      <Link className={cx(link_wrap(), className)} handleClick={handleClick}>
        {children}
      </Link>
    )
  }

  if (handleClick) {
    return (
      <Link
        className={cx(link_wrap(), className)}
        classNameU={cx(link_wrapU(), classNameU)}
        handleClick={handleClick}
      >
        {children}
      </Link>
    )
  }

  if (to && activeClassName) {
    return (
      <Link
        className={cx(link_wrap(), className)}
        activeClassName={activeClassName}
        classNameU={cx(link_wrapU(), classNameU)}
        to={to}
        exact={exact}
        title={title}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link
      className={cx(link_wrap(), className)}
      classNameU={cx(link_wrapU(), classNameU)}
      href={href}
    >
      {children}
    </Link>
  )
}

export default Link_wrap
