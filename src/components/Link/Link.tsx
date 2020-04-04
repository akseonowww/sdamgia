import React, { FC, ReactNode } from 'react'
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom'
import cx from 'classnames'

import './Link.scss'
import './_selected/Link_selected.scss'

interface ILinkProps {
  className?: string
  classNameU?: string
  activeClassName?: string | boolean
  to?: string
  href?: string
  exact?: boolean
  title?: string
  handleClick?: () => void
  children: ReactNode
}

const Link: FC<ILinkProps> = ({
  className,
  classNameU,
  activeClassName,
  to,
  href = '/',
  title,
  exact = false,
  handleClick,
  children,
}) => {
  if (to && (activeClassName || exact)) {
    return (
      <RouterNavLink
        className={cx('Link', className)}
        activeClassName={cx('Link_selected', activeClassName)}
        to={to}
        exact={exact}
        title={title}
      >
        {children}
      </RouterNavLink>
    )
  }

  if (to) {
    return (
      <RouterLink className={cx('Link', className)} to={to} title={title}>
        {children}
      </RouterLink>
    )
  }

  if (handleClick && classNameU) {
    return (
      <div className={className} onClick={handleClick}>
        <u className={cx('Link-U', classNameU)}>{children}</u>
      </div>
    )
  }

  if (handleClick) {
    return (
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    )
  }

  if (classNameU) {
    return (
      <a
        className={className}
        href={href}
        rel="noopener noreferrer"
        title={title}
      >
        <u className={cx('Link-U', classNameU)}>{children}</u>
      </a>
    )
  }

  return (
    <a
      className={cx('Link', className)}
      href={href}
      rel="noopener noreferrer"
      title={title}
    >
      {children}
    </a>
  )
}

export default Link
