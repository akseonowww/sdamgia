import React from 'react';

import OurVariants from './OurVariants';
import LarinVariants from './LarinVariants';
import Constructor from './Constructor';
import Grid from '../shared/Grid';
import TeacherVariant from './TeacherVariant';
import CatalogSearch from './CatalogSearch';
import Section from '../shared/Section';
import './Student.css';

const Student = () => (
	<>
		<OurVariants />
		<LarinVariants />

		<Section>
			<Grid>
				<TeacherVariant />
				<CatalogSearch />
			</Grid>
		</Section>

		<Constructor />
	</>
);

export default Student;
