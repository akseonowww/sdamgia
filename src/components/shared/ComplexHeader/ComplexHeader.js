import React from 'react';

import './ComplexHeader.css';

const ComplexHeader = props => {
	const { className, children } = props;

	return <div className={'ComplexHeader' + ' ' + className}>{children}</div>;
};

export default ComplexHeader;
