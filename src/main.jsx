import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import Search1_HighLighter from "./01_SearchHiglighter/Search1_HighLighter";
import OnlyJS_01 from "./02_OnlyJS/OnlyJS_01";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "search1",
                element: <Search1_HighLighter />,
            },
            {
                path: "search2",
                element: <OnlyJS_01 />,
            },
        ],
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


