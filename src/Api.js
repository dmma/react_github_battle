import axios from "axios";

const handleError = (error) => {
    console.log(error);
}
export const fetchPopularRepos = (language) => {
    console.log(language, 'fetching for');
    let encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1000+language:${language}&sort=star&order=desc`);
    return axios.get(encodeURI)
        .then(repos => {
            return repos.data.items;
        })
        .catch(handleError);
}

export const fetchUserProfileWithRepos = (userName) => {
    const profileURI = window.encodeURI(`https://api.github.com/users/${userName}`);
    const reposURI = window.encodeURI(`https://api.github.com/users/${userName}/repos?per_page=100`);
    let endpoints = [
        profileURI, reposURI
    ];
    return axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then(([{data: user}, {data: repos}]) => {
            return ({user, repos});
        })
        .catch(handleError);
}