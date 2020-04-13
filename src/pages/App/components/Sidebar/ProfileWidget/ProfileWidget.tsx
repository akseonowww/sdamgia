import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { getAuthStatus } from 'modules/Auth/selectors'
import ProfileLink from './ProfileLink/ProfileLink'
import ProfileAuth from './ProfileAuth'

interface IProfileWidgetProps {
  className?: string
}

const ProfileWidget: FC<IProfileWidgetProps> = ({ className }) => {
  const auth = useSelector(getAuthStatus)

  return (
    <div className={className}>{auth ? <ProfileLink /> : <ProfileAuth />}</div>
  )
}

export default ProfileWidget
