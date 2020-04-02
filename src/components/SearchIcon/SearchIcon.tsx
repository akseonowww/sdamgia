import React, { FC } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import './SearchIcon.scss'

interface ISearchIconProps {
  className?: string
}

const SearchIcon: FC<ISearchIconProps> = ({ className }) => {
  const searchIcon = cn('SearchIcon')

  return (
    <div className={cx(searchIcon(), className)}>
      <svg
        className={searchIcon('Svg')}
        version="1.1"
        viewBox="0 0 27.9 50"
        x="0px"
        y="0px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={searchIcon('Lens')}
          cx="10.9"
          cy="24.1"
          r="9.4"
        ></circle>
        <rect
          className={searchIcon('Handle')}
          width="3"
          height="14.5"
          x="20"
          y="27.6"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -18.3066 25.467)"
        ></rect>
      </svg>
    </div>
  )
}

export default SearchIcon
