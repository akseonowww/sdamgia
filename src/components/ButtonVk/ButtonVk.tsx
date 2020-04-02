import React, { ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import './ButtonVk.scss'

interface IButtonVkProps {
  className?: string
  url: string
  children: ReactNode
}

const ButtonVk = ({ className, url, children }: IButtonVkProps) => {
  const buttonVk = cn('ButtonVk')

  return (
    <a
      className={cx(buttonVk(), className)}
      href={url}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default ButtonVk
