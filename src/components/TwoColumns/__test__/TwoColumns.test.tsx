import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import TwoColumns from '../TwoColumns'

describe('TwoColumns', () => {
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
      render(
        <TwoColumns>
          <div>First Col</div>
          <div>Second Col</div>
        </TwoColumns>,
        container
      )
    })
    expect(container && container.textContent).toBe('First ColSecond Col')
  })

  it('should render a content', () => {
    act(() => {
      render(
        <TwoColumns>
          <div>First Col</div>
          <div>Second Col</div>
        </TwoColumns>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
