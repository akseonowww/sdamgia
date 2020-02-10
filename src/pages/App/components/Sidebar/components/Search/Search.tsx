import React, { FC } from 'react'
import cx from 'classnames'

import SearchIcon from 'components/SearchIcon/SearchIcon'
import 'components/Input/Input.scss'
import './Search.scss'

interface ISearchProps {
  className?: string
}

const Search: FC<ISearchProps> = ({ className }) => (
  <form className={cx('Search', className)} action="/problem" method="POST">
    <label className="Search-Label" title="Для поиска нажмите клавишу Enter">
      <input
        className="Input Search-Input"
        type="text"
        name="id"
        placeholder="№/текст задания"
      />
      <SearchIcon className="Search-SearchIcon" />
    </label>
  </form>
)

export default Search
