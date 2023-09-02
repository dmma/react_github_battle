import PlayerPreview from "./PlayerPreview";
import PlayerInput from "./PlayerInput";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPlayerOneName, setPlayerTwoName} from "../redux/battle/BattleActions";

const Battle = () => {
    const playerOneName = useSelector(state => state.battle.playerOneName);
    const playerTwoName = useSelector(state => state.battle.playerTwoName);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='row'>
                {playerOneName ?
                    <PlayerPreview
                        id='playerOne'
                        avatar={`https://github.com/${playerOneName}.png?size200`}
                        userName={playerOneName}>
                        <button className='reset' onClick={() => dispatch(setPlayerOneName(null))}>Reset</button>
                    </PlayerPreview> :
                    <PlayerInput
                        id='playerOne'
                        label='Player 1'
                        onSubmit={(name) => dispatch(setPlayerOneName(name))}
                    />}
                {playerTwoName ?
                    <PlayerPreview
                        id='playerTwo'
                        avatar={`https://github.com/${playerTwoName}.png?size200`}
                        userName={playerTwoName}>
                        <button className='reset' onClick={() => dispatch(setPlayerTwoName(null))}>Reset</button>
                    </PlayerPreview> :
                    <PlayerInput
                        id='playerTwo'
                        label='Player 2'
                        onSubmit={(name) => dispatch(setPlayerTwoName(name))}
                    />}
            </div>
            {playerOneName && playerTwoName ?
                <Link to={{
                    pathname: 'result',
                    search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                }} className='button'>Battle</Link> :
                null
            }
        </div>
    );
}

export default Battle