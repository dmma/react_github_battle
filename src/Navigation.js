import {NavLink, Outlet} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <ul className='nav'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/popular'>Popular</NavLink></li>
                <li><NavLink to='/battle'>Battle</NavLink></li>
            </ul>
            <Outlet/>
        </>
    )
}
export default Navigation