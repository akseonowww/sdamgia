import React, { FC, useCallback } from 'react'

import Link from 'components/Link'
import './ProfileLink.scss'

import signOutIcon from './assets/signOutIcon.png'

interface IProfileLinkProps {
  setAuth: Function
}

const ProfileLink: FC<IProfileLinkProps> = ({ setAuth }) => {
  const signOut = useCallback(
    e => {
      e.preventDefault()
      setAuth(false)
    },
    [setAuth]
  )

  return (
    <>
      <div className="ProfileLink">
        <Link className="Link_static ProfileWidget-Link" href="/profile">
          Константин
        </Link>
      </div>
      <a href="/" onClick={e => signOut(e)}>
        <img className="ProfileLink-Icon" src={signOutIcon} alt="Выйти" />
      </a>
    </>
  )
}

export default ProfileLink
