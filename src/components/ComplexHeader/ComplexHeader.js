import React from 'react';
import cx from 'classnames';

import './ComplexHeader.scss';

const ComplexHeader = ({ className, children }) => (
	<div className={cx('ComplexHeader', className)}>{children}</div>
);

export default ComplexHeader;
