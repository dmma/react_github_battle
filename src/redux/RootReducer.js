import {combineReducers} from "redux";
import battleReducer from "./battle/BattleReducer";

export default combineReducers(
    {
        battle: battleReducer
    }
);