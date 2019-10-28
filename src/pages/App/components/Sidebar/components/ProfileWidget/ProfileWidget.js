import React from 'react';
import cx from 'classnames';

import './ProfileWidget.scss';

import signOutIcon from './assets/signOutIcon.png';

const ProfileWidget = ({ className }) => {
	return (
		<div className={cx('ProfileWidget', className)}>
			<div>
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
		</div>
	);
};

export default ProfileWidget;
