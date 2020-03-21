import React, { ReactNode } from 'react'
import cx from 'classnames'

import './ButtonVk.scss'

interface IButtonVKProps {
  className?: string
  url: string
  children: ReactNode
}

const ButtonVk = ({ className, url, children }: IButtonVKProps) => (
  <a className={cx('ButtonVk', className)} href={url} rel="noopener noreferrer">
    {children}
  </a>
)

export default ButtonVk
