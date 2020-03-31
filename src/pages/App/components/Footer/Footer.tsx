import React, { FC } from 'react'
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
      <Link className="Link_black" href="/about">
        О проекте
      </Link>{' '}
      ·{' '}
      <Link className="Link_black" href="/staff">
        Редакция
      </Link>{' '}
      ·{' '}
      <Link className="Link_black" href="/legal">
        Правовая&nbsp;информация
      </Link>{' '}
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
