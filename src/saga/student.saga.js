import {takeEvery,takeLatest,call,put} from 'redux-saga/effects'
import {doneMarks,} from '../redux/allAction'
import axios from 'axios'

 
function* fetchMarks(params){
    try{  
      const marksResult =  yield  call(apiData,'helllo','seconddddd',params)
      yield put(doneMarks(marksResult))
     // yield put(doneMarks('75'))
    }catch(e){
      // yield put(doneMarks(marksResult))
    }
}

export function* waitForFetchMarks(){
  yield takeEvery('GET_MARKS',fetchMarks)
}

const apiData = async (first,id,third)=>{
  console.log(first,id,third)
  const apiRecord = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  return apiRecord.data.studentMarks
}