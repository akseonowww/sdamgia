import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import NavMain from './NavMain/NavMain';
import Student from '../../Student';
import Test from '../../Test';
import Footer from './Footer/Footer';
import './App.scss';

import helpButtonIcon from './assets/helpButtonIcon.png';
import contentBannerTopAd from './assets/contentBannerTopAd.png';
import contentBannerBottomAd from './assets/contentBannerBottomAd.png';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="PageLayout StartPage">
					<Header className="PageLayout-Header" />

					<NavMain className="PageLayout-Nav PageLayout-Nav_desktop" />
					<div className="Nav PageLayout-Nav PageLayout-Nav_mobile">
						≡ математика
					</div>

					<div className="PageLayout-Grid">
						<Sidebar />

						<div className="PageLayout-Content">
							<main className="PageLayout-Main">
								<img
									className="BannerAd"
									src={contentBannerTopAd}
									alt="Реклама"
								/>

								<Switch>
									<Route path="/" component={Student} exact />
									<Route path="/test" component={Test} />
									<Redirect to="/" />
								</Switch>

								<img
									className="BannerAd PageLayout-BannerAd"
									src={contentBannerBottomAd}
									alt="Реклама"
								/>
							</main>

							<Footer className="PageLayout-Footer" />
						</div>
					</div>
					<div
						className="HelpButton"
						style={{
							backgroundImage: `url(${helpButtonIcon})`
						}}
					></div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
