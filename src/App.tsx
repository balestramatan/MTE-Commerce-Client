import React from "react";
import { router } from "./router/Routes";
import { RouterProvider } from "react-router-dom";
import Layout from "./screens/layout/Layout";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Layout>
      <Header />
      <RouterProvider router={router} />
      <Footer/>
    </Layout>
  );
}

export default App;
