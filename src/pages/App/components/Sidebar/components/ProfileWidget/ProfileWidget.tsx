import React, { FC, useState } from 'react'
import cx from 'classnames'

import ProfileLink from './components/ProfileLink/ProfileLink'
import ProfileAuth from './components/ProfileAuth'
import './ProfileWidget.scss'

interface IProfileWidgetProps {
  className?: string
}

const ProfileWidget: FC<IProfileWidgetProps> = ({ className }) => {
  const [auth, setAuth] = useState<boolean>(false)

  return (
    <div className={cx('ProfileWidget', className)}>
      {auth ? (
        <ProfileLink setAuth={setAuth} />
      ) : (
        <ProfileAuth setAuth={setAuth} />
      )}
    </div>
  )
}

export default ProfileWidget
