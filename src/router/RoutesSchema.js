import {createBrowserRouter} from "react-router-dom";
import Navigation from "../Navigation";
import Home from "../Home";
import Popular from "../popular";
import Battle from "../battle";
import BattleResult from "../battle/BattleResult";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigation/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/popular",
                element: <Popular/>,
            },
            {
                path: "/battle",
                element: <Battle/>,
            },
            {
                path: "/battle/result",
                element: <BattleResult/>,
            },
            {
                path: "*",
                element: <h2>Error</h2>,
            }
        ]
    },

]);