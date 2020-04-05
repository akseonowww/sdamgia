import React, { FC, Fragment } from 'react'
import cx from 'classnames'

import Link from 'components/Link'
import './Footer.scss'

import spbsut from './assets/spbsut.png'

interface IFooterProps {
  className?: string
}

const Footer: FC<IFooterProps> = ({ className }) => (
  <footer className={cx('Footer', className)}>
    <nav className="Footer-Menu">
      {[
        {
          href: '/about',
          text: 'О проекте',
        },
        {
          href: '/staff',
          text: 'Редакция',
        },
        {
          href: '/legal',
          text: 'Правовая информация',
        },
      ].map(({ href, text }, i) => (
        <Fragment key={`Footer-Link${i}`}>
          <Link className="Link_black" href={href}>
            {text}
          </Link>
          {i < 2 && ' · '}
        </Fragment>
      ))}
    </nav>
    <a
      className="Footer-Ad"
      href="http://priem.sut.ru/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={spbsut} alt="СПб ГУТ!" title="priem.sut.ru" width="160" />
    </a>
    <div className="Footer-Copyright">
      ©&nbsp;Гущин Д. Д., 2011—{new Date().getFullYear()}
    </div>
  </footer>
)

export default Footer
