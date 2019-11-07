import React, { useState, useRef } from 'react';

import '../../../../../../../../components/Link/Link.scss';
import '../../../../../../../../components/Button/Button.scss';
import './ProfileAuth.scss';

const ProfileAuth = ({ setAuth }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const emailInput = useRef(null);
	const passwordInput = useRef(null);

	const handleInputChange = e => {
		const { name, value: newValue } = e.target;

		switch (name) {
			case 'user':
				setEmail(newValue);
				break;
			case 'password':
				setPassword(newValue);
				break;
			default:
				break;
		}
	};

	const handleEmailInputFocus = () => {
		emailInput.current.focus();
	};

	const handlePasswordInputFocus = () => {
		passwordInput.current.focus();
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (!email.trim() || !email.match(/.+@.+\..+/i)) {
			handleEmailInputFocus();
			return;
		} else if (!password) {
			handlePasswordInputFocus();
			return;
		}

		if (email && password) setAuth(true);
	};

	return (
		<div className="ProfileAuth">
			<div className="ProfileAuth-Title">Вход на сайт</div>

			<form
				className="ProfileAuth-Form"
				action=""
				method="POST"
				onSubmit={handleSubmit}
			>
				<div className="ProfileAuth-InputGroup">
					<input
						className="ProfileAuth-Input"
						type="text"
						name="user"
						value={email}
						placeholder="Электронная почта"
						ref={emailInput}
						onChange={handleInputChange}
					/>
					<input
						className="ProfileAuth-Input"
						type="password"
						name="password"
						value={password}
						placeholder="Пароль"
						ref={passwordInput}
						onChange={handleInputChange}
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
