import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { getNavSideList, IPage } from 'utils/navSideList'
import 'components/Link/_black/Link_black.scss'
import LinkWrap from 'components/Link/_wrap'
import './NavSide.scss'

const NavSide = () => {
  const [pages, setPages] = useState<Array<IPage> | null>(null)

  useEffect(() => {
    axios
      .get('http://sidorchik.ru/reshuege/api/sidebar/menu/')
      .then((response) => response.data)
      .then((data) =>
        data.map(({ url, exact, text, hint }: IPage) => ({
          url,
          exact,
          text,
          hint,
        }))
      )
      .then((data) => setPages(data))
      .catch((error) => {
        console.log(error)

        const data = getNavSideList()
        setPages(data)
      })
  }, [])

  return (
    <div className="NavSide">
      {pages &&
        pages.map(({ url, exact, text, hint }: IPage, i: number) => (
          <LinkWrap
            className="Link_black NavSide-Link"
            activeClassName="NavLink_selected"
            classNameU="Link_black-U"
            to={url}
            exact={exact}
            title={hint}
            key={i}
          >
            {text}
          </LinkWrap>
        ))}
    </div>
  )
}

export default NavSide
