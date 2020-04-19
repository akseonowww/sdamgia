import React from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import './HelpButton.scss'

const HelpButton = () => {
  const helpButton = cn('HelpButton')

  return
  ;<div className={cx(helpButton())}></div>
}

export default HelpButton
