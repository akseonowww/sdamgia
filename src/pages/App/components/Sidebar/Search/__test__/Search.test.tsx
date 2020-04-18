import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import pretty from 'pretty'

import Search from '../Search'

describe('Search', () => {
  afterEach(cleanup)

  it('renders correctly', () => {
    const { container } = render(<Search className="Sidebar-Search" />)
    const form = container.querySelector('.Search')
    const label = container.querySelector('.Search-Label')
    const icon = container.querySelector('.Search-Icon')
    const input = container.querySelector('.Search-Input')

    expect([form, label, icon, input]).toBeTruthy()
  })

  it('provides filling', () => {
    const { container } = render(<Search className="Sidebar-Search" />)
    const input = container.querySelector('.Search-Input') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'Поезд двигаясь' } })

    expect(input.value).toBe('Поезд двигаясь')
  })

  it('matches snapshot', () => {
    const { container } = render(<Search />)

    expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
