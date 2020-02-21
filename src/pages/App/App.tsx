import React, { FC } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import NavMain from './components/NavMain'
import Footer from './components/Footer'
import Student from '../Student'
import Test from '../Test'
import './App.scss'

import contentBannerTopAd from './assets/contentBannerTopAd.png'
import contentBannerBottomAd from './assets/contentBannerBottomAd.png'
import ChatButton from '../../components/ChatButton/ChatButton'

const App: FC = () => (
  <div className="App">
    <BrowserRouter>
      <div className="PageLayout StartPage">
        <Header className="PageLayout-Header" />

        <NavMain className="PageLayout-Nav" />

        <div className="PageLayout-Grid">
          <Sidebar />

          <div className="PageLayout-Content">
            <main className="PageLayout-Main">
              <img
                className="PageLayout-BannerAd PageLayout-BannerAd_top"
                src={contentBannerTopAd}
                alt="Реклама"
              />

              <Switch>
                <Route path="/" component={Student} exact />
                <Route path="/test" component={Test} />
                <Redirect to="/" />
              </Switch>

              <img
                className="PageLayout-BannerAd"
                src={contentBannerBottomAd}
                alt="Реклама"
              />
            </main>

            <Footer className="PageLayout-Footer" />
          </div>
        </div>
      </div>
      <ChatButton />
    </BrowserRouter>
  </div>
)

export default App
