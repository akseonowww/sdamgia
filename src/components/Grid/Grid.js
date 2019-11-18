import React from 'react';

import './Grid.scss';

const Grid = props => {
	const { className, children } = props;

	return <div className={`Grid ${className}`}>{children}</div>;
};

export default Grid;
