import axios from 'axios'

export const updateName = (name)=>{
    return {
        type:'SET_NAME',
        payload:name
    } 
}

export const updateUserId = (uID)=>{
    return {
        type:'NEW_USER_ID',
        payload:uID
    } 
}

/* export const updateStudentId = (studentId)=>{
    return {
        type:'SET_SID',
        payload:studentId
    } 
}
 */ 

export const updateStudentId = (studentId)=>{
    return (dispatch)=>{
        var url = 'http://localhost/api/article-list'
        axios.get(url)
        .then(response=>{
             dispatch({type:'SET_SID', payload:response.data.data[studentId].name})
        })
        .catch(error=>{
            // 
        })
    }
}

export const getMarks = (marks)=>{
    return {
        type:'GET_MARKS',
        payload:marks
    } 
}

export const doneMarks = (marks)=>{
    return {
        type:'GET_MARKS_DONE',
        payload:marks
    } 
}


export const getAge = (age)=>{
    // console.log(age,"Age")
    return {
        type:'GET_AGE',
        payload:age
    } 
}
//type constant go to on saga and reducer

export const doneAge = (age)=>{
    // console.log(age,"Updated age")
    return {
        type:'GET_AGE_DONE',
        payload:age
    } 
}
export const errorDoneAge = (age)=>{
    console.log(age,"error in age")
    return {
        type:'ERROR_AGE_DONE',
        payload:age
    } 
}