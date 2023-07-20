import React from "react";
import { router } from "./router/Routes";
import { RouterProvider } from "react-router-dom";
import Layout from "./screens/layout/Layout";
import Header from "./components/header/Header";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Layout>
        <Header />
      </Layout>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
