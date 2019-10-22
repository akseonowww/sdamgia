import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	NavLink,
	Redirect
} from 'react-router-dom';

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
					<header className="Header">
						<NavLink to="/" exact activeClassName="Link_selected">
							<img
								src="https://ege.sdamgia.ru/img/headers/logo.svg"
								className="Header-Logo"
								alt="Сдам ГИА"
							/>
						</NavLink>
						<img
							className="header_subj_logo"
							src="https://math.reshuct.by/img/headers/math.png"
							style={{
								float: 'right',
								height: '100px',
								margin: '5px'
							}}
							alt="Математика"
						/>
						<div className="header-title">
							<a
								className="header-link"
								target="_blank"
								rel="noopener noreferrer"
								href="https://sdamgia.ru"
							>
								СДАМ ГИА
							</a>
							:{' '}
							<NavLink
								to="/"
								exact
								className="header-link"
								activeClassName="header-link_selected Link_selected"
							>
								РЕШУ ЕГЭ
							</NavLink>
						</div>
						<div className="header_site_info">
							Образовательный портал для подготовки к экзаменам
						</div>
						<div className="header_subj_name">
							Математика профильного уровня
						</div>
						<div style={{ clear: 'both' }}></div>
					</header>

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
