import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

interface ILinkUProps {
  className?: string
  children: ReactNode
}

const LinkU: FC<ILinkUProps> = ({ className, children }) => {
  const link = cn('Link')

  return <u className={cx(link('U'), className)}>{children}</u>
}

export default LinkU
