import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import ComplexHeader from '../ComplexHeader'

describe('ComplexHeader', () => {
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
        <ComplexHeader>
          <h1>Variants</h1>
          <div>Archive</div>
        </ComplexHeader>,
        container
      )
    })
    expect(container && container.textContent).toBe('VariantsArchive')

    act(() => {
      render(
        <ComplexHeader className="Section-ComplexHeader">
          <h1>Variants</h1>
          <div>Archive</div>
        </ComplexHeader>,
        container
      )
    })
    expect(container && container.textContent).toBe('VariantsArchive')
  })

  it('should render a content', () => {
    act(() => {
      render(
        <ComplexHeader>
          <h1>Variants</h1>
          <div>Archive</div>
        </ComplexHeader>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <ComplexHeader className="Section-ComplexHeader">
          <h1>Variants</h1>
          <div>Archive</div>
        </ComplexHeader>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
