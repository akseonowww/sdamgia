import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import { MemoryRouter } from 'react-router-dom'

import Header from '../Header'

describe('Header', () => {
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
          <Header />
        </MemoryRouter>,
        container
      )
    })
    expect(container && container.textContent).toBe(
      'СДАМ ГИА: РЕШУ ЕГЭОбразовательный портал для подготовки к экзаменамМатематика профильного уровня'
    )

    act(() => {
      render(
        <MemoryRouter>
          <Header className="PageLayout-Header" />
        </MemoryRouter>,
        container
      )
    })
    expect(container && container.textContent).toBe(
      'СДАМ ГИА: РЕШУ ЕГЭОбразовательный портал для подготовки к экзаменамМатематика профильного уровня'
    )
  })

  it('should render a content', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <MemoryRouter>
          <Header className="PageLayout-Header" />
        </MemoryRouter>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
