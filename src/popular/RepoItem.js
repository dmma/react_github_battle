import {useSelector} from "react-redux";

const RepoItem = ({id, index}) => {
     const repo = useSelector(state => state.popular.repos[id])

    return (
        <li key={repo.id} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
                <li>
                    <img className='avatar' src={repo.owner.avatar_url} alt='Avatar'/>
                </li>
                <li>
                    <a href={repo.html_url} target='_blank'>{repo.name}</a>
                </li>
                <li>{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
            </ul>
        </li>
    )
}
export default RepoItem;