import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home";
import Popular from "./popular/Popular";
import Battle from "./battle/Battle";
import Navigation from "./Navigation";
import BattleResult from "./battle/BattleResult";

function App() {
    const router = createBrowserRouter([
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

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
