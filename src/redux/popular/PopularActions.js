import {POPULAR} from "./PopularConstants";

export const setSelectedLanguage = (payload) => ({
    type: POPULAR.SET_SELECTED_LANGUAGE,
    payload
})
export const getReposLoading = () => ({
    type: POPULAR.GET_REPOS_LOADING
})
export const getReposSuccess = (payload) => ({
    type: POPULAR.GET_REPOS_SUCCESS,
    payload
})
export const getReposFailure = (payload) => ({
    type: POPULAR.GET_REPOS_FAILURE,
    payload
})