export const initialState = {
    title: "",
    description: "",
    price: 0,
    category: "",
    tags: [],
    quantity: 0
}

export const formReducer = (state, action)=>{
    switch (action.type){
        case "change_Input":
            return {...state, [action.data.name] : action.data.value}
        case "add_tag":

        case "remove_tag":

        case "increase":

        case "decrease":

        default: return state

    }
}