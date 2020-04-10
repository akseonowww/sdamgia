import React, { FC, useState, useCallback, useRef } from 'react'
import { cn } from '@bem-react/classname'
import cx from 'classnames'
import axios from 'axios'

import Button from 'components/Button'
import './ProfileAuth.scss'
import ProfileAuthLinks from './ProfileAuthLinks'

interface IProfileAuthProps {
  setAuth: Function
}

interface IFieldState {
  value: string
  error: boolean
}

const ProfileAuth: FC<IProfileAuthProps> = ({ setAuth }) => {
  const profileAuth = cn('ProfileAuth')

  const [email, setEmail] = useState<IFieldState>({ value: '', error: false })
  const [password, setPassword] = useState<IFieldState>({
    value: '',
    error: false,
  })
  const [submit, setSubmit] = useState<boolean>(false)
  const [wrongData, setWrongData] = useState<boolean>(false)

  const emailInput = useRef<HTMLInputElement | null>(null)
  const passwordInput = useRef<HTMLInputElement | null>(null)

  const handleInputChange = useCallback(
    (e) => {
      const { name, value: newValue } = e.target
      let newError = false

      switch (name) {
        case 'user':
          setEmail({
            ...email,
            value: newValue,
          })

          if (submit) {
            newError =
              !newValue.trim() || !newValue.match(/.+@.+\..+/i) ? true : false

            setEmail({
              value: newValue,
              error: newError,
            })
          }

          break
        case 'password':
          setPassword({
            ...password,
            value: newValue,
          })

          if (submit) {
            newError = !newValue ? true : false

            setPassword({
              value: newValue,
              error: newError,
            })
          }

          break
        default:
          break
      }
    },
    [email, password, submit]
  )

  const handleInputFocus = useCallback((ref) => {
    ref.current.focus()
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      setSubmit(true)

      // Validation
      if (
        !email.value.trim() ||
        !email.value.match(/.+@.+\..+/i) ||
        !password.value
      ) {
        if (!password.value) {
          handleInputFocus(passwordInput)
          setPassword({
            ...password,
            error: true,
          })
        }

        if (!email.value.trim() || !email.value.match(/.+@.+\..+/i)) {
          handleInputFocus(emailInput)
          setEmail({
            ...email,
            error: true,
          })
        }

        return
      }

      axios
        .get(`${process.env.REACT_APP_LOGIN}`, {
          params: {
            username: email.value,
            password: password.value,
          },
        })
        .then((response: any) => {
          const status: boolean = response.data.status

          if (status) {
            setAuth(true)
          } else {
            setWrongData(true)
            handleInputFocus(emailInput)
          }
        })
        .catch((error: string) => console.log(error))
    },
    [email, password, setAuth, handleInputFocus]
  )

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
          {wrongData && (
            <div className="ProfileAuth-Alert">
              Неправильная почта или&nbsp;пароль
            </div>
          )}

          <input
            className={cx('ProfileAuth-Input', {
              'ProfileAuth-Input_invalid': email.error,
            })}
            type="text"
            name="user"
            value={email.value}
            placeholder="Электронная почта"
            ref={emailInput}
            onChange={handleInputChange}
          />
          <input
            className={cx('ProfileAuth-Input', {
              'ProfileAuth-Input_invalid': password.error,
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
        <Button className="ProfileAuth-Button">Войти</Button>
      </form>

      <ProfileAuthLinks blockClassName={profileAuth} />
    </div>
  )
}

export default ProfileAuth
