import { applyMiddleware, combineReducers, createStore } from "redux";
import dataReducer from "./reducer/dataReducer";
import todoListReducer from "./reducer/todoListReducer";
import todoPanelReducer from "./reducer/todoPanelReducer";
import userPanelReducer from "./reducer/userPanelReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const reducer = combineReducers({
    data: dataReducer,
    todoList: todoListReducer,
    todoPanel: todoPanelReducer,
    userPanel: userPanelReducer
})
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
