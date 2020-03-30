import React, { FC, ReactNode } from 'react'
import cx from 'classnames'

import Link from 'components/Link'
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
    <Link className={cx('VariantLink', className)} to={to} title={title}>
      {!Number.isNaN(Number(children)) && dataWordClassName && (
        <span className={dataWordClassName}>Вариант&nbsp;</span>
      )}
      {children}
    </Link>
  )
}

export default VariantLink
