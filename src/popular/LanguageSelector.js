import {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedLanguage} from "../redux/popular/PopularActions";
import getRepos from "../redux/popular/PopularThunk";

const languages = ['All', 'Javascript', 'Java', 'Ruby', 'Python', 'CSS'];
const LanguageSelector = () => {
    const selectedLanguage = useSelector(state => state.popular.selectedLanguage)

    const dispatch = useDispatch();

    console.log('Rendering LanguageSelector')

    const selectedLanguageIndex = languages.indexOf(selectedLanguage);

    useEffect(() => {
        dispatch(getRepos(selectedLanguage))
    }, [selectedLanguage]);

    return (
        <Fragment>
            <ul className='languages'>
                {languages.map((language, index) => (
                    <li
                        key={index}
                        id={languages[index]}
                        style={{color: index === selectedLanguageIndex ? '#d0021b' : '#000000'}}
                        onClick={() => dispatch(setSelectedLanguage(languages[index]))}>
                        {language}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default LanguageSelector;