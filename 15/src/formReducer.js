export const initialState = {
    title: "",
    description: "",
    price: 0,
    category: "",
    tags: [],
    quantity: 0,
}

export const formReducer =(state , action) =>{
 switch (action.type){
    case "change_input":
        return {...state , [action.data.name] : action.data.value}
    case "add_tag" :
        return {...state , tags : [...state.tags , action.data]}
    case "remove_tag":
        return {...state , tags : state.tags.filter((tag)=> tag !== action.data)  }
    case "increase":
        return {...state , quantity : state.quantity + 1 }
    case "decrease":
        return {...state , quantity : state.quantity - 1 }
    default : return state
 }
}