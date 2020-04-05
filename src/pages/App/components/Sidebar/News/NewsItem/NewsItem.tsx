import React, { FC } from 'react'
import cx from 'classnames'

import Link from 'components/Link'
import 'components/Link/_wrap/Link_wrap.scss'
import LinkWrapU from 'components/Link/_wrap/-U'
import 'components/Link/_white/Link_white.scss'

export interface INewsItemProps {
  type: string
  date?: string | null
  text: string
  url: string
}

const NewsItem: FC<INewsItemProps> = ({ type, date, text, url }) => {
  return (
    <Link
      className={cx(
        {
          Link_static: type !== 'urgent',
          'Link_white Link_wrap': type === 'urgent',
        },
        'News-Item',
        {
          [`News-Item_${type}`]: type !== 'default',
        }
      )}
      href={url}
    >
      {type !== 'urgent' && (
        <>
          <div className="News-Date Smallcapitals">{date}</div>
          <div className="News-Text">{text}</div>
        </>
      )}

      {type === 'urgent' && (
        <LinkWrapU className="Link_white-U">{text}</LinkWrapU>
      )}
    </Link>
  )
}

export default NewsItem
