import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import Button from '../Button'

describe('Button', () => {
  const handleClick = jest.fn()
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
      render(<Button>Open</Button>, container)
    })
    expect(container && container.textContent).toBe('Open')

    act(() => {
      render(
        <Button
          className="ConstructorForm-SubmitButton"
          type="submit"
          tabIndex={0}
          handleClick={handleClick}
        >
          Make work from 5 tasks
        </Button>,
        container
      )
    })
    expect(container && container.textContent).toBe('Make work from 5 tasks')

    act(() => {
      const button = document.querySelector('.Button')
      button && button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('matches snapshot', () => {
    act(() => {
      render(<Button>Open</Button>, container)
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <Button
          className="ConstructorForm-SubmitButton"
          type="submit"
          tabIndex={0}
          handleClick={handleClick}
        >
          Make work from 5 tasks
        </Button>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
