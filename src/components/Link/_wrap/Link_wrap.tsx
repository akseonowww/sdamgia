import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import Link from '..'
import './Link_wrap.scss'

interface ILink_wrapProps {
  className?: string
  href?: string
  children: ReactNode
}

const Link_wrap: FC<ILink_wrapProps> = ({ className, href, children }) => {
  const link = cn('Link')
  const link_wrap = cn(link({ wrap: true }))

  return (
    <Link className={cx(link_wrap(), className)} href={href}>
      <u className={cx(link('U'), link_wrap('U'))}>{children}</u>
    </Link>
  )
}

export default Link_wrap
