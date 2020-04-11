import React, { FC } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'

import { getAuthStatus } from 'modules/Auth/selectors'
import ProfileLink from './ProfileLink/ProfileLink'
import ProfileAuth from './ProfileAuth'
import './ProfileWidget.scss'

interface IProfileWidgetProps {
  className?: string
}

const ProfileWidget: FC<IProfileWidgetProps> = ({ className }) => {
  const auth = useSelector(getAuthStatus)

  return (
    <div className={cx('ProfileWidget', className)}>
      {auth ? <ProfileLink /> : <ProfileAuth />}
    </div>
  )
}

export default ProfileWidget
