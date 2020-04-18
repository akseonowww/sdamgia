import React from 'react'
import { cleanup, render } from '@testing-library/react'
import pretty from 'pretty'

import Test from '../Test'

describe('Test', () => {
  afterEach(cleanup)

  it('renders correctly', () => {
    const { container } = render(<Test />)
    const section = container.querySelector('.Test')
    const title = container.querySelector('.Title')
    const desc = container.querySelector('.Section-Desc')

    expect([section, title, desc]).toBeTruthy()
    expect(title && title.innerHTML).toBe('Тест')
    expect(desc && desc.innerHTML).toBe(
      'При выполнении заданий с&nbsp;кратким ответом впишите в&nbsp;поле для ответа цифру, которая соответствует номеру правильного ответа, или число, слово, последовательность букв (слов) или цифр. Ответ следует записывать без пробелов и&nbsp;каких-либо дополнительных символов. Дробную часть отделяйте от&nbsp;целой десятичной запятой. Единицы измерений писать не&nbsp;нужно.'
    )
  })

  it('matches snapshot', () => {
    const { container } = render(<Test />)

    expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
