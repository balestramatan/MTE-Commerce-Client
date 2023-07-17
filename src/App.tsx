import React from "react";
import { router } from "./Router/Routes";
import { RouterProvider } from "react-router-dom";
import Layout from "./screens/Layout/Layout";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Layout>
        <Header />
      </Layout>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
