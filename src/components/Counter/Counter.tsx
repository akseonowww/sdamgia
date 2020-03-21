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
import '../Input/Input.scss'
import './Counter.scss'

interface ICounter {
  className?: string
  name: string
  value: number
  setValue: Dispatch<SetStateAction<ITopic[] | null>>
  list: ITopic[] | null
  index: number
  testTotal: ITestTotal
  setTestTotal: Dispatch<SetStateAction<ITestTotal>>
  part: string
  switchOnPart: (part: string) => void
  switchOffPart: (part: string) => void
}

const useCounter = (
  index: number,
  value: number,
  setValue: Dispatch<SetStateAction<ITopic[] | null>>,
  list: ITopic[] | null,
  testTotal: ITestTotal,
  setTestTotal: Dispatch<SetStateAction<ITestTotal>>,
  part: string,
  switchOnPart: (part: string) => void,
  switchOffPart: (part: string) => void,
  countInput: React.RefObject<HTMLInputElement | null>
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
      setValue(list)
      saveTopicsList(list)

      const newTestTotalAmount = testTotal.amount + (newValue - oldValue)
      const newTestTotalText = getNewTestTotalText(newTestTotalAmount)
      const newTestTotal = {
        amount: newTestTotalAmount,
        text: newTestTotalText,
      }
      setTestTotal(newTestTotal)
      saveTestTotal(newTestTotal)

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
      setValue,
      list,
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
      setValue(list)
      saveTopicsList(list)

      const newTestTotalAmount = testTotal.amount - 1
      const newTestTotalText = getNewTestTotalText(newTestTotalAmount)
      const newTestTotal = {
        amount: newTestTotalAmount,
        text: newTestTotalText,
      }
      setTestTotal(newTestTotal)
      saveTestTotal(newTestTotal)

      if (!newValue) switchOffPart(part)
    },
    [value, setValue, list, index, testTotal, setTestTotal, part, switchOffPart]
  )

  const increment = useCallback(
    e => {
      e.preventDefault()

      const newValue = Number(value) + 1

      if (!list) return

      list[index] = { ...list[index], value: newValue }
      setValue(list)
      saveTopicsList(list)

      const newTestTotalAmount = testTotal.amount + 1
      const newTestTotalText = getNewTestTotalText(newTestTotalAmount)
      const newTestTotal = {
        amount: newTestTotalAmount,
        text: newTestTotalText,
      }
      setTestTotal(newTestTotal)
      saveTestTotal(newTestTotal)

      for (let i = 0; i < list.length; i++) {
        if (list[i].part === part && list[i].value < 1) return
      }

      switchOnPart(part)
    },
    [value, setValue, list, index, testTotal, setTestTotal, part, switchOnPart]
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
  name,
  index,
  value,
  setValue,
  list,
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
    index,
    value,
    setValue,
    list,
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
      <input
        className="Input Counter-Input"
        type="tel"
        name={name}
        value={value}
        ref={countInput}
        onClick={handleCounterInputFocus}
        onChange={handleCounterInputChange}
        style={{ /* stylelint-disable */ left: 0 }}
        tabIndex={index + 1}
      />
      <button className="Counter-Button" onClick={increment}>
        +
      </button>
      <span className="Counter-Caption">шт.</span>
    </div>
  )
}

export default Counter
