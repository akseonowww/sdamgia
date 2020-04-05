import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import './Grid.scss'

interface IGridProps {
  className?: string
  children: ReactNode
}

const Grid: FC<IGridProps> = ({ className, children }) => {
  const grid = cn('Grid')

  return <div className={cx(grid(), className)}>{children}</div>
}
export default Grid
