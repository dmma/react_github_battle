import {useCallback, useEffect, useState} from "react";
import {fetchPopularRepos} from "../Api";
import LanguageSelector from "./LanguageSelector";
import RepoList from "./RepoList";
import Loader from "./Loader";
import {useSearchParams} from "react-router-dom";

const Popular = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedLanguage, setSelectedLanguage] = useState()
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        let language = searchParams.has('language') ? searchParams.get('language') : 'All';
        setSelectedLanguage(language);
        setLoading(true);
        fetchPopularRepos(language)
            .then(repos => setRepos(repos))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [searchParams]);

    const handleLanguageIndexChange = useCallback((event) => {
        const l = event.target.id;
        setSearchParams({language: l}, {replace: true})
    }, []);

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <LanguageSelector
                selectedLanguage={selectedLanguage}
                handleLanguageIndexChange={handleLanguageIndexChange}
            />
            <Loader isLoading={loading}/>
            <RepoList repos={repos}/>
        </div>
    )
}

export default Popular