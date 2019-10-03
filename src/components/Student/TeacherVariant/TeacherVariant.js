import React from 'react';

import Title from '../../shared/Title';
import '../../shared/Form/Form.css';
import '../../shared/Input/Input.css';
import '../../shared/Button/Button.css';
import './TeacherVariant.css';

const TeacherVariant = () => (
	<div className="TeacherVariant">
		<Title>Вариант учителя</Title>

		<p className="Section-Desc">
			Если ваш школьный учитель составил работу и сообщил вам номер,
			введите&nbsp;его&nbsp;здесь.
		</p>

		<form action="/test" method="POST">
			<div class="Form_oneLine">
				<input
					class="Input Form_oneLine-Input"
					type="text"
					name="id"
					placeholder="Номер варианта"
				/>
				<input class="Button" type="submit" value="Открыть" />
			</div>
		</form>
	</div>
);

export default TeacherVariant;
