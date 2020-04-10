import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import './Button.scss'

interface IButtonProps {
  className?: string
  type?: 'button' | 'submit' | 'reset'
  tabIndex?: number
  handleClick?: () => void
  children: ReactNode
}

const Button: FC<IButtonProps> = ({
  className,
  type,
  tabIndex,
  handleClick,
  children,
}) => {
  const button = cn('Button')

  return (
    <button
      className={cx(button(), className)}
      type={type}
      tabIndex={tabIndex}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
