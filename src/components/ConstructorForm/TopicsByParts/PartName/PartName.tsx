import React, { FC } from 'react'
import cx from 'classnames'

interface IPartName {
  part: string
  handleExtraPartNameClick: () => void
}

const PartName: FC<IPartName> = ({ part, handleExtraPartNameClick }) => {
  let partName = null
  switch (part) {
    case 'test':
      partName = 'Тестовая часть'
      break
    case 'detailed':
      partName = 'Развернутая часть'
      break
    case 'extra':
      partName = 'Задания, не входящие в ЕГЭ этого года'
      break
    default:
      partName = null
      break
  }

  return (
    <div
      className={cx('ConstructorForm-Row ConstructorForm-Row_label', {
        'Link Link_pseudo Link_wrap': part === 'extra',
      })}
      onClick={part === 'extra' ? handleExtraPartNameClick : undefined}
    >
      <div className="ConstructorForm-Topic">
        {part !== 'extra' ? (
          <>{partName}</>
        ) : (
          <u className="Link-U Link_pseudo-U Link_wrap-U">{partName}</u>
        )}
      </div>
    </div>
  )
}

export default PartName
