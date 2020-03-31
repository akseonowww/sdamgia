import React, {
  useCallback,
  useRef,
  Dispatch,
  SetStateAction,
  RefObject,
} from 'react'
import cx from 'classnames'

import { ITopic } from 'components/ConstructorForm/Buttons/Buttons'
import { ITestTotal } from 'components/ConstructorForm/ConstructorForm'
import { getNewTestTotalText } from '../ConstructorForm'
import { saveTestTotal, saveTopicsList } from 'components/ConstructorForm/utils'
import nahStep from '../Form/nahStep'
import Input from 'components/Input'
import './Counter.scss'

interface ICounter {
  className?: string
  page: string
  name: string
  value: number
  list: ITopic[] | null
  setTopicsList: Dispatch<SetStateAction<ITopic[] | null>>
  index: number
  testTotal: ITestTotal
  setTestTotal: Dispatch<SetStateAction<ITestTotal>>
  part: string
  switchOnPart: (part: string) => void
  switchOffPart: (part: string) => void
}

const useCounter = (
  page: string,
  index: number,
  value: number,
  list: ITopic[] | null,
  setTopicsList: Dispatch<SetStateAction<ITopic[] | null>>,
  testTotal: ITestTotal,
  setTestTotal: Dispatch<SetStateAction<ITestTotal>>,
  part: string,
  switchOnPart: (part: string) => void,
  switchOffPart: (part: string) => void,
  countInput: RefObject<HTMLInputElement | null>
) => {
  const handleCounterInputFocus = useCallback(() => {
    if (countInput && countInput.current) {
      countInput.current.setSelectionRange(0, 9999)
    }
  }, [countInput])

  const handleCounterInputChange = useCallback(
    e => {
      const { value: newValue } = e.target

      // allow only number in counter input and show nah amination
      if ((/\D/.test(newValue) && newValue !== '') || newValue > 999999) {
        if (countInput && countInput.current) {
          countInput.current.style.left = '0'
          let x = 0,
            m = 0,
            nahStepTimeOut

          nahStep(countInput.current, m, x, nahStepTimeOut)
        }

        return
      }

      if (!list) return

      const oldValue = list[index].value
      list[index] = { ...list[index], value: newValue }
      setTopicsList(list)
      saveTopicsList(page, list)

      const newTestTotalAmount = testTotal.amount + (newValue - oldValue)
      const newTestTotalText = getNewTestTotalText(newTestTotalAmount)
      const newTestTotal = {
        amount: newTestTotalAmount,
        text: newTestTotalText,
      }
      setTestTotal(newTestTotal)
      saveTestTotal(page, newTestTotal)

      if (Number(newValue)) {
        for (let i = 0; i < list.length; i++) {
          if (list[i].part === part && list[i].value < 1) return
        }
        switchOnPart(part)
      } else {
        switchOffPart(part)
      }
    },
    [
      countInput,
      page,
      list,
      setTopicsList,
      index,
      testTotal,
      setTestTotal,
      part,
      switchOnPart,
      switchOffPart,
    ]
  )

  const decrement = useCallback(
    e => {
      e.preventDefault()

      if (value <= 0 || !list) return

      let newValue = Number(value) - 1

      list[index] = { ...list[index], value: newValue }
      setTopicsList(list)
      saveTopicsList(page, list)

      const newTestTotalAmount = testTotal.amount - 1
      const newTestTotalText = getNewTestTotalText(newTestTotalAmount)
      const newTestTotal = {
        amount: newTestTotalAmount,
        text: newTestTotalText,
      }
      setTestTotal(newTestTotal)
      saveTestTotal(page, newTestTotal)

      if (!newValue) switchOffPart(part)
    },
    [
      value,
      page,
      list,
      setTopicsList,
      index,
      testTotal,
      setTestTotal,
      part,
      switchOffPart,
    ]
  )

  const increment = useCallback(
    e => {
      e.preventDefault()

      const newValue = Number(value) + 1

      if (!list) return

      list[index] = { ...list[index], value: newValue }
      setTopicsList(list)
      saveTopicsList(page, list)

      const newTestTotalAmount = testTotal.amount + 1
      const newTestTotalText = getNewTestTotalText(newTestTotalAmount)
      const newTestTotal = {
        amount: newTestTotalAmount,
        text: newTestTotalText,
      }
      setTestTotal(newTestTotal)
      saveTestTotal(page, newTestTotal)

      for (let i = 0; i < list.length; i++) {
        if (list[i].part === part && list[i].value < 1) return
      }

      switchOnPart(part)
    },
    [
      value,
      page,
      list,
      setTopicsList,
      index,
      testTotal,
      setTestTotal,
      part,
      switchOnPart,
    ]
  )

  return {
    handleCounterInputFocus,
    handleCounterInputChange,
    increment,
    decrement,
  }
}

const Counter = ({
  className,
  page,
  name,
  index,
  value,
  list,
  setTopicsList,
  testTotal,
  setTestTotal,
  part,
  switchOnPart,
  switchOffPart,
}: ICounter) => {
  const countInput = useRef<HTMLInputElement>(null)
  const {
    handleCounterInputFocus,
    handleCounterInputChange,
    increment,
    decrement,
  } = useCounter(
    page,
    index,
    value,
    list,
    setTopicsList,
    testTotal,
    setTestTotal,
    part,
    switchOnPart,
    switchOffPart,
    countInput
  )

  return (
    <div className={cx('Counter', className)}>
      <button
        className={cx('Counter-Button', {
          'Counter-Button_disabled': value < 1,
        })}
        onClick={decrement}
      >
        −
      </button>

      <Input
        className="Counter-Input"
        type="tel"
        name={name}
        value={value.toString()}
        tabIndex={index + 1}
        style={{ /* stylelint-disable */ left: 0 }}
        innerRef={countInput}
        handleClick={handleCounterInputFocus}
        handleChange={handleCounterInputChange}
      />

      <button className="Counter-Button" onClick={increment}>
        +
      </button>
      <span className="Counter-Caption">шт.</span>
    </div>
  )
}

export default Counter
