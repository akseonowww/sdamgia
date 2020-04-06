import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import { MemoryRouter } from 'react-router-dom'

import Link from '../Link'

describe('Link', () => {
  let container: HTMLElement | null = null
  const handleClick = jest.fn(() =>
    console.log('User clicked and saw less/more information')
  )

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

  describe('renders 7 types:', () => {
    it('1. React Router Nav wrap', () => {
      act(() => {
        render(
          <MemoryRouter>
            <Link
              className="Link Link_wrap Link_black NavSide-Link"
              activeClassName
              to="/"
              exact
              title="Шкалы, статистика, оценивание заданий"
            >
              <u className="Link-U Link_wrap-U Link_black-U">About exam</u>
            </Link>
          </MemoryRouter>,
          container
        )
      })
      expect(container && container.textContent).toBe('About exam')
    })

    it('2. React Router Nav', () => {
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
            <Link
              className="Link_black Header-Link"
              activeClassName
              to="/"
              exact
            >
              RESHU EGE
            </Link>
          </MemoryRouter>,
          container
        )
      })
      expect(container && container.textContent).toBe('RESHU EGE')
    })

    it('3. React Router', () => {
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

    it('4. wrap with click handler', () => {
      act(() => {
        render(
          <Link
            className="Link_wrap Link_pseudo VariantBox-Control LarinVariants-Control"
            classNameU="Link_wrap-U Link_pseudo-U"
            handleClick={handleClick}
          >
            Show all
          </Link>,
          container
        )
      })
      expect(container && container.textContent).toBe('Show all')
    })

    it('5. with click handler', () => {
      act(() => {
        render(
          <Link className="Link_pseudo" handleClick={handleClick}>
            Solution
          </Link>,
          container
        )
      })
      expect(container && container.textContent).toBe('Solution')
    })

    it('6. wrap', () => {
      act(() => {
        render(
          <Link className="Link_wrap ProfileAuth-Link" href="/pass_change">
            Password Recovery
          </Link>,
          container
        )
      })
      expect(container && container.textContent).toBe('Password Recovery')
    })

    it('7. HTML', () => {
      act(() => {
        render(<Link>About Project</Link>, container)
      })
      expect(container && container.textContent).toBe('About Project')

      act(() => {
        render(<Link className="Link_black">About Project</Link>, container)
      })
      expect(container && container.textContent).toBe('About Project')
    })
  })

  describe('should render content of 7 types:', () => {
    it('1. React Router Nav wrap', () => {
      act(() => {
        render(
          <MemoryRouter>
            <Link
              className="Link Link_wrap Link_black NavSide-Link"
              activeClassName
              to="/"
              exact
              title="Шкалы, статистика, оценивание заданий"
            >
              <u className="Link-U Link_wrap-U Link_black-U">About exam</u>
            </Link>
          </MemoryRouter>,
          container
        )
      })
      if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
    })

    it('2. React Router Nav', () => {
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
            <Link
              className="Link_black Header-Link"
              activeClassName
              to="/"
              exact
            >
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
    })

    it('3. React Router', () => {
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
    })

    it('4. wrap with click handler', () => {
      act(() => {
        render(
          <Link
            className="Link_wrap Link_pseudo VariantBox-Control LarinVariants-Control"
            classNameU="Link_wrap-U Link_pseudo-U"
            handleClick={handleClick}
          >
            Show all
          </Link>,
          container
        )
      })
      if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
    })

    it('5. with click handler', () => {
      act(() => {
        render(
          <Link className="Link_pseudo" handleClick={handleClick}>
            Solution
          </Link>,
          container
        )
      })
      if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
    })

    it('6. wrap', () => {
      act(() => {
        render(
          <Link className="Link_wrap ProfileAuth-Link" href="/pass_change">
            Password Recovery
          </Link>,
          container
        )
      })
      if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
    })

    it('7. HTML', () => {
      act(() => {
        render(<Link>About Project</Link>, container)
      })
      if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

      act(() => {
        render(<Link className="Link_black">About Project</Link>, container)
      })
      if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
    })
  })
})
