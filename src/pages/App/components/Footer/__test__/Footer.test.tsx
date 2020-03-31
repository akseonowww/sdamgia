import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import { MemoryRouter } from 'react-router-dom'

import Footer from '../Footer'

describe('Footer', () => {
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
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>,
        container
      )
    })
    expect(container && container.textContent).toBe(
      `О проекте · Редакция · Правовая информация © Гущин Д. Д., 2011—${new Date().getFullYear()}`
    )

    act(() => {
      render(
        <MemoryRouter>
          <Footer className="PageLayout-Footer" />
        </MemoryRouter>,
        container
      )
    })
    expect(container && container.textContent).toBe(
      `О проекте · Редакция · Правовая информация © Гущин Д. Д., 2011—${new Date().getFullYear()}`
    )
  })

  it('should render a content', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <MemoryRouter>
          <Footer className="PageLayout-Footer" />
        </MemoryRouter>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
