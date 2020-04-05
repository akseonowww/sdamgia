import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import './Title.scss'

interface ITitleProps {
  children: ReactNode
}

const Title: FC<ITitleProps> = ({ children }) => {
  const title = cn('Title')

  return <h2 className={cx(title())}>{children}</h2>
}

export default Title
