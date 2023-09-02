import {applyMiddleware, createStore} from "redux";
import rootReducer from "./RootReducer";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";

const logger = createLogger({
    collapsed: true
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;