import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import ProfileLink from '..'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn().mockReturnValueOnce(jest.fn()),
}))
jest.mock('modules/Auth/selectors', () => ({
  getAuthUser: jest.fn().mockReturnValueOnce(''),
}))

describe('ProfileLink', () => {
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

  it('renders stub when no user name', () => {
    act(() => {
      render(<ProfileLink />, container)
    })
    expect(container && container.textContent).toBe('Профиль')
  })

  it('matches snapshot', () => {
    act(() => {
      render(<ProfileLink />, container)
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
