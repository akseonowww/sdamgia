import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import { getNavSideList, IPage } from 'utils/navSideList'
import './NavSide.scss'

const NavSide = () => {
  const [pages, setPages] = useState<Array<IPage> | null>(null)

  useEffect(() => {
    axios
      .get('http://sidorchik.ru/reshuege/api/sidebar/menu/')
      .then(response => response.data)
      .then(data =>
        data.map(({ url, exact, text, hint }: IPage) => ({
          url,
          exact,
          text,
          hint,
        }))
      )
      .then(data => setPages(data))
      .catch(error => {
        console.log(error)

        const data = getNavSideList()
        setPages(data)
      })
  }, [])

  return (
    <div className="NavSide">
      {pages &&
        pages.map(({ url, exact, text, hint }: IPage, i: number) => (
          <NavLink
            className="Link Link_black Link_wrap NavSide-Link"
            activeClassName="NavLink_selected Link_selected"
            to={url}
            exact={exact}
            title={hint}
            key={i}
          >
            <u className="Link-U Link_black-U Link_wrap-U">{text}</u>
          </NavLink>
        ))}
    </div>
  )
}

export default NavSide
