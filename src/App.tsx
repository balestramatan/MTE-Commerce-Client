import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Router/>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
