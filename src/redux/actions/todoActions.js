import axios from "axios";
import { TODO_POST_FAIL, TODO_POST_REQUEST, TODO_POST_SUCCESS } from "../constans/todoConstans";

export const ReduxTodoPost = (userdata) => async dispatch => {
    try {
        dispatch({type: TODO_POST_REQUEST})
        const {data} = await axios.post("http://localhost:5000/reduxtodo", userdata)
        dispatch({type: TODO_POST_SUCCESS})
        
    } catch (error) {
        dispatch({type: TODO_POST_FAIL,payload:error.message })
        console.log(error);
    }
}