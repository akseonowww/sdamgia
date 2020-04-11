import { takeLatest, call, put } from 'redux-saga/effects'

import {
  fetchAuthStatusRequest,
  fetchAuthStatusSuccess,
  fetchAuthStatusFailure,
  IAuthStatusAction,
} from './duck'
import { getAuthStatus } from './api'

function* fetchAuthStatusWatcher() {
  yield takeLatest(fetchAuthStatusRequest, fetchAuthStatusFlow)
}

function* fetchAuthStatusFlow(action: IAuthStatusAction) {
  try {
    const status = yield call(getAuthStatus, action.payload)
    yield put(fetchAuthStatusSuccess(status))
  } catch (error) {
    console.log(error)
    yield put(fetchAuthStatusFailure())
  }
}

export default function* () {
  yield fetchAuthStatusWatcher()
}
