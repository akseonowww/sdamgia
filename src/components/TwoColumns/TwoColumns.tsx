import React, { ReactNode } from 'react'

import Section from '../Section'
import Grid from '../Grid'
import './TwoColumns.scss'

interface ITwoColumnsProps {
  children: ReactNode[]
}

const TwoColumns = ({ children }: ITwoColumnsProps) => (
  <Section>
    <Grid className="TwoColumns-Grid">
      <div className="TwoColumns-Col TwoColumns-Col_1">{children[0]}</div>
      <div className="TwoColumns-Col TwoColumns-Col_2">{children[1]}</div>
    </Grid>
  </Section>
)

export default TwoColumns
