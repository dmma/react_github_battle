import {POPULAR} from "./PopularConstants";

const initialState = {
    selectedLanguage: 'All',
    loading: false,
    reposIds: [],
    repos: {},
    error: null
}

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR.SET_SELECTED_LANGUAGE :
            return {
                ...state,
                selectedLanguage: action.payload
            };
        case POPULAR.GET_REPOS_LOADING :
            return {
                ...state,
                loading: true,
                error: null
            };
        case POPULAR.GET_REPOS_SUCCESS :
            return {
                ...state,
                loading: false,
                reposIds: action.payload.map(repo => repo.id),
                repos: action.payload.reduce((acc, repo) => {
                    acc[repo.id] = repo;
                    return acc;
                }, {})
            };
        case POPULAR.GET_REPOS_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default :
            return state;
    }
}

export default popularReducer;