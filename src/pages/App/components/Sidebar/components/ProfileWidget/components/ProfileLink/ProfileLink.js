import React, { useCallback } from 'react';

import './ProfileLink.scss';

import signOutIcon from './assets/signOutIcon.png';

const ProfileLink = ({ setAuth }) => {
	const signOut = useCallback(
		e => {
			e.preventDefault();
			setAuth(false);
		},
		[setAuth]
	);

	return (
		<>
			<div className="">
				<a
					className="Link Link_static ProfileWidget-Link"
					href="/profile"
				>
					Константин
				</a>
			</div>
			<a href="/" onClick={e => signOut(e)}>
				<img
					className="ProfileLink-Icon"
					src={signOutIcon}
					alt="Выйти"
				/>
			</a>
		</>
	);
};

export default ProfileLink;
