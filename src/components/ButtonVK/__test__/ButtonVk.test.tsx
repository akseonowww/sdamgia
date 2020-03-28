import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import ButtonVk from '../ButtonVk'

describe('ButtonVk', () => {
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
        <ButtonVk url="https://vk.com/reshuege">Our group</ButtonVk>,
        container
      )
    })
    expect(container && container.textContent).toBe('Our group')

    act(() => {
      render(
        <ButtonVk className="Student-ButtonVk" url="https://vk.com/reshuege">
          Our group
        </ButtonVk>,
        container
      )
    })
    expect(container && container.textContent).toBe('Our group')
  })

  it('should render a content', () => {
    act(() => {
      render(
        <ButtonVk url="https://vk.com/reshuege">Our group</ButtonVk>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <ButtonVk className="Student-ButtonVk" url="https://vk.com/reshuege">
          Our group
        </ButtonVk>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
