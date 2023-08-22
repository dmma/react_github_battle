import {useLocation} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {fetchUserProfileWithRepos, makeBattle} from "../Api";
import Loader from "../popular/Loader";
import PlayerPreview from "./PlayerPreview";
import PlayerDetails from "./PlayerDetails";

const BattleResult = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);

    useEffect(() => {
        setLoading(true);
        const searchParams = new URLSearchParams(location.search);
        makeBattle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')])
            .then(([winner, loser]) => {
                console.log(winner);
                setWinner(winner);
                setLoser(loser);
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='row'>
            <Loader isLoading={loading}/>
            {winner && loser ?
                <Fragment>
                    <PlayerDetails label='Winner' score={winner.score} profile={winner.profile}/>
                    <PlayerDetails label='Loser' score={loser.score} profile={loser.profile}/>
                </Fragment> : null
            }
        </div>
    );
}

export default BattleResult;