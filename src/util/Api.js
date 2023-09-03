import axios from "axios";

const handleError = (error) => {
    console.log(error);
}

const getProfile = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}`)
        .then(user => user.data)
        .catch(handleError);
}

const getRepos = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}/repos?per_page=100`)
        .then(repos => repos.data)
        .catch(handleError);
}

const calculateScore = (profile, repos) => {
    const totalStars = repos.reduce((totalStars, repo) => totalStars + repo.stargazers_count, 0);
    const followers = profile.followers;
    return totalStars + followers;
}

const getUserData = (userName) => {
    return Promise.all([
        getProfile(userName),
        getRepos(userName)
    ]).then(([profile, repos]) => {
        return {
            profile,
            score: calculateScore(profile, repos)
        }
    })
}

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score);

export const processBattle = (players) => {
    return Promise.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError);
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
