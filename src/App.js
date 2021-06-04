

import { useState, useEffect } from 'react'
// import {useState,useEffect} from 'react' 
import { useSelector, useDispatch, connect } from 'react-redux'
import { updateName, updateUserId, updateStudentId, getAge } from './redux/allAction'
import { Button ,Card,Row, Col, Divider} from 'antd';
import 'antd/dist/antd.css';

import About from './About'

function App(props) {
  const [count, setCounts] = useState(0);
  const [age, setAge] = useState(0);

  const hookData = useSelector((state) => {
    // console.log(state)
    return {
      myUsers: state.user,
      myStudent: state.student
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    console.log("HIT API")
    // props.changeName('Code Improve'+count)
    //props.newStudentId(count)
  }, [count])

  const changeUserId = () => {
    // props.newUserId('RT9090')
    dispatch(updateUserId('Rttttttttt'))
  }

  
  const changeStudentId = () => {
    //  props.newStudentId(count)
  }
  const changeAgeId = () => {
    props.getAgeById()
  }

  console.log(props.myUsers, "Myusers")
  console.log('isLoading', props.loading)
  return (
    <div className="App"><br />
      <h1><center> React + Redux</center> </h1>
      <h1><center> useSelector & useDispatch Hooks</center> </h1>
      <h2>User </h2>
      <p>{hookData.myUsers.name} - {hookData.myUsers.userId}</p>
      <h2>Student</h2>
      <p>{hookData.myStudent.name} - {hookData.myStudent.studentId}</p>
      <button onClick={() => setCounts(prev => prev + 1)}>Add Count {count}  </button> <br />
      <button onClick={changeUserId}>Change UserID </button> <br />
      {/* <button onClick={changeStudentId}>Change Student </button> */}
      <button onClick={changeAgeId}>Change Student </button>
      <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    {
      (props.myUsers || []).map(items => {
        return <>
        <p>{items.userId}</p>
        </>
      }) 
    }
  {/* <p>{props.muUsers.userId}</p> */}
 
      
      <About />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state, "state")
  return {
    myUsers: state.student.age,
    myStudent: state.student,
    loading: state.student.isLoading,
    error:state.student.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    /*    changeName:(name)=>{ dispatch({type:'SET_NAME',payload:name}) },
       newUserId:(uID)=>{ dispatch({type:'NEW_USER_ID',payload:uID}) }   */

    changeName: (name) => { dispatch(updateName(name)) },
    newUserId: (uID) => { dispatch(updateUserId(uID)) },
    newStudentId: (sId) => { dispatch(updateStudentId(sId)) },
    getAgeById: (sId) => { dispatch(getAge(sId)) }


  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
