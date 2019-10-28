import React from 'react';
import cx from 'classnames';

import './ButtonVK.scss';

const ButtonVK = ({ className, url, children }) => (
	<a
		className={cx('ButtonVK', className)}
		href={url}
		rel="noopener noreferrer"
	>
		{children}
	</a>
);

export default ButtonVK;
