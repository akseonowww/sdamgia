import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  MouseEvent,
} from 'react'

import Checkbox from '../../Checkbox'
import {
  saveTopicsList,
  getParts,
  saveParts,
  getTestTotal,
  saveTestTotal,
} from '../../../pages/Student/components/Constructor/utils'
import '../../Button/Button.scss'
import '../../Switcher/Switcher.scss'
import '../../Switcher/_vertical/Switcher_vertical.scss'
import '../../Switcher/_checkbox/Switcher_checkbox.scss'

interface IButtonsProps {
  topicsList: Array<ITopic> | null
  setTopicsList: Dispatch<SetStateAction<ITopic[] | null>>
  parts: IParts
  setParts: Dispatch<SetStateAction<IParts>>
  testTotal: ITestTotal
  setTestTotal: Dispatch<SetStateAction<ITestTotal>>
  getNewTestTotalText: (total: number) => string
}

export interface ITopic {
  id: number
  title: string
  part: string
  subtopics: Array<ISubtopic>
  value?: number
  checked?: boolean
}

interface ISubtopic {
  id: number
  title: string
  amount: number
  checked?: boolean
}

export interface IParts {
  [test: string]: boolean
  detailed: boolean
}

interface ITestTotal {
  amount: number
  text: string
}

const Buttons: FC<IButtonsProps> = ({
  topicsList,
  setTopicsList,
  parts,
  setParts,
  testTotal,
  setTestTotal,
  getNewTestTotalText,
}) => {
  useEffect(() => {
    if (getTestTotal()) setTestTotal(getTestTotal())
    if (getParts()) setParts(getParts())
  }, [setParts, setTestTotal])

  const switchPart = (part: string) => {
    if (topicsList) {
      const newValue = !parts[part]
      const countValue = newValue ? 1 : 0

      const willBeSaved = countValue === 1

      const newParts = {
        ...parts,
        [part]: newValue,
      }
      setParts(newParts)
      saveParts(newParts)

      const list = [...topicsList]
      let newTestTotalAmount = testTotal.amount
      for (let i = 0; i < list.length; i++) {
        if (list[i].part === part) {
          let oldValue = list[i].value

          if (oldValue === undefined) return false

          list[i] = {
            ...list[i],
            value: oldValue > 1 && willBeSaved ? oldValue : countValue,
          }

          const newValue = list[i].value

          if (newValue === undefined) return false

          newTestTotalAmount = newTestTotalAmount + (newValue - oldValue)
        }
      }

      setTopicsList(list)
      saveTopicsList(list)

      const newTestTotal = {
        amount: newTestTotalAmount,
        text: getNewTestTotalText(newTestTotalAmount),
      }
      setTestTotal(newTestTotal)
      saveTestTotal(newTestTotal)
    }
  }

  const handleResetClick = (e: MouseEvent) => {
    e.preventDefault()

    if (topicsList) {
      const list = [...topicsList]
      for (let i = 0; i < list.length; i++) {
        list[i] = {
          ...list[i],
          value: 0,
        }
      }
      setTopicsList(list)
      saveTopicsList(list)

      const newTestTotal = {
        amount: 0,
        text: '',
      }
      setTestTotal(newTestTotal)
      saveTestTotal(newTestTotal)

      const newParts = {
        test: false,
        detailed: false,
      }
      setParts(newParts)
      saveParts(newParts)
    }
  }

  return (
    <div className="ConstructorForm-Buttons">
      <div className="ConstructorForm-ButtonsPanel">
        <input
          className="Button ConstructorForm-SubmitButton"
          type="submit"
          value={`Составить вариант ${testTotal.text}`}
          tabIndex={topicsList ? topicsList.length : 1}
        />

        <div className="Switcher Switcher_vertical Switcher_checkbox ConstructorForm-Switcher">
          <label className="Label Switcher-Label Switcher_vertical-Label Switcher_checkbox-Label">
            <Checkbox
              className="Switcher-Input"
              fakeCheckboxClassName="FakeCheckbox_blue Switcher_checkbox-FakeCheckbox"
              name="testPart"
              value={parts.test}
              onChange={() => switchPart('test')}
            />
            <span className="Switcher-Text Switcher_checkbox-Text">
              Тестовая часть
            </span>
          </label>
          <label className="Label Switcher-Label Switcher_vertical-Label Switcher_checkbox-Label">
            <Checkbox
              className="Switcher-Input"
              fakeCheckboxClassName="FakeCheckbox_blue Switcher_checkbox-FakeCheckbox"
              name="detailedPart"
              value={parts.detailed}
              onChange={() => switchPart('detailed')}
            />
            <span className="Switcher-Text Switcher_checkbox-Text">
              Развернутая часть
            </span>
          </label>
        </div>

        <button
          className="Link Link_pseudo Link_wrap ConstructorForm-ResetButton"
          onClick={handleResetClick}
        >
          <span>×</span>
          <u className="Link-U Link_pseudo-U Link_wrap-U ConstructorForm-ResetButtonText">
            Очистить поля
          </u>
        </button>
      </div>
    </div>
  )
}

export default Buttons
