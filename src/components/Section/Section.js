import React from 'react';

import './Section.scss';

const Section = props => {
	const { className, children } = props;

	return <section className={`Section ${className}`}>{children}</section>;
};

export default Section;
