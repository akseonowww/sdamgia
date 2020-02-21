import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import '../Link/Link.scss'
import './VariantsLink.scss'

interface IVariantsLinkProps {
  className?: string
  to: string
  children: ReactNode
  'data-wordClassName'?: string
}

const VariantsLink: FC<IVariantsLinkProps> = props => {
  const { className, to, children } = props
  const dataWordClassName = props['data-wordClassName']

  return (
    <Link className={cx('Link', 'VariantsLink', className)} to={to}>
      {!Number.isNaN(Number(children)) && dataWordClassName && (
        <span className={dataWordClassName}>Вариант&nbsp;</span>
      )}
      {children}
    </Link>
  )
}

export default VariantsLink
