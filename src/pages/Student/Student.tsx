import React from 'react'

import OurVariants from './components/OurVariants'
import LarinVariants from './components/LarinVariants'
import Constructor from './components/Constructor'
import TwoColumns from 'components/TwoColumns/TwoColumns'
import TeacherVariant from './components/TeacherVariant'
import CatalogSearch from './components/CatalogSearch'

const Student = () => (
  <>
    <OurVariants />

    <LarinVariants />

    <TwoColumns>
      <TeacherVariant />
      <CatalogSearch />
    </TwoColumns>

    <Constructor />
  </>
)

export default Student
