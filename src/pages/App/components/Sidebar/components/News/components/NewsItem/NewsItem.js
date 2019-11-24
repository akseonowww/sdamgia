import React from 'react';
import cx from 'classnames';

const NewsItem = ({ type, date, text, url }) => {
	return (
		<a
			className={cx(
				'News-Item',
				{
					[`News-Item_${type}`]: type !== 'default'
				},
				'Link',
				{
					Link_static: type !== 'urgent',
					'Link_white Link_wrap': type === 'urgent'
				}
			)}
			href={url}
			rel="noopener noreferrer"
		>
			{type !== 'urgent' && (
				<>
					<div className="News-Date Smallcapitals">{date}</div>
					<div className="News-Text">{text}</div>
				</>
			)}

			{type === 'urgent' && (
				<u className="Link-U Link_white-U Link_wrap-U">{text}</u>
			)}
		</a>
	);
};

export default NewsItem;
