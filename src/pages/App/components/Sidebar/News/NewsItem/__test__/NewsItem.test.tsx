import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import NewsItem from '..'

describe('NewsItem', () => {
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

  describe('renders news of three types:', () => {
    it('default', () => {
      act(() => {
        render(
          <NewsItem
            type="default"
            date="20 июня"
            text="Сначала составители ЕГЭ свою ошибку признали, потом расхотели"
            url="https://vk.com/wall-34649478_177050"
          />,
          container
        )
      })

      expect(container && container.textContent).toBe(
        '20 июняСначала составители ЕГЭ свою ошибку признали, потом расхотели'
      )
    })

    it('urgent', () => {
      act(() => {
        render(
          <NewsItem
            type="urgent"
            text="Новый сервис — карточки"
            url="https://vk.com/wall-34649478_169793"
          />,
          container
        )
      })

      expect(container && container.textContent).toBe('Новый сервис — карточки')
    })

    it('hot', () => {
      act(() => {
        render(
          <NewsItem
            type="hot"
            text="На сайте что-то не так? Отключите адблок"
            url="https://ege.sdamgia.ru/img/blockadblock_chrome.jpg"
          />,
          container
        )
      })

      expect(container && container.textContent).toBe(
        'На сайте что-то не так? Отключите адблок'
      )
    })
  })

  it('should render a content', () => {
    act(() => {
      render(
        <NewsItem
          type="default"
          date="20 июня"
          text="Сначала составители ЕГЭ свою ошибку признали, потом расхотели"
          url="https://vk.com/wall-34649478_177050"
        />,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <NewsItem
          type="urgent"
          text="Новый сервис — карточки"
          url="https://vk.com/wall-34649478_169793"
        />,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()

    act(() => {
      render(
        <NewsItem
          type="hot"
          text="На сайте что-то не так? Отключите адблок"
          url="https://ege.sdamgia.ru/img/blockadblock_chrome.jpg"
        />,
        container
      )
    })
    if (container) expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
