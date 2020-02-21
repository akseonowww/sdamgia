import React, { FC, ReactNode } from 'react'
import cx from 'classnames'

import './Section.scss'

interface ISectionProps {
  className?: string
  children: ReactNode
}

const Section: FC<ISectionProps> = ({ className, children }) => (
  <section className={cx('Section', className)}>{children}</section>
)

export default Section
