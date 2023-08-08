import React from "react";
import { Routes, Route } from 'react-router-dom';
import Auth from "../screens/auth/Auth";
import Home from "../screens/home/Home";
import ProductDetails from "../screens/productDetails/ProductDetails"
import NotFound from "../screens/notFound/NotFound"
import {RoutesUrl} from "./RoutesUrls";

const Router = () => (
    <Routes>
        <Route path={RoutesUrl.welcome} element={<Home />}></Route>
        <Route path={RoutesUrl.auth} element={<Auth />}></Route>
        <Route path={RoutesUrl.productDetails} element={<ProductDetails />}></Route>
    </Routes>
);

export default Router;