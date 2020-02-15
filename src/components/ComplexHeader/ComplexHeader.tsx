import React, { FC, ReactChildren } from 'react'
import cx from 'classnames'

import './ComplexHeader.scss'

interface IComplexHeaderProps {
  className?: string
  children: ReactChildren
}

const ComplexHeader: FC<IComplexHeaderProps> = ({ className, children }) => (
  <div className={cx('ComplexHeader', className)}>{children}</div>
)

export default ComplexHeader
