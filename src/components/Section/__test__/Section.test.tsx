import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import Section from '../Section'

describe('Section', () => {
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
        <Section>
          <div>Auxiliary Section</div>
        </Section>,
        container
      )
    })
    expect(container && container.textContent).toBe('Auxiliary Section')

    act(() => {
      render(
        <Section className="Student-Section">
          <div>Student Section</div>
        </Section>,
        container
      )
    })
    expect(container && container.textContent).toBe('Student Section')
  })

  it('should render a content', () => {
    act(() => {
      render(
        <Section>
          <div>Auxiliary Section</div>
        </Section>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <Section className="Student-Section">
          <div>Student Section</div>
        </Section>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <Section className="Student-Section">
          <h1>Student Section</h1>
          <div>Description</div>
        </Section>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
