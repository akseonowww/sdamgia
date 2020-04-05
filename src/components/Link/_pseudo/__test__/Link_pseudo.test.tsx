import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import LinkPseudo from '../'

describe('Link_pseudo', () => {
  let container: HTMLElement | null = null
  const handleClick = jest.fn(() =>
    console.log('You had clicked and saw less/more information')
  )

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

  describe('renders two types:', () => {
    it('common', () => {
      act(() => {
        render(
          <LinkPseudo handleClick={handleClick}>Other tasks</LinkPseudo>,
          container
        )
      })
      expect(container && container.textContent).toBe('Other tasks')

      act(() => {
        render(
          <LinkPseudo className="Link_pseudoBlack" handleClick={handleClick}>
            Solution
          </LinkPseudo>,
          container
        )
      })
      expect(container && container.textContent).toBe('Solution')
    })

    it('wrap', () => {
      act(() => {
        render(
          <LinkPseudo
            className="Link_pseudoBlack ConstructorForm-TopicName"
            handleClick={handleClick}
            customChildren
          >
            <div className="ConstructorForm-TopicNumber">1</div>
            <div className="ConstructorForm-TopicDesc">
              <u className="Link-U Link_wrap-U Link_pseudo-U Link_pseudoBlack-U">
                Task topic description
              </u>
            </div>
          </LinkPseudo>,
          container
        )
      })
      expect(container && container.textContent).toBe('1Task topic description')
    })
  })

  it('should render a content', () => {
    act(() => {
      render(
        <LinkPseudo handleClick={handleClick}>Other tasks</LinkPseudo>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <LinkPseudo className="Link_pseudoBlack" handleClick={handleClick}>
          Solution
        </LinkPseudo>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <LinkPseudo
          className="Link_pseudoBlack ConstructorForm-TopicName"
          handleClick={handleClick}
          customChildren
        >
          <div className="ConstructorForm-TopicNumber">1</div>
          <div className="ConstructorForm-TopicDesc">
            <u className="Link-U Link_wrap-U Link_pseudo-U Link_pseudoBlack-U">
              Task topic description
            </u>
          </div>
        </LinkPseudo>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
