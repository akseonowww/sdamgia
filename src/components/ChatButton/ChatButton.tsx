import React, { FC } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import './ChatButton.scss'

interface IChatButtonProps {}

const ChatButton = ({}: FC<IChatButtonProps>) => {
  const chatButton = cn('ChatButton')

  return <div className={cx(chatButton())}>Чат</div>
}

export default ChatButton
