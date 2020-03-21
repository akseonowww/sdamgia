import React, {
  FC,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  MouseEvent,
} from 'react'

import { ITestTotal, IParts } from '../ConstructorForm'
import {
  saveParts,
  loadParts,
  saveTestTotal,
  loadTestTotal,
  saveTopicsList,
} from '../utils'
import Checkbox from '../../Checkbox'
import '../../Button/Button.scss'
import '../../Switcher/Switcher.scss'
import '../../Switcher/_vertical/Switcher_vertical.scss'
import '../../Switcher/_checkbox/Switcher_checkbox.scss'

interface IButtonsProps {
  page: string
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
  value: number
  checked?: boolean
}

export interface ISubtopic {
  id: number
  title: string
  amount: number
  checked: boolean
}

const Buttons: FC<IButtonsProps> = ({
  page,
  topicsList,
  setTopicsList,
  parts,
  setParts,
  testTotal,
  setTestTotal,
  getNewTestTotalText,
}) => {
  useEffect(() => {
    if (loadTestTotal(page)) setTestTotal(loadTestTotal(page))
    if (loadParts(page)) setParts(loadParts(page))
  }, [page, setParts, setTestTotal])

  const switchPart = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const part = e.target.name.split('Part')[0]

      if (topicsList) {
        const newValue = !parts[part]
        const countValue = newValue ? 1 : 0

        const willBeSaved = countValue === 1

        const newParts = {
          ...parts,
          [part]: newValue,
        }
        setParts(newParts)
        saveParts(page, newParts)

        const list = [...topicsList]
        let newTestTotalAmount = testTotal.amount
        for (let i = 0; i < list.length; i++) {
          if (list[i].part === part) {
            let oldValue = list[i].value

            list[i] = {
              ...list[i],
              value: oldValue > 1 && willBeSaved ? oldValue : countValue,
            }

            const newValue = list[i].value

            newTestTotalAmount = newTestTotalAmount + (newValue - oldValue)
          }
        }

        setTopicsList(list)
        saveTopicsList(page, list)

        const newTestTotal = {
          amount: newTestTotalAmount,
          text: getNewTestTotalText(newTestTotalAmount),
        }
        setTestTotal(newTestTotal)
        saveTestTotal(page, newTestTotal)
      }
    },
    [
      getNewTestTotalText,
      parts,
      setParts,
      testTotal,
      setTestTotal,
      page,
      topicsList,
      setTopicsList,
    ]
  )

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
      saveTopicsList(page, list)

      const newTestTotal = {
        amount: 0,
        text: '',
      }
      setTestTotal(newTestTotal)
      saveTestTotal(page, newTestTotal)

      const newParts = {
        test: false,
        detailed: false,
      }
      setParts(newParts)
      saveParts(page, newParts)
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
              onChange={switchPart}
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
              onChange={switchPart}
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
