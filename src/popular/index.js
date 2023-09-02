import {Fragment} from "react";
import LanguageSelector from "./LanguageSelector";
import RepoList from "./RepoList";

const Popular = () => {
    return (
        <Fragment>
            <LanguageSelector/>
            <RepoList />
        </Fragment>
    )
}

export default Popular