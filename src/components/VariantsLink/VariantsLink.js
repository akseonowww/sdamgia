import React from 'react';
import { Link } from 'react-router-dom';

import '../Link/Link.scss';
import './VariantsLink.css';

const VariantsLink = props => {
	const { className, to, children } = props;
	const dataWordClassName = props['data-wordClassName'];

	return (
		<Link className={`VariantsLink Link ${className}`} to={to}>
			{!Number.isNaN(Number(children)) && dataWordClassName && (
				<span className={dataWordClassName}>Вариант&nbsp;</span>
			)}
			{children}
		</Link>
	);
};

export default VariantsLink;
