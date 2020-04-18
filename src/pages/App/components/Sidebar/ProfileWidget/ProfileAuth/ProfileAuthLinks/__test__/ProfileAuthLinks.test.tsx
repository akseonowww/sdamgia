import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import { cn } from '@bem-react/classname'

import ProfileAuthLinks from '../ProfileAuthLinks'

describe('ProfileAuthLinks', () => {
  const profileAuth = cn('ProfileAuth')
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
      render(<ProfileAuthLinks blockClassName={profileAuth()} />, container)
    })
    expect(container && container.textContent).toBe(
      'Восстановление пароляВход через ВконтактеРегистрация'
    )
  })

  it('matches snapshot', () => {
    act(() => {
      render(<ProfileAuthLinks blockClassName={profileAuth()} />, container)
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
