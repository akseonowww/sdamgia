import React from 'react';

import Title from '../../shared/Title';
import '../../shared/Form/Form.css';
import '../../shared/Input/Input.css';
import '../../shared/Button/Button.css';
import './CatalogSearch.css';

const CatalogSearch = () => (
	<div className="CatalogSearch">
		<Title>Поиск в каталоге</Title>

		<p className="Section-Desc">
			Все задания открытого банка ЕГЭ по математике профильного уровня
			с образцами&nbsp;решений.
		</p>

		<form action="/test" method="POST">
			<div class="Form_oneLine">
				<input
					class="Input Form_oneLine-Input"
					type="text"
					name="id"
					placeholder="Номер или текст задания"
				/>
				<input class="Button" type="submit" value="Открыть" />
			</div>
		</form>
	</div>
);

export default CatalogSearch;
