import React, { FC, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchAuthStatusSuccess } from 'modules/Auth'
import { getAuthUser } from 'modules/Auth/selectors'
import Link from 'components/Link'
import './ProfileLink.scss'

import signOutIcon from './assets/signOutIcon.png'

const ProfileLink: FC = () => {
  const user = useSelector(getAuthUser)
  const dispatch = useDispatch()

  const signOut = useCallback(() => {
    dispatch(fetchAuthStatusSuccess(false))
  }, [dispatch])

  return (
    <div className="ProfileLink">
      <div className="ProfileLink-Link">
        <Link className="Link_static" href="/profile">
          {user && user.name ? user.name : 'Профиль'}
        </Link>
      </div>

      <div className="ProfileLink-Button" onClick={signOut}>
        <img className="ProfileLink-Icon" src={signOutIcon} alt="Выйти" />
      </div>
    </div>
  )
}

export default ProfileLink
