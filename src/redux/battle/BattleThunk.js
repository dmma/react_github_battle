import {processBattle} from "../../util/Api";
import {makeBattleFailure, makeBattleLoading, makeBattleSuccess} from "./BattleActions";

const makeBattle = (players) => async (dispatch) => {
    dispatch(makeBattleLoading())
    console.log('makeBattle')
    try {
        const result = await processBattle(players)
        if (result) {
            dispatch(makeBattleSuccess(result))
        }
    } catch (error) {
        dispatch(makeBattleFailure(error))
    }
}

export default makeBattle;