import React, { FC, useState } from 'react'
import cx from 'classnames'

import SearchIcon from 'components/SearchIcon/SearchIcon'
import Input from 'components/Input'
import './Search.scss'

interface ISearchProps {
  className?: string
}

const Search: FC<ISearchProps> = ({ className }) => {
  const [value, setValue] = useState('')

  return (
    <form className={cx('Search', className)} action="/problem" method="POST">
      <label className="Search-Label" title="Для поиска нажмите клавишу Enter">
        <Input
          className="Search-Input"
          name="id"
          value={value}
          placeholder="№/текст задания"
          setValue={setValue}
        />
        <SearchIcon className="Search-SearchIcon" />
      </label>
    </form>
  )
}

export default Search
