import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import VariantLink, { IVariantLinkProps } from '../VariantLink'

jest.mock('react-router-dom', () => ({
  Link: ({ className, to, title, children }: IVariantLinkProps) => (
    <div className={className} data-to={to} title={title}>
      {children}
    </div>
  ),
}))

describe('VariantLink', () => {
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
      render(<VariantLink to="/test?id=1">1</VariantLink>, container)
    })
    expect(container && container.textContent).toBe('1')

    act(() => {
      render(
        <VariantLink
          className="LarinVariants-Link"
          data-wordClassName="LarinVariants-Word"
          to="/test?id=1"
          title="Larin Variant #1"
        >
          1
          <div className="LarinVariants-Hint" title="Помощь">
            ?
          </div>
        </VariantLink>,
        container
      )
    })
    expect(container && container.textContent).toBe('1?')
  })

  it('should render a number', () => {
    act(() => {
      render(<VariantLink to="/test?id=1">1</VariantLink>, container)
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <VariantLink
          className="LarinVariants-Link"
          data-wordClassName="LarinVariants-Word"
          to="/test?id=1"
          title="Larin Variant #1"
        >
          1
          <div className="LarinVariants-Hint" title="Помощь">
            ?
          </div>
        </VariantLink>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
