import React from 'react';

import ButtonVK from '../../../../../../components/ButtonVK/ButtonVK';
import './OurSources.scss';

const OurSources = ({ className }) => (
	<div className="OurSources">
		<div className={`OurSources-Desc ${className}`}>
			<ButtonVK
				className="OurSources-ButtonVK"
				url="https://vk.com/reshuege"
			>
				Наша группа
			</ButtonVK>
			Мобильные приложения:
		</div>
		<a
			className="OurSources-ButtonStore OurSources-ButtonStore_android"
			href="https://play.google.com/store/apps/details?id=com.reshuege"
			target="_blank"
			rel="noopener noreferrer"
			title="Андроиды"
		>
			{' '}
		</a>
		<a
			className="OurSources-ButtonStore OurSources-ButtonStore_iOS"
			href="https://appsto.re/ru/TSavbb.i"
			target="_blank"
			rel="noopener noreferrer"
			title="Джобсы"
		>
			{' '}
		</a>
	</div>
);

export default OurSources;
