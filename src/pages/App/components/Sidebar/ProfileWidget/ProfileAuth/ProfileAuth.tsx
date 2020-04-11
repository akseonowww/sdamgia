import React, { FC, useState, useCallback, useRef, useEffect } from 'react'
import { cn } from '@bem-react/classname'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAuthStatusRequest } from 'modules/Auth'
import { getAuthLoading, getAuthStatus } from 'modules/Auth/selectors'
import Button from 'components/Button'
import './ProfileAuth.scss'
import ProfileAuthLinks from './ProfileAuthLinks'

interface IFieldState {
  value: string
  error: boolean
}

const ProfileAuth: FC = () => {
  const profileAuth = cn('ProfileAuth')

  const [email, setEmail] = useState<IFieldState>({ value: '', error: false })
  const [password, setPassword] = useState<IFieldState>({
    value: '',
    error: false,
  })
  const [submitted, isSubmitted] = useState(false)
  const [readyForCheck, isReadyForCheck] = useState(false)
  const [wrongData, setWrongData] = useState(false)

  const loading = useSelector(getAuthLoading)
  const auth = useSelector(getAuthStatus)
  const dispatch = useDispatch()

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

          if (submitted) {
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

          if (submitted) {
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
    [submitted, email, password]
  )

  const handleInputFocus = useCallback((ref) => {
    ref.current.focus()
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      isSubmitted(true)
      isReadyForCheck(true)

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

      setWrongData(false)

      dispatch(
        fetchAuthStatusRequest({
          username: email.value,
          password: password.value,
        })
      )
    },
    [email, password, handleInputFocus, dispatch]
  )

  useEffect(() => {
    if (readyForCheck && !loading && !auth) {
      setWrongData(true)
      handleInputFocus(emailInput)

      isReadyForCheck(false)
    }
  }, [readyForCheck, loading, auth, handleInputFocus])

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
            autoComplete="off"
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
        <Button
          className={cx({ Button_disabled: loading }, 'ProfileAuth-Button')}
          disabled={loading}
        >
          Войти
        </Button>
      </form>

      <ProfileAuthLinks blockClassName={profileAuth} />
    </div>
  )
}

export default ProfileAuth
