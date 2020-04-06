import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import { MemoryRouter } from 'react-router-dom'

import LinkWrap from '../'

describe('Link_wrap', () => {
  let container: HTMLElement | null = null
  const handleClick = jest.fn(() =>
    console.log('User clicked and saw less/more information')
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

  describe('renders three types:', () => {
    it('with click handler and custom children', () => {
      act(() => {
        render(
          <LinkWrap handleClick={handleClick} customChildren>
            <span>1</span>
            <u className="Link-U Link_wrap-U">Underlined word</u>
          </LinkWrap>,
          container
        )
      })
      expect(container && container.textContent).toBe('1Underlined word')

      act(() => {
        render(
          <LinkWrap
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
          </LinkWrap>,
          container
        )
      })
      expect(container && container.textContent).toBe('1Task topic description')
    })

    it('with click handler', () => {
      act(() => {
        render(
          <LinkWrap
            className="Link_pseudo VariantBox-Control LarinVariants-Control"
            classNameU="Link_pseudo-U"
            handleClick={handleClick}
          >
            Show more
          </LinkWrap>,
          container
        )
      })
      expect(container && container.textContent).toBe('Show more')
    })

    it('nav', () => {
      act(() => {
        render(
          <MemoryRouter>
            <LinkWrap
              className="Link_black NavSide-Link"
              activeClassName="NavLink_selected"
              classNameU="Link_black-U"
              to="/manual"
              title="Scales, statistics, task assessment"
            >
              All about exam
            </LinkWrap>
          </MemoryRouter>,
          container
        )
      })
      expect(container && container.textContent).toBe('All about exam')

      act(() => {
        render(
          <MemoryRouter>
            <LinkWrap
              className="Link_black NavSide-Link"
              activeClassName="NavLink_selected"
              classNameU="Link_black-U"
              to="/manual"
              exact
              title="Scales, statistics, task assessment"
            >
              About exam
            </LinkWrap>
          </MemoryRouter>,
          container
        )
      })
      expect(container && container.textContent).toBe('About exam')
    })

    it('common', () => {
      act(() => {
        render(
          <LinkWrap className="ProfileAuth-Link" href="/pass_change">
            Password recovery
          </LinkWrap>,
          container
        )
      })
      expect(container && container.textContent).toBe('Password recovery')

      act(() => {
        render(
          <LinkWrap
            className="Link_black NavSide-Link"
            classNameU="Link_black-U"
            href="/site-section"
          >
            Site section
          </LinkWrap>,
          container
        )
      })
      expect(container && container.textContent).toBe('Site section')
    })
  })

  it('should render a content', () => {
    act(() => {
      render(
        <LinkWrap handleClick={handleClick} customChildren>
          <span>1</span>
          <u className="Link-U Link_wrap-U">Underlined word</u>
        </LinkWrap>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <LinkWrap
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
        </LinkWrap>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <LinkWrap
          className="Link_pseudo VariantBox-Control LarinVariants-Control"
          classNameU="Link_pseudo-U"
          handleClick={handleClick}
        >
          Show more
        </LinkWrap>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <MemoryRouter>
          <LinkWrap
            className="Link_black NavSide-Link"
            activeClassName="NavLink_selected"
            classNameU="Link_black-U"
            to="/manual"
            title="Scales, statistics, task assessment"
          >
            All about exam
          </LinkWrap>
        </MemoryRouter>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <MemoryRouter>
          <LinkWrap
            className="Link_black NavSide-Link"
            activeClassName="NavLink_selected"
            classNameU="Link_black-U"
            to="/manual"
            exact
            title="Scales, statistics, task assessment"
          >
            About exam
          </LinkWrap>
        </MemoryRouter>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <LinkWrap className="ProfileAuth-Link" href="/pass_change">
          Password recovery
        </LinkWrap>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <LinkWrap
          className="Link_black NavSide-Link"
          classNameU="Link_black-U"
          href="/site-section"
        >
          Site section
        </LinkWrap>,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
