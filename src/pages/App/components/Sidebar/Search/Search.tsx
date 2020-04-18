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
    <form
      className={cx('Search', className)}
      action="/problem"
      method="POST"
      data-testid="Search"
    >
      <label
        className="Search-Label"
        title="Для поиска нажмите клавишу Enter"
        data-testid="Search-Label"
      >
        <SearchIcon className="Search-Icon" data-testid="Search-Icon" />
        <Input
          className="Search-Input"
          name="id"
          value={value}
          placeholder="№/текст задания"
          setValue={setValue}
          data-testid="Search-Input"
        />
      </label>
    </form>
  )
}

export default Search
