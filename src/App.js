import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home";
import Popular from "./popular/Popular";
import Battle from "./Battle";
import Navigation from "./Navigation";

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
