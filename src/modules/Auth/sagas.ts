import { takeLatest, call, put } from 'redux-saga/effects'

import {
  fetchAuthStatusRequest,
  fetchAuthStatusSuccess,
  fetchAuthStatusFailure,
  IAuthStatusAction,
  fetchAuthUserSuccess,
  fetchAuthUserFailure,
} from './duck'
import { getAuthStatus } from './api'

function* fetchAuthStatusWatcher() {
  yield takeLatest(fetchAuthStatusRequest, fetchAuthStatusFlow)
}

function* fetchAuthStatusFlow(action: IAuthStatusAction) {
  try {
    const { status, user } = yield call(getAuthStatus, action.payload)

    yield put(fetchAuthStatusSuccess(status))
    yield put(fetchAuthUserSuccess(user))
  } catch (error) {
    console.log(error)

    yield put(fetchAuthStatusFailure())
    yield put(fetchAuthUserFailure())
  }
}

export default function* () {
  yield fetchAuthStatusWatcher()
}
