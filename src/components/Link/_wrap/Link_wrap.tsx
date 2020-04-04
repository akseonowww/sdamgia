import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import Link from '..'
import './Link_wrap.scss'

interface ILink_wrapProps {
  className?: string
  classNameU?: string
  href?: string
  handleClick?: () => void
  children: ReactNode
}

const Link_wrap: FC<ILink_wrapProps> = ({
  className,
  classNameU,
  href,
  handleClick,
  children,
}) => {
  const link = cn('Link')
  const link_wrap = cn(link({ wrap: true }))
  const link_wrapU = () => link_wrap('U').split(' ')[1]

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
