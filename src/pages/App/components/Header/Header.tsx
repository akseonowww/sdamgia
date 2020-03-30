import React, { FC } from 'react'
import cx from 'classnames'

import Link from 'components/Link'
import './Header.scss'

interface IHeaderProps {
  className?: string
}

const Header: FC<IHeaderProps> = ({ className }) => (
  <header className={cx('Header', className)}>
    <div className="Header-Main">
      <Link activeClassName to="/" exact>
        <img
          className="Header-Logo"
          src="https://ege.sdamgia.ru/img/headers/logo.svg"
          alt="Сдам ГИА"
        />
      </Link>

      <div className="Header-Title">
        <Link className="Link_black Header-Link" href="https://sdamgia.ru">
          СДАМ ГИА
        </Link>
        :{' '}
        <Link className="Link_black Header-Link" activeClassName to="/" exact>
          РЕШУ ЕГЭ
        </Link>
      </div>
      <div className="Header-WebsiteDesc">
        Образовательный портал для подготовки к экзаменам
      </div>
      <div className="Header-SubjectTitle">Математика профильного уровня</div>
    </div>

    <img
      className="Header-SubjectImg"
      src="https://math.reshuct.by/img/headers/math.png"
      alt="Математика"
    />
  </header>
)

export default Header
