import React from 'react';

import signOutIcon from './assets/signOutIcon.png';

const ProfileLink = () => {
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
			<a href="/signout">
				<img src={signOutIcon} alt="Выйти" />
			</a>
		</>
	);
};

export default ProfileLink;
