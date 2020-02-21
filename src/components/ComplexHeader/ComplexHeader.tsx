import React, { FC, ReactNode } from 'react'
import cx from 'classnames'

import './ComplexHeader.scss'

interface IComplexHeaderProps {
  className?: string
  children: ReactNode
}

const ComplexHeader: FC<IComplexHeaderProps> = ({ className, children }) => (
  <div className={cx('ComplexHeader', className)}>{children}</div>
)

export default ComplexHeader
