import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import NavMain from './components/NavMain/NavMain';
import Footer from './components/Footer/Footer';
import Student from '../Student';
import Test from '../Test';
import './App.scss';

import contentBannerTopAd from './assets/contentBannerTopAd.png';
import contentBannerBottomAd from './assets/contentBannerBottomAd.png';

function App() {
	return (
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
									className="BannerAd PageLayout-BannerAd_top"
									src={contentBannerTopAd}
									alt="Реклама"
								/>

								<Switch>
									<Route path="/" component={Student} exact />
									<Route path="/test" component={Test} />
									<Redirect to="/" />
								</Switch>

								<img
									className="BannerAd"
									src={contentBannerBottomAd}
									alt="Реклама"
								/>
							</main>

							<Footer className="PageLayout-Footer" />
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
