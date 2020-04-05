import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import './Section.scss'

interface ISectionProps {
  className?: string
  children: ReactNode
}

const Section: FC<ISectionProps> = ({ className, children }) => {
  const section = cn('Section')

  return <section className={cx(section(), className)}>{children}</section>
}

export default Section
