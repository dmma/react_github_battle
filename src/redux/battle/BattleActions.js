import {BATTLE} from "./BattleConstants";

export const setPlayerOneName = (payload) => ({
    type: BATTLE.PLAYER_ONE_NAME,
    payload
})
export const setPlayerTwoName = (payload) => ({
    type: BATTLE.PLAYER_TWO_NAME,
    payload
})
export const makeBattleLoading = () => ({
    type: BATTLE.MAKE_BATTLE_LOADING
})
export const makeBattleSuccess = (payload) => ({
    type: BATTLE.MAKE_BATTLE_SUCCESS,
    payload
})
export const makeBattleFailure = (payload) => ({
    type: BATTLE.MAKE_BATTLE_FAILURE,
    payload
})