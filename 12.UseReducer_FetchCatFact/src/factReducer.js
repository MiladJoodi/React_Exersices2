import { ACTION_TYPES } from "./factAction"

export const initialState = {
  loading: false,
  fact: "",
  error: false
}

// Fetch_start   : loading :true
// fetch_success : loading: false
//               : fact : res.data.fact
//
// fetch_error   : loading: false
//    

export const factReducer = (state, action)=>{

  switch (action.type) {
    case ACTION_TYPES.Fetch_start:
      return {loading: true, fact: "", error: false}
    case ACTION_TYPES.fetch_success:
      return {loading: false, fact: action.data, error: false}
    case ACTION_TYPES.fetch_error:
      return {loading: false, fact: "", error: true}
    default:
      return state;
  }
}