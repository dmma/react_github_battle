import {BATTLE} from "./BattleConstants";

const initialState = {
    playerOneName: null,
    playerTwoName: null,
    loading: false,
    battleResult: new Map(),
    error: null
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
        case BATTLE.MAKE_BATTLE_LOADING :
            return {
                ...state,
                loading: true,
                error: null
            };
        case BATTLE.MAKE_BATTLE_SUCCESS :
            console.log('MAKE_BATTLE_SUCCESS', action.payload )
            return {
                ...state,
                loading: false,
                battleResult:  new Map([['Winner', action.payload[0]], ['Loser', action.payload[1]]])
            };
        case BATTLE.MAKE_BATTLE_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default :
            return state;
    }
}

export default battleReducer;