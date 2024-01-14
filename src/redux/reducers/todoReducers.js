import { TODO_POST_FAIL, TODO_POST_REQUEST, TODO_POST_SUCCESS } from "../constans/todoConstans"

export const userReducer = (
    state = {reduxTodo:[]},
    {type,payload}
) => {
switch (type) {
    case TODO_POST_REQUEST: return{...state,loading:true}
    case TODO_POST_SUCCESS: return{...state,loading:false, todo:true}
    case TODO_POST_FAIL: return{...state,loading:false,error:payload}
        
    default:return state
        
}
}