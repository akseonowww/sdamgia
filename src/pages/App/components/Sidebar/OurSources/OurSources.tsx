import React, { FC } from 'react'
import cx from 'classnames'

import './OurSources.scss'

interface IOurSources {
  className?: string
}

const OurSources: FC<IOurSources> = ({ className }) => (
  <div className="OurSources">
    <div className={cx('OurSources-Desc', className)}>
      Мобильные приложения:
    </div>
    <a
      className="OurSources-ButtonStore OurSources-ButtonStore_android"
      href="https://play.google.com/store/apps/details?id=com.reshuege"
      target="_blank"
      rel="noopener noreferrer"
      title="Андроиды"
    >
      {' '}
    </a>
    <a
      className="OurSources-ButtonStore OurSources-ButtonStore_ios"
      href="https://appsto.re/ru/TSavbb.i"
      target="_blank"
      rel="noopener noreferrer"
      title="Джобсы"
    >
      {' '}
    </a>
  </div>
)

export default OurSources
