import React from 'react';
import { Link } from 'react-router-dom';

import Section from '../../shared/Section';
import ComplexHeader from '../../shared/ComplexHeader';
import Title from '../../shared/Title';
import Grid from '../../shared/Grid';
import VariantsLink from '../../shared/VariantsLink';
import './OurVariants.css';
import '../../shared/Link/Link.css';

const OurVariants = () => (
	<Section>
		<ComplexHeader className="Section-ComplexHeader">
			<Title>
				Тренировочные варианты
				<span className="Title-Caption">новые сентябрьские</span>
			</Title>
			<div className="ComplexHeader-Link">
				<Link className="Link Link_static" to="/archive">
					Прошлые месяцы
				</Link>
			</div>
		</ComplexHeader>

		<p className="Section-Desc">
			Специально для наших читателей мы ежемесячно составляем варианты для
			самопроверки. По окончании вашей работы система проверит ответы,
			покажет правильные решения и выставит оценку по стобалльной шкале.
		</p>

		<Grid className="Variants">
			<VariantsLink to="/test?id=24890461">1</VariantsLink>
			<VariantsLink to="/test?id=24890462">2</VariantsLink>
			<VariantsLink to="/test?id=24890463">3</VariantsLink>
			<VariantsLink to="/test?id=24890464">4</VariantsLink>
			<VariantsLink to="/test?id=24890465">5</VariantsLink>
			<VariantsLink to="/test?id=24890466">6</VariantsLink>
			<VariantsLink to="/test?id=24890467">7</VariantsLink>
			<VariantsLink to="/test?id=24890468">8</VariantsLink>
			<VariantsLink to="/test?id=24890469">9</VariantsLink>
			<VariantsLink to="/test?id=248904610">10</VariantsLink>
			<VariantsLink to="/test?id=248904611">11</VariantsLink>
			<VariantsLink to="/test?id=248904612">12</VariantsLink>
			<VariantsLink to="/test?id=248904613">13</VariantsLink>
			<VariantsLink to="/test?id=248904614">14</VariantsLink>
			<VariantsLink to="/test?id=248904615">15</VariantsLink>
			<VariantsLink
				className="VariantsLink_one-per-row Link_static"
				to="/test?a=own_test"
			>
				Ваш персональный вариант
				<div className="VariantsLink-Hint" title="Помощь">
					?
				</div>
			</VariantsLink>
		</Grid>
	</Section>
);

export default OurVariants;
