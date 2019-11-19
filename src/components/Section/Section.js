import React from 'react';
import cx from 'classnames';

import './Section.scss';

const Section = ({ className, children }) => (
	<section className={cx('Section', className)}>{children}</section>
);

export default Section;
