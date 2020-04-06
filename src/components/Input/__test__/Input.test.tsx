import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import Input from '..'

describe('Input', () => {
  let container: HTMLElement | null = null
  const setValue = jest.fn(() => console.log('To change state value'))

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

  it('should render a content', () => {
    act(() => {
      render(
        <Input
          className="Form_oneLine-Input"
          type="tel"
          name="id"
          value="0"
          placeholder="Номер варианта"
          setValue={setValue}
        />,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
