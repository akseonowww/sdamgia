import { createAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

import { IAuthParams } from './api'
import * as constants from './constants'

export interface IAuthStatusAction {
  type: typeof constants.FETCH_AUTH_STATUS_REQUEST
  payload: IAuthParams
}

export const startAuthLoading = createAction(constants.START_AUTH_LOADING)
export const finishAuthLoading = createAction(constants.FINISH_AUTH_LOADING)

export const fetchAuthStatusRequest = createAction(
  constants.FETCH_AUTH_STATUS_REQUEST
)
export const fetchAuthStatusSuccess = createAction(
  constants.FETCH_AUTH_STATUS_SUCCESS
)
export const fetchAuthStatusFailure = createAction(
  constants.FETCH_AUTH_STATUS_FAILURE
)

export const fetchAuthUserSuccess = createAction(
  constants.FETCH_AUTH_USER_SUCCESS
)
export const fetchAuthUserFailure = createAction(
  constants.FETCH_AUTH_USER_FAILURE
)

const loading = handleActions(
  {
    [constants.START_AUTH_LOADING]: () => true,
    [constants.FINISH_AUTH_LOADING]: () => false,
  },
  false
)

const status = handleActions(
  {
    [constants.FETCH_AUTH_STATUS_REQUEST]: () => false,
    [constants.FETCH_AUTH_STATUS_SUCCESS]: (_state, action) => action.payload,
    [constants.FETCH_AUTH_STATUS_FAILURE]: () => false,
  },
  false
)

const user = handleActions(
  {
    [constants.FETCH_AUTH_USER_SUCCESS]: (_state, action) => action.payload,
    [constants.FETCH_AUTH_USER_FAILURE]: () => null,
  },
  null
)

export default combineReducers({
  loading,
  status,
  user,
})
