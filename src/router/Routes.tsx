import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Auth from "../screens/auth/Auth";
import Home from "../screens/home/Home";
import NotFound from "../screens/notFound/NotFound"


export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Home/>
        ),
        errorElement: <NotFound/>
    },
    {
        path: "/auth",
        element: (
            <Auth/>
        )
    }
]);
