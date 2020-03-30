import React, { FC, ReactNode } from 'react'
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom'
import cx from 'classnames'

import './Link.scss'
import './_selected/Link_selected.scss'

interface ILinkProps {
  className?: string
  activeClassName?: string | boolean
  to?: string
  href?: string
  exact?: boolean
  title?: string
  children: ReactNode
}

const Link: FC<ILinkProps> = ({
  className,
  activeClassName,
  to,
  href = '/',
  title,
  exact = false,
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
