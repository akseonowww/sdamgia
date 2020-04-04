import React, { ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import Section from '../Section'
import Grid from '../Grid'
import './TwoColumns.scss'

interface ITwoColumnsProps {
  children: ReactNode[]
}

const TwoColumns = ({ children }: ITwoColumnsProps) => {
  const twoColumns = cn('TwoColumns')

  return (
    <Section>
      <Grid className={cx(twoColumns('Grid'))}>
        <div
          className={cx(twoColumns('Col'), twoColumns('Col_1'))}
        >
          {children[0]}
        </div>
        <div
          className={cx(twoColumns('Col'), twoColumns('Col_2'))}
        >
          {children[1]}
        </div>
      </Grid>
    </Section>
  )
}

export default TwoColumns
