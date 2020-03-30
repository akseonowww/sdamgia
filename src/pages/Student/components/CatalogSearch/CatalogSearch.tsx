import React, { FC, useState, useLayoutEffect } from 'react'

import Title from 'components/Title'
import 'components/Form/Form.scss'
import Input from 'components/Input'
import 'components/Button/Button.scss'

const useWindowWidth = (): number => {
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)

    window.addEventListener('resize', updateWidth)
    updateWidth()

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return width
}

const CatalogSearch: FC = () => {
  const [value, setValue] = useState('')
  const windowWidth = useWindowWidth()

  const placeholder =
    windowWidth > 836 ? 'Номер или текст задания' : '№/текст задания'

  return (
    <div className="CatalogSearch">
      <Title>Поиск в каталоге</Title>

      <p className="Section-Desc">
        Все задания открытого банка ЕГЭ по математике профильного уровня
        с образцами&nbsp;решений.
      </p>

      <form action="/test" method="POST">
        <div className="Form_oneLine">
          <Input
            className="Form_oneLine-Input"
            name="id"
            value={value}
            placeholder={placeholder}
            setValue={setValue}
          />
          <input className="Button" type="submit" value="Открыть" />
        </div>
      </form>
    </div>
  )
}

export default CatalogSearch
