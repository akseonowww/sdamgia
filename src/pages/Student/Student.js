import React from 'react';

import OurVariants from './OurVariants';
import LarinVariants from './LarinVariants';
import Constructor from './Constructor';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import TeacherVariant from './TeacherVariant';
import CatalogSearch from './CatalogSearch';
import './Student.css';

const Student = () => (
	<>
		<OurVariants />

		<LarinVariants />

		<TwoColumns>
			<TeacherVariant />
			<CatalogSearch />
		</TwoColumns>

		<Constructor />
	</>
);

export default Student;
