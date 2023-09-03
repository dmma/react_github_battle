import PlayerPreview from "./PlayerPreview";
import {useSelector} from "react-redux";
import {Fragment} from "react";

const PlayerDetails = ({label}) => {
    const user = useSelector(state => state.battle.battleResult.get(label));
    const profile = user ? user.profile : null;
    return (
        <div className='column'>
            {user ?
                <Fragment>
                    <h1 className='header'>{label}</h1>
                    <h3 style={{textAlign: 'center'}}>Score : {user.score}</h3>
                    <PlayerPreview
                        id={profile.id}
                        avatar={profile.avatar_url}
                        userName={profile.login}>
                        <div className='column'>
                            <ul className='space-list-items'>
                                <li>{profile.name}</li>
                                <li>{profile.location}</li>
                                <li>{profile.company}</li>
                                <li>Followers : {profile.followers}</li>
                                <li>Following : {profile.following}</li>
                                <li>
                                    <a href={profile.blog}>{profile.blog}</a>
                                </li>
                            </ul>
                        </div>
                    </PlayerPreview>
                </Fragment> : null}
        </div>
    );
}
export default PlayerDetails;