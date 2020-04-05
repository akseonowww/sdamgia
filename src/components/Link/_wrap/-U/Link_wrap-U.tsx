import React, { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import LinkU from 'components/Link/-U'

interface ILinkUProps {
  className?: string
  children: ReactNode
}

const Link_wrapU: FC<ILinkUProps> = ({ className, children }) => {
  const link_wrap = cn('Link_wrap')

  return <LinkU className={cx(link_wrap('U'), className)}>{children}</LinkU>
}

export default Link_wrapU
