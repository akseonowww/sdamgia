import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import { MemoryRouter } from 'react-router-dom'

import Link from '../Link'

describe('Link', () => {
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

  it('renders html link with or without a className', () => {
    act(() => {
      render(<Link>About Project</Link>, container)
    })
    expect(container && container.textContent).toBe('About Project')

    act(() => {
      render(<Link className="Link_black">About Project</Link>, container)
    })
    expect(container && container.textContent).toBe('About Project')
  })

  it('renders React Router Link', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Link className="Link_static" to="/archive">
            Archive
          </Link>
        </MemoryRouter>,
        container
      )
    })
    expect(container && container.textContent).toBe('Archive')
  })

  it('renders React Router NavLink', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Link className="Link_black Header-Link" activeClassName to="/">
            RESHU EGE
          </Link>
        </MemoryRouter>,
        container
      )
    })
    expect(container && container.textContent).toBe('RESHU EGE')

    act(() => {
      render(
        <MemoryRouter>
          <Link className="Link_black Header-Link" to="/" exact>
            RESHU EGE
          </Link>
        </MemoryRouter>,
        container
      )
    })
    expect(container && container.textContent).toBe('RESHU EGE')

    act(() => {
      render(
        <MemoryRouter>
          <Link className="Link_black Header-Link" activeClassName to="/" exact>
            RESHU EGE
          </Link>
        </MemoryRouter>,
        container
      )
    })
    expect(container && container.textContent).toBe('RESHU EGE')
  })

  it('should render a content', () => {
    act(() => {
      render(<Link>About Project</Link>, container)
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(<Link className="Link_black">About Project</Link>, container)
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <MemoryRouter>
          <Link className="Link_static" to="/archive">
            Archive
          </Link>
        </MemoryRouter>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <MemoryRouter>
          <Link className="Link_black Header-Link" activeClassName to="/">
            RESHU EGE
          </Link>
        </MemoryRouter>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <MemoryRouter>
          <Link className="Link_black Header-Link" to="/" exact>
            RESHU EGE
          </Link>
        </MemoryRouter>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <MemoryRouter>
          <Link className="Link_black Header-Link" activeClassName to="/" exact>
            RESHU EGE
          </Link>
        </MemoryRouter>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
