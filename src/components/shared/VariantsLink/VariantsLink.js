import React from 'react';
import { Link } from 'react-router-dom';

import './VariantsLink.css';
import '../Link/Link.css';

const VariantsLink = props => {
	const { className, to, children } = props;
	return (
		<Link className={'VariantsLink Link' + ' ' + className} to={to}>
			{!Number.isNaN(Number(children)) && (
				<span className="VariantsLink-Word">Вариант&nbsp;</span>
			)}
			{children}
		</Link>
	);
};

export default VariantsLink;
