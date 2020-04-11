import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { fetchAuthStatusSuccess } from 'modules/Auth'
import Link from 'components/Link'
import './ProfileLink.scss'

import signOutIcon from './assets/signOutIcon.png'

const ProfileLink: FC = () => {
  const dispatch = useDispatch()

  const signOut = useCallback(
    (e) => {
      e.preventDefault()
      dispatch(fetchAuthStatusSuccess(false))
    },
    [dispatch]
  )

  return (
    <>
      <div className="ProfileLink">
        <Link className="Link_static ProfileWidget-Link" href="/profile">
          Константин
        </Link>
      </div>
      <a href="/" onClick={(e) => signOut(e)}>
        <img className="ProfileLink-Icon" src={signOutIcon} alt="Выйти" />
      </a>
    </>
  )
}

export default ProfileLink
