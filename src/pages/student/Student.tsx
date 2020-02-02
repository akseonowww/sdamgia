import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import LarinVariants from './components/LarinVariants'

const Student = () => (
  <Layout>
    <SEO title="Home" />
    <LarinVariants />
    <Link to="/test/">Тест</Link>
  </Layout>
)

export default Student
