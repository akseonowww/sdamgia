import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import LinkWrapU from '..'

describe('Link_wrap-U', () => {
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
      render(<LinkWrapU>Link with more clickable zone</LinkWrapU>, container)
    })
    expect(container && container.textContent).toBe(
      'Link with more clickable zone'
    )

    act(() => {
      render(
        <LinkWrapU className="Link_pseudo-U Link_pseudoBlack-U">
          Link with more clickable zone
        </LinkWrapU>,
        container
      )
    })
    expect(container && container.textContent).toBe(
      'Link with more clickable zone'
    )
  })

  it('should render a content', () => {
    act(() => {
      render(<LinkWrapU>Link with more clickable zone</LinkWrapU>, container)
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <LinkWrapU className="Link_pseudo-U Link_pseudoBlack-U">
          Link with more clickable zone
        </LinkWrapU>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
