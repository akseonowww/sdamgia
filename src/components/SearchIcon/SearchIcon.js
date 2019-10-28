import React from 'react';

import './SearchIcon.scss';

const SearchIcon = ({ className }) => (
	<div className={`SearchIcon ${className}`}>
		<svg
			className="SearchIcon-Svg"
			version="1.1"
			viewBox="0 0 27.9 50"
			x="0px"
			y="0px"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				className="SearchIcon-Lens"
				cx="10.9"
				cy="24.1"
				r="9.4"
			></circle>
			<rect
				className="SearchIcon-Handle"
				width="3"
				height="14.5"
				x="20"
				y="27.6"
				transform="matrix(0.7071 -0.7071 0.7071 0.7071 -18.3066 25.467)"
			></rect>
		</svg>
	</div>
);

export default SearchIcon;
