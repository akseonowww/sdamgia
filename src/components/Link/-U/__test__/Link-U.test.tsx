import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import LinkU from '../'

describe('Link-U', () => {
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

  it('renders with or without a className', () => {
    act(() => {
      render(<LinkU>Common link with more clickable zone</LinkU>, container)
    })
    expect(container && container.textContent).toBe(
      'Common link with more clickable zone'
    )

    act(() => {
      render(
        <LinkU className="Link_wrap-U Link_pseudo-U Link_pseudoBlack-U">
          Pseudo black link with more clickable zone
        </LinkU>,
        container
      )
    })
    expect(container && container.textContent).toBe(
      'Pseudo black link with more clickable zone'
    )
  })

  it('should render a content', () => {
    act(() => {
      render(<LinkU>Common link with more clickable zone</LinkU>, container)
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <LinkU className="Link_wrap-U Link_pseudo-U Link_pseudoBlack-U">
          Pseudo black link with more clickable zone
        </LinkU>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
