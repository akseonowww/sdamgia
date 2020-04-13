import { takeLatest, call, put } from 'redux-saga/effects'

import {
  startAuthLoading,
  finishAuthLoading,
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
    yield put(startAuthLoading())

    const { status, user } = yield call(getAuthStatus, action.payload)

    yield put(finishAuthLoading())
    yield put(fetchAuthStatusSuccess(status))
    yield put(fetchAuthUserSuccess(user))
  } catch (error) {
    yield put(finishAuthLoading())

    yield put(fetchAuthStatusFailure())
    yield put(fetchAuthUserFailure())
  }
}

export default function* () {
  yield fetchAuthStatusWatcher()
}
