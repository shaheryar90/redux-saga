

const studentReducer = (state = { isLoading: false, error: null }, action,) => {

  switch (action.type) {
    case "SET_MAIL":
      state = {
        ...state,
        name: action.payload
      }
      return state
      break;

    case "SET_SID":
      state = {
        ...state,
        studentId: action.payload
      }
      return state
      break;

    case "GET_MARKS":
      state = {
        ...state,
        marks: action.payload
      }
      return state
      break;

    case "GET_MARKS_DONE":
      state = {
        ...state,
        marks: action.payload
      }
      return state
      break;


    case "GET_AGE":
      state = {
        ...state,
        age: action.payload,
        isLoading: true
      }
      return state
      break;




    case "GET_AGE_DONE":
      console.log(action.payload, "action")
      const filterData = action.payload.filter((v, i, a) => a.findIndex(t => (t.userId === v.userId)) === i)
// v=items ,i =index ,a= users array
      console.log(filterData)
      state = {
        ...state,
        age: filterData,
        isLoading: false
      }
      return state
      break;
    case "ERROR_AGE_DONE":
      state = {
        ...state,
        age: {},
        isLoading: false,
        error: action.payload
      }
      return state
      break;


    default:
      return state

  }

}

export default studentReducer