import React, { FC, ChangeEventHandler } from 'react'
import cx from 'classnames'

import '../Input/Input.scss'
import './Checkbox.scss'

interface ICheckboxProps {
  className?: string
  fakeCheckboxClassName?: string
  name: string
  value: boolean
  onChange: ChangeEventHandler
}

const Checkbox: FC<ICheckboxProps> = ({
  className,
  fakeCheckboxClassName,
  name,
  value,
  onChange,
}) => {
  return (
    <>
      <input
        className={cx('Checkbox', className)}
        type="checkbox"
        name={name}
        checked={value}
        onChange={onChange}
      />
      <span className={`Input FakeCheckbox ${fakeCheckboxClassName}`}></span>
    </>
  )
}

export default Checkbox
