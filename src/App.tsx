import React from "react";
import { router } from "./router/Routes";
import { RouterProvider } from "react-router-dom";
import Layout from "./screens/layout/Layout";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const store = {
    aboutText: "מגוון מוצרים במחירים בלי תחרות משלוחים לכל איזור הדרום",
    storeInformation: [
      {
        type: "address",
        value: "שדרות ירושלים 1, נתיבות",
        icon: "HomeOutlinedIcon",
      },
      { type: "phone", value: "050-763-0488", icon: "HomeOutlinedIcon" },
      {
        type: "email",
        value: "smoketalk1@gmail.com",
        icon: "HomeOutlinedIcon",
      },
    ],
    usefulLinks: ["Link 1", "Link 2", "Link 3"],
    openingHours: [
      "ראשון עד חמישי: 07:00 - 20:00",
      "שישי: 09:00 - 15:00",
      `מוצ"ש: 21:00 - 00:00`,
    ],
  };

  return (
    <>
      <Layout>
        <Header />
        <RouterProvider router={router} />
        <Footer store={store} />
      </Layout>
    </>
  );
}

export default App;
