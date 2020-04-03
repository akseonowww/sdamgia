import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import './ComplexHeader.scss'

interface IComplexHeaderProps {
  className?: string
  children: ReactNode
}

const ComplexHeader: FC<IComplexHeaderProps> = ({ className, children }) => {
  const complexHeader = cn('ComplexHeader')

  return <div className={cx(complexHeader(), className)}>{children}</div>
}

export default ComplexHeader
