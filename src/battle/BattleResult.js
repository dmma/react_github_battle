import {useLocation} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {fetchUserProfileWithRepos} from "../Api";
import Loader from "../popular/Loader";
import PlayerPreview from "./PlayerPreview";
import PlayerDetails from "./PlayerDetails";

const BattleResult = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);

    useEffect(() => {
        setLoading(true);
        const searchParams = new URLSearchParams(location.search);
        handleFetch(searchParams.get('playerOneName'), searchParams.get('playerTwoName'))
    }, [])

    const handleFetch = async (firstUserName, secondUserName) => {
        const firstUser = await fetchUserProfileWithRepos(firstUserName)
            .then((useState) => {
                return {
                    user: useState.user,
                    score: calculateScore(useState)
                }
            });
        const secondUser = await fetchUserProfileWithRepos(secondUserName)
            .then((useState) => {
                return {
                    user: useState.user,
                    score: calculateScore(useState)
                }
            });
        let users = [firstUser, secondUser];
        users.sort((a, b) => b.score - a.score);

        setWinner(users[0]);
        setLoser(users[1]);
        setLoading(false);
    }

    function calculateScore(userProfileWithRepos) {
        const totalStars = userProfileWithRepos.repos.reduce((totalStars, repo) => totalStars + repo.stargazers_count, 0);
        const followers = userProfileWithRepos.user.followers;
        return totalStars + followers;
    }

    return (
        <div className='row'>
            <Loader isLoading={loading}/>
            {winner ?
                <Fragment>
                    <PlayerPreview
                        id={winner.user.id}
                        avatar={winner.user.avatar_url}
                        userName={winner.user.login}>
                        <PlayerDetails
                            id={winner.user.id}
                            battleTitle='Winner'
                            player={winner}/>
                    </PlayerPreview>
                </Fragment> : null
            }
            {loser ?
                <Fragment>
                    <PlayerPreview
                        id={loser.user.id}
                        avatar={loser.user.avatar_url}
                        userName={loser.user.login}>
                        <PlayerDetails
                            id={loser.user.id}
                            battleTitle='Loser'
                            player={loser}/>
                    </PlayerPreview>
                </Fragment> : null
            }
        </div>
    );
}

export default BattleResult;