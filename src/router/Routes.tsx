import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Auth from "../screens/auth/Auth";
import Home from "../screens/home/Home";
import NotFound from "../screens/notFound/NotFound"
import {RoutesUrl} from "./RoutesUrls";


export const router = createBrowserRouter([
    {
        path: RoutesUrl.welcome,
        element: (
            <Home/>
        ),
        errorElement: <NotFound/>
    },
    {
        path: RoutesUrl.auth,
        element: (
            <Auth/>
        )
    }
]);
