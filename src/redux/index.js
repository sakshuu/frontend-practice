import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/todoReducers";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers ({
todo: userReducer
})

const storeRedux = createStore(
    rootReducers,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)


export default storeRedux