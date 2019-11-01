import React from 'react';

import '../../../../../../../../components/Link/Link.scss';
import '../../../../../../../../components/Button/Button.scss';
import './ProfileAuth.scss';

const ProfileAuth = () => {
	return (
		<div className="ProfileAuth">
			<div className="ProfileAuth-Title">Вход на сайт</div>

			<form className="ProfileAuth-Form" action="" method="POST">
				<div className="ProfileAuth-InputGroup">
					<input
						className="ProfileAuth-Input"
						type="text"
						name="user"
						placeholder="Электронная почта"
					/>
					<input
						className="ProfileAuth-Input"
						type="password"
						name="password"
						placeholder="Пароль"
					/>
					<input type="hidden" name="la" value="login" />
				</div>
				<button className="Button ProfileAuth-Button">Войти</button>
			</form>

			<div className="ProfileAuth-Links">
				<a className="Link Link_wrap ProfileAuth-Link" href="/register">
					<u className="Link-U Link_wrap-U">Зарегистрироваться</u>
				</a>
				<a
					className="Link Link_wrap ProfileAuth-Link"
					href="/pass_change"
				>
					<u className="Link-U Link_wrap-U">Восстановление пароля</u>
				</a>
				<a className="Link Link_wrap ProfileAuth-Link" href="/vkauth">
					<u className="Link-U Link_wrap-U">Вход через ВКонтакте</u>
				</a>
			</div>
		</div>
	);
};

export default ProfileAuth;
