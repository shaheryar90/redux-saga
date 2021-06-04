import {all} from 'redux-saga/effects'
import {waitForFetchMarks} from './saga/student.saga'
import {waitForFetchAge} from './saga/age.saga'

export default function* rootSaga(){
  yield all([waitForFetchMarks(),waitForFetchAge()])
}

//sb voucher calls hote hai