import React from 'react';
import cx from 'classnames';

import './Grid.scss';

const Grid = ({ className, children }) => (
	<div className={cx('Grid', className)}>{children}</div>
);

export default Grid;
