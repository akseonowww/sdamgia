import React, { FC, ReactNode } from 'react'
import cx from 'classnames'

import './Grid.scss'

interface IGridProps {
  className: string
  children: ReactNode
}

const Grid: FC<IGridProps> = ({ className, children }) => (
  <div className={cx('Grid', className)}>{children}</div>
)

export default Grid
