import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../screens/auth/Auth";
import Home from "../screens/home/Home";
import ProductDetails from "../screens/productDetails/ProductDetails";
import ProductsPage from "../screens/productsPage/ProductsPage";
import Profile from "../screens/profile/Profile";
import { RoutesUrl } from "./RoutesUrls";
import PrivateRoute from "./PrivateRoute";
import Cart from "../screens/cart/Cart";

const Router = () => {

  return (
    <Routes>
      <Route path={RoutesUrl.welcome} element={<Home />}></Route>
      <Route path={RoutesUrl.auth} element={<Auth />}></Route>
      <Route path={RoutesUrl.cart} element={<Cart />}></Route>
      <Route
        path={RoutesUrl.profile}
        element={<PrivateRoute element={<Profile />} />}
      />
      <Route path={RoutesUrl.productsPage} element={<ProductsPage />}></Route>
      <Route
        path={RoutesUrl.productDetails}
        element={<ProductDetails />}
      ></Route>
    </Routes>
  );
};

export default Router;
