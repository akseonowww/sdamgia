import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/Layout'
import Image from '../../components/image'
import SEO from '../../components/SEO'
import LarinVariants from './components/LarinVariants'

const Student = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
		<LarinVariants />
		<Link to="/test/">Go to test page</Link>
	</Layout>
)

export default Student
