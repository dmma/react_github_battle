import {applyMiddleware, createStore} from "redux";
import rootReducer from "./RootReducer";
import {createLogger} from "redux-logger/src";

const logger = createLogger({
    collapsed: true
})

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;