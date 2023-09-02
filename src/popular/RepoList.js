import {useSelector} from "react-redux";
import {Fragment} from "react";
import Loader from "./Loader";
import RepoItem from "./RepoItem";

const RepoList = () => {
    const reposIds = useSelector(state => state.popular.reposIds)
    const loading = useSelector(state => state.popular.loading)
    const error = useSelector(state => state.popular.error)

    if (error) {
        return <p>{error}</p>
    }

    return (
        <Fragment>
            <Loader isLoading={loading}/>
            <ul className='popular-list'>
                {reposIds.map((id, index) => {
                    return (
                        <RepoItem
                            key={id}
                            id={id}
                            index={index}
                        />)
                })}
            </ul>
        </Fragment>
    );
}
export default RepoList;