import React, { useState } from 'react';
import cx from 'classnames';

import ProfileLink from './components/ProfileLink/ProfileLink';
import ProfileAuth from './components/ProfileAuth';
import './ProfileWidget.scss';

const ProfileWidget = ({ className }) => {
	const [auth, setAuth] = useState(false);

	return (
		<div className={cx('ProfileWidget', className)}>
			{auth ? <ProfileLink /> : <ProfileAuth />}
		</div>
	);
};

export default ProfileWidget;
