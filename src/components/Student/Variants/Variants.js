import React from 'react';
import { Link } from 'react-router-dom';

import Section from '../../shared/Section';
import ComplexHeader from '../../shared/ComplexHeader';
import Title from '../../shared/Title';
import Grid from '../../shared/Grid';
import './Variants.css';
import '../../shared/Link/Link.css';

const Variants = () => (
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
			<Link className="VariantsLink Link" to="/test?id=24890461">
				Вариант 1
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890462">
				Вариант 2
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890463">
				Вариант 3
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890464">
				Вариант 4
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890465">
				Вариант 5
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890466">
				Вариант 6
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890467">
				Вариант 7
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890468">
				Вариант 8
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890469">
				Вариант 9
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890410">
				Вариант 10
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890411">
				Вариант 11
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890412">
				Вариант 12
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890413">
				Вариант 13
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890414">
				Вариант 14
			</Link>
			<Link className="VariantsLink Link" to="/test?id=24890415">
				Вариант 15
			</Link>
			<Link
				className="VariantsLink VariantsLink_one-per-row Link Link_static"
				to="/test?id=24890466"
			>
				Ваш персональный вариант&nbsp;
				<div className="VariantsLink-Hint" title="Помощь">
					?
				</div>
			</Link>
		</Grid>
	</Section>
);

export default Variants;
