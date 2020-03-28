import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import VariantsLink, { IVariantsLinkProps } from '../VariantsLink'

jest.mock('react-router-dom', () => ({
  Link: ({ className, to, title, children }: IVariantsLinkProps) => (
    <div className={className} data-to={to} title={title}>
      {children}
    </div>
  ),
}))

describe('VariantsLink', () => {
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

  it('renders with required and optional props', () => {
    act(() => {
      render(<VariantsLink to="/test?id=1">1</VariantsLink>, container)
    })
    expect(container && container.textContent).toBe('1')

    act(() => {
      render(
        <VariantsLink
          className="LarinVariants-Link"
          data-wordClassName="LarinVariants-Word"
          to="/test?id=1"
          title="Larin Variant #1"
        >
          1
          <div className="LarinVariants-Hint" title="Помощь">
            ?
          </div>
        </VariantsLink>,
        container
      )
    })
    expect(container && container.textContent).toBe('1?')
  })

  it('should render a number', () => {
    act(() => {
      render(<VariantsLink to="/test?id=1">1</VariantsLink>, container)
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <VariantsLink
          className="LarinVariants-Link"
          data-wordClassName="LarinVariants-Word"
          to="/test?id=1"
          title="Larin Variant #1"
        >
          1
          <div className="LarinVariants-Hint" title="Помощь">
            ?
          </div>
        </VariantsLink>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
