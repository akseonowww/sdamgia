import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import '../Link/Link.scss'
import './VariantLink.scss'

export interface IVariantLinkProps {
  className?: string
  to: string
  title?: string
  children: ReactNode
  'data-wordClassName'?: string
}

const VariantLink: FC<IVariantLinkProps> = props => {
  const { className, to, children, title } = props
  const dataWordClassName = props['data-wordClassName']

  return (
    <Link
      className={cx('Link', 'VariantLink', className)}
      to={to}
      title={title}
    >
      {!Number.isNaN(Number(children)) && dataWordClassName && (
        <span className={dataWordClassName}>Вариант&nbsp;</span>
      )}
      {children}
    </Link>
  )
}

export default VariantLink
