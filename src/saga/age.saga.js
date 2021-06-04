import { takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import { doneAge, errorDoneAge } from '../redux/allAction'
import axios from 'axios'


function* fetchAge() {
  // console.log(actions.payload,"sajjjjjjj")
  try {
    const marksResult = yield call(apiData)
    console.log(marksResult, "mark result")
    yield put(doneAge(marksResult))
    //doneAge success wala action jo aghe reducer ke paas jae ga
  } catch (e) {
    // console.log(marksResult, "mark result")
    console.log(e, "error not found")
    yield put(errorDoneAge("not successs"))
    //errorDoneAge wala agr api glt hit hue hai tou error ahjae ga 
  }
}

export function* waitForFetchAge() {
  yield takeLatest('GET_AGE', fetchAge)
}
 //ye jo function hai generator function isme tou yeild hai isme aik tou constant hai jo action function mein hai
 //aur dosra function hai fetch age wala


const apiData = async (first, id, third) => {
  const apiRecord = await axios.get('https://jsonplaceholder.typicode.com/todos')
  return apiRecord.data
}