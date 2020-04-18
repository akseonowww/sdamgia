import React, { useState, useCallback } from 'react'
import cx from 'classnames'

import NavSide from './NavSide'
import Search from './Search'
import ProfileWidget from './ProfileWidget/ProfileWidget'
import News from './News/News'
import OurSources from './OurSources/OurSources'
import './Sidebar.scss'

import sidebarBannerTopAd from './assets/sidebarBannerTopAd.gif'
import sidebarBannerBottomAd from './assets/sidebarBannerBottomAd.png'

const Sidebar = () => {
  const [mobileSidebar, setMobileSidebar] = useState(false)

  const toggleMobileSidebar = useCallback(() => {
    setMobileSidebar(!mobileSidebar)
  }, [mobileSidebar])

  return (
    <>
      <aside className="SidebarBtns" onClick={toggleMobileSidebar}>
        сайты - меню - вход - новости
      </aside>

      <aside
        className={cx('Sidebar', 'PageLayout-Sidebar', {
          Sidebar_shown: mobileSidebar,
        })}
      >
        <div className="Sidebar-Sites">
          <a className="Sidebar-SitesLink" href="https://sdamgia.ru">
            СДАМ ГИА
          </a>
          <a className="Sidebar-SitesLink" href="https://ege.sdamgia.ru">
            РЕШУ ЕГЭ
          </a>
          <a className="Sidebar-SitesLink" href="https://oge.sdamgia.ru">
            РЕШУ ОГЭ
          </a>
          <a className="Sidebar-SitesLink" href="https://vpr.sdamgia.ru">
            РЕШУ ВПР
          </a>
          <a className="Sidebar-SitesLink" href="https://ct.sdamgia.ru">
            РЕШУ ЦТ
          </a>
        </div>

        <div className="SidebarApp">
          <a
            href="https://ege-study.ru/online-repeticionniy-matematika?utm_source=sdamgia&amp;utm_medium=sdamgia&amp;utm_campaign=online_probniy_sent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={sidebarBannerTopAd} alt="Наши друзья. Рекомендуем" />
          </a>
        </div>

        <NavSide />

        <Search className="Sidebar-Search" />

        <div className="Info">
          <ProfileWidget className="Info-Item Info-ProfileWidget" />

          <News />

          <OurSources className="Info-Item" />
        </div>

        <img
          className="Sidebar-BannerAd Sidebar-BannerAd "
          src={sidebarBannerBottomAd}
          alt="Реклама"
        />
      </aside>
    </>
  )
}

export default Sidebar
