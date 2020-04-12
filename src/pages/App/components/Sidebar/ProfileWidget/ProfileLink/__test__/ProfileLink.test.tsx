import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import ProfileLink from '..'

jest.mock('react-redux', () => {
  const user = {
    name: 'Константин',
  }

  return {
    useSelector: jest
      .fn()
      .mockReturnValue(null)
      .mockReturnValueOnce(null)
      .mockReturnValueOnce(user),
    useDispatch: jest.fn().mockReturnValue(jest.fn()),
  }
})

describe('ProfileLink', () => {
  let container: HTMLElement | null = null

  beforeEach(() => {
    container = document.createElement('div')
    document.body.append(container)
  })

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container)
      container.remove()
      container = null
    }
  })

  it('renders stub when no user name', () => {
    act(() => {
      render(<ProfileLink />, container)
    })

    if (!container) return
    expect(container.textContent).toBe('Профиль')
    expect(pretty(container.innerHTML)).toMatchSnapshot()
  })

  it('renders user name', () => {
    act(() => {
      render(<ProfileLink />, container)
    })

    if (!container) return
    expect(container.textContent).toBe('Константин')
    expect(pretty(container.innerHTML)).toMatchSnapshot()
  })

  it('provides signing out', () => {
    if (!container) return

    act(() => {
      render(<ProfileLink />, container)
    })

    const button = container.querySelector('.ProfileLink-Button')

    act(() => {
      button && button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(container.textContent).toBe('Профиль')
    expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
