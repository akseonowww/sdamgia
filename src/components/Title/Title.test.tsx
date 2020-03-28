import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import Title from './Title'

describe('Title', () => {
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

  it('renders with one child and more', () => {
    act(() => {
      render(<Title>Variants</Title>, container)
    })
    expect(container && container.textContent).toBe('Variants')

    act(() => {
      render(
        <Title>
          <span>Variants</span>
          <span>2020</span>
        </Title>,
        container
      )
    })
    expect(container && container.textContent).toBe('Variants2020')
  })

  it('should render a content', () => {
    act(() => {
      render(<Title>Variants</Title>, container)
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <Title>
          <span>Variants</span>
          <span>2020</span>
        </Title>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
