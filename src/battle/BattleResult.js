import {useLocation} from "react-router-dom";
import {Fragment, useEffect} from "react";
import Loader from "../util/Loader";
import PlayerDetails from "./PlayerDetails";
import {useDispatch, useSelector} from "react-redux";
import makeBattle from "../redux/battle/BattleThunk";

const BattleResult = () => {
    const location = useLocation();
    const loading = useSelector(state => state.battle.loading)
    const error = useSelector(state => state.battle.error)

    const dispatch = useDispatch();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        dispatch(makeBattle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')]))
    }, [])

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className='row'>
            <Loader isLoading={loading}/>
            {!loading ?
                <Fragment>
                    <PlayerDetails label='Winner'/>
                    <PlayerDetails label='Loser'/>
                </Fragment> : null
            }
        </div>
    );
}

export default BattleResult;