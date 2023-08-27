import {BATTLE} from "./BattleConstants";

export const setPlayerOneName = (payload) => ({
    type: BATTLE.PLAYER_ONE_NAME,
    payload
})
export const setPlayerTwoName = (payload) => ({
    type: BATTLE.PLAYER_TWO_NAME,
    payload
})