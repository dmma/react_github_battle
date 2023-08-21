const PlayerDetails = ({battleTitle, player}) => {
    return (
        <div className='column'>
            <ul className='space-list-items'>
                <li style={{color: '#d0021b'}}>{battleTitle}</li>
                <li>Score : {player.score}</li>
                <li>{player.user.name}</li>
                <li>{player.user.location}</li>
                <li>{player.user.company}</li>
                <li>Followers : {player.user.followers}</li>
                <li>Following : {player.user.following}</li>
                <li>
                    <a href={player.user.repos_url} target='_blank'>Repos</a>
                </li>
            </ul>
        </div>
    );
}
export default PlayerDetails;