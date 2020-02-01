import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../header'
import './Layout.scss'

interface ILayoutProps {
	children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<div className="Layout StartPage">
				<Header
					className="Layout-Header"
					siteTitle={data.site.siteMetadata.title}
				/>
				Навигация
				<div className="Layout-Grid">
					Сайдбар
					<div className="Layout-Content">
						<main className="PageLayout-Main">{children}</main>
						<footer>
							© {new Date().getFullYear()}, Built with
							{` `}
							<a href="https://www.gatsbyjs.org">Gatsby</a>
						</footer>
					</div>
				</div>
			</div>
		</>
	)
}

export default Layout
