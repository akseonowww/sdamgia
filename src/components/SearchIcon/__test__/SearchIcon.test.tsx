import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import SearchIcon from '../SearchIcon'

describe('SearchIcon', () => {
  let container: HTMLElement | null = null

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container)
      container.remove()
      container = null
    }
  })

  it('should render an icon', () => {
    act(() => {
      render(<SearchIcon />, container)
    })
    if (container) expect(pretty(container.outerHTML)).toMatchSnapshot()
  })
})
