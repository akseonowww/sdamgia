import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import ChatButton from '../ChatButton'

describe('ChatButton', () => {
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

  it('renders without crashing', () => {
    act(() => {
      render(<ChatButton />, container)
    })
    expect(container && container.textContent).toBe('Чат')
  })

  it('should render a content', () => {
    act(() => {
      render(<ChatButton />, container)
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
