import React from 'react'
import { render } from '@testing-library/react'

import Input from '..'

describe('Input', () => {
  describe('renders 3 types:', () => {
    describe('1) common', () => {
      const setValue = jest.fn(() => console.log('To change state value'))

      const setup = () => {
        const utils = render(
          <Input
            name="name"
            value="0"
            placeholder="First Name"
            setValue={setValue}
          />
        )
        const input: any = utils.getByTestId('Input')

        return {
          input,
          ...utils,
        }
      }

      it('with given value', () => {
        const { input } = setup()

        expect(input.value).toBe('0')
      })

      it('matches snapshot', () => {
        const { input } = setup()

        expect(input).toMatchSnapshot()
      })
    })

    describe('2) with custom "type"', () => {
      const setValue = jest.fn(() => console.log('To change state value'))

      const setup = () => {
        const utils = render(
          <Input
            className="Form_oneLine-Input"
            type="tel"
            name="id"
            value="0"
            placeholder="Variant Number"
            setValue={setValue}
          />
        )
        const input: any = utils.getByTestId('Input')

        return {
          input,
          ...utils,
        }
      }

      it('with given value', () => {
        const { input } = setup()

        expect(input.value).toBe('0')
      })

      it('matches snapshot', () => {
        const { input } = setup()

        expect(input).toMatchSnapshot()
      })
    })

    describe('3) with given handlers', () => {
      const innerRef: any = {
        current: (
          <Input
            className="Counter-Input"
            type="tel"
            name="prob1"
            value="0"
            tabIndex={1}
            style={{ /* stylelint-disable */ left: 0 }}
          />
        ),
      }
      const handleClick = jest.fn(() => console.log('To focus on the input'))
      const handleChange = jest.fn(() => console.log('To change state value'))

      const setup = () => {
        const utils = render(
          <Input
            className="Counter-Input"
            type="tel"
            name="prob1"
            value="0"
            tabIndex={1}
            style={{ /* stylelint-disable */ left: 0 }}
            innerRef={innerRef}
            handleClick={handleClick}
            handleChange={handleChange}
          />
        )
        const input: any = utils.getByTestId('Input')

        return {
          input,
          ...utils,
        }
      }

      it('with given value', () => {
        const { input } = setup()

        expect(input.value).toBe('0')
      })

      it('matches snapshot', () => {
        const { input } = setup()

        expect(input).toMatchSnapshot()
      })
    })
  })
})
