import React from "react";
import Layout from "./screens/layout/Layout";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/Routes";

function App() {
    return (
        <Layout>
            <Header/>
            <RouterProvider router={router}/>
            <Footer/>
        </Layout>
    );
}

export default App;
