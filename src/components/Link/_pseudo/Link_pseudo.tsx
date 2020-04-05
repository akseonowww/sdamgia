import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import Link from '..'
import LinkWrap from '../_wrap'
import './Link_pseudo.scss'

interface ILink_pseudoProps {
  className?: string
  customChildren?: boolean
  handleClick: () => void
  children: ReactNode
}

const Link_pseudo: FC<ILink_pseudoProps> = ({
  className,
  customChildren,
  handleClick,
  children,
}) => {
  const link = cn('Link')
  const link_pseudo = cn(link({ pseudo: true }))
  const link_pseudoU = () => link_pseudo('U').split(' ')[1]

  if (customChildren) {
    return (
      <LinkWrap
        className={cx(link_pseudo(), className)}
        classNameU={link_pseudoU()}
        customChildren={customChildren}
        handleClick={handleClick}
      >
        {children}
      </LinkWrap>
    )
  }

  return (
    <Link className={cx(link_pseudo(), className)} handleClick={handleClick}>
      {children}
    </Link>
  )
}

export default Link_pseudo
