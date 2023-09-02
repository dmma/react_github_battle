import {combineReducers} from "redux";
import battleReducer from "./battle/BattleReducer";
import popularReducer from "./popular/PopularReducer";

export default combineReducers(
    {
        battle: battleReducer,
        popular: popularReducer
    }
);