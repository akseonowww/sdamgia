import React, { FC, ReactNode } from 'react'

import './Title.scss'

interface ITitleProps {
  children: ReactNode
}

const Title: FC<ITitleProps> = ({ children }) => (
  <h2 className="Title">{children}</h2>
)

export default Title
