import axios from "axios";

const handleError = (error) => {
    console.log(error);
}
export const fetchPopularRepos = (language) => {
    console.log(language, 'fetching for');
    let encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=star&order=desc`);
    return axios.get(encodeURI)
        .then(repos => {
            return repos.data.items;
        })
        .catch(handleError);
}