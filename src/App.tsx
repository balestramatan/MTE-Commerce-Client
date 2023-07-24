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
    information: [
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
    usefulLinks: [
      {
        name: "dsa",
        url: "dsa",
      },
    ],
    openingHours: [
      {
        days: "ראשון עד חמישי",
        hours: "07:00 - 20:00",
      },
      {
        days: "שישי",
        hours: "09:00 - 15:00",
      },
      {
        days: `מוצ"ש`,
        hours: "21:00 - 00:00",
      },
    ],
    mediaLinks: [
      {
        type: "instegram",
        url: "https://www.instagram.com/smoke_talk_israel/",
      },
      {
        type: "facebook",
        url: "https://www.facebook.com/SmokeTalk1/?locale=he_IL",
      },
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
