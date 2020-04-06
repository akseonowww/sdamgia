import React, {
  FC,
  useCallback,
  Dispatch,
  SetStateAction,
  MouseEvent,
  ChangeEvent,
  CSSProperties,
  RefObject,
} from 'react'
import cx from 'classnames'

import './Input.scss'

interface IInputProps {
  className?: string
  type?: string
  name: string
  value: string
  placeholder?: string
  autoFocus?: boolean
  tabIndex?: number
  style?: CSSProperties
  innerRef?: RefObject<HTMLInputElement>
  setValue?: Dispatch<SetStateAction<string>>
  handleClick?: (e: MouseEvent<HTMLInputElement>) => void
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IInputProps> = ({
  className,
  type = 'text',
  name,
  value,
  placeholder,
  autoFocus,
  tabIndex,
  style,
  innerRef,
  setValue,
  handleClick: handleSpecialClick,
  handleChange: handleSpecialChange,
}) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!setValue) return

      setValue(e.target.value)
    },
    [setValue]
  )

  return (
    <input
      className={cx('Input', className)}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      autoFocus={autoFocus}
      tabIndex={tabIndex}
      style={style}
      ref={innerRef}
      onClick={handleSpecialClick}
      onChange={handleSpecialChange ? handleSpecialChange : handleChange}
      data-testid="Input"
    />
  )
}

export default Input
