import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import LinkWrap from '../_wrap'
import './Link_pseudo.scss'

interface ILink_pseudoProps {
  className?: string
  handleClick: () => void
  children: ReactNode
}

const Link_pseudo: FC<ILink_pseudoProps> = ({
  className,
  handleClick,
  children,
}) => {
  const link = cn('Link')
  const link_pseudo = cn(link({ pseudo: true }))
  const link_pseudoU = () => link_pseudo('U').split(' ')[1]

  return (
    <LinkWrap
      className={cx(link_pseudo(), className)}
      classNameU={link_pseudoU()}
      handleClick={handleClick}
    >
      {children}
    </LinkWrap>
  )
}

export default Link_pseudo
