import React, { useState, useRef } from 'react';
import cx from 'classnames';

import '../../../../../../../../components/Link/Link.scss';
import '../../../../../../../../components/Button/Button.scss';
import './ProfileAuth.scss';

const ProfileAuth = ({ setAuth }) => {
	const [email, setEmail] = useState({ value: '', error: false });
	const [password, setPassword] = useState({ value: '', error: false });
	const [submit, setSubmit] = useState(false);

	const emailInput = useRef(null);
	const passwordInput = useRef(null);

	const handleInputChange = e => {
		const { name, value: newValue } = e.target;
		let newError = false;

		switch (name) {
			case 'user':
				setEmail({
					...email,
					value: newValue
				});

				if (submit) {
					newError =
						!newValue.trim() || !newValue.match(/.+@.+\..+/i)
							? true
							: false;

					setEmail({
						value: newValue,
						error: newError
					});
				}

				break;
			case 'password':
				setPassword({
					...password,
					value: newValue
				});

				if (submit) {
					newError = !newValue ? true : false;

					setPassword({
						value: newValue,
						error: newError
					});
				}

				break;
			default:
				break;
		}
	};

	const handleInputFocus = ref => {
		ref.current.focus();
	};

	const handleSubmit = e => {
		e.preventDefault();

		setSubmit(true);

		// Validation
		if (
			!email.value.trim() ||
			!email.value.match(/.+@.+\..+/i) ||
			!password.value
		) {
			if (!password.value) {
				handleInputFocus(passwordInput);
				setPassword({
					...password,
					error: true
				});
			}

			if (!email.value.trim() || !email.value.match(/.+@.+\..+/i)) {
				handleInputFocus(emailInput);
				setEmail({
					...email,
					error: true
				});
			}

			return;
		}

		if (email.value && password.value) setAuth(true);
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
						className={cx('ProfileAuth-Input', {
							'ProfileAuth-Input_invalid': email.error
						})}
						type="email"
						name="user"
						value={email.value}
						placeholder="Электронная почта"
						ref={emailInput}
						onChange={handleInputChange}
					/>
					<input
						className={cx('ProfileAuth-Input', {
							'ProfileAuth-Input_invalid': password.error
						})}
						type="password"
						name="password"
						value={password.value}
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
