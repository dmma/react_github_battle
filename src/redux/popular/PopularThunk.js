import {fetchPopularRepos} from "../../Api";
import {getReposFailure, getReposLoading, getReposSuccess} from "./PopularActions";

const getRepos = (language) => async (dispatch) => {
    dispatch(getReposLoading())
    try {
        const repos = await fetchPopularRepos(language)
        if (repos) {
            dispatch(getReposSuccess(repos))
        }
    } catch (error) {
        dispatch(getReposFailure(error))
    }
}

export default getRepos;