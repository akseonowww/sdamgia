import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import Grid from '../Grid'

describe('Grid', () => {
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
        <Grid>
          <div>Auxiliary Block</div>
        </Grid>,
        container
      )
    })
    expect(container && container.textContent).toBe('Auxiliary Block')

    act(() => {
      render(
        <Grid className="ConstructorForm">
          <div>Constructor Form</div>
        </Grid>,
        container
      )
    })
    expect(container && container.textContent).toBe('Constructor Form')
  })

  it('should render a content', () => {
    act(() => {
      render(
        <Grid>
          <div>Auxiliary Block</div>
        </Grid>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <Grid className="ConstructorForm">
          <div>Constructor Form</div>
        </Grid>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <Grid className="ConstructorForm">
          <div>Constructor Form</div>
          <div>Constructor Buttons</div>
        </Grid>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
