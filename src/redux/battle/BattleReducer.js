import {BATTLE} from "./BattleConstants";

const initialState = {
    playerOneName: null,
    playerTwoName: null
}

const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case BATTLE.PLAYER_ONE_NAME :
            return {
                ...state,
                playerOneName: action.payload
            };
        case BATTLE.PLAYER_TWO_NAME :
            return {
                ...state,
                playerTwoName: action.payload
            };
        default :
            return state;
    }
}

export default battleReducer;