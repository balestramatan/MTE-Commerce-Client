import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Auth from "../screens/Auth/Auth";
import Home from "../screens/Home/Home";
import NotFound from "../screens/NotFound/NotFound"


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
    errorElement: <NotFound />
  },
  {
    path: "/auth",
    element: (
      <Auth />
    )
  }
]);
