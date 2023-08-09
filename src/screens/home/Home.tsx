import React from "react";
import homeStyle from "./Home.module.scss";
import OurServices from "../../components/ourServices/OurServices";
import PromotionProducts from "../../components/product/promotionProducts/PromotionProducts";

const Home = () => {
  const products = [
    {
      name: "1גחל יאקוזה לנרגילה",
      images: [
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
      ],
      stock: false,
      price: "19.99",
      promotionPrice: "",
    },
    {
      name: "2גחל יאקוזה לנרגילה",
      images: [
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
      ],
      stock: true,
      price: "29.99",
      promotionPrice: "",
    },
    {
      name: "3גחל יאקוזה לנרגילה",
      images: [
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
      ],
      stock: false,
      price: "39.99",
      promotionPrice: "",
    },
    {
      name: "4גחל יאקוזה לנרגילה",
      images: [
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
      ],
      stock: true,
      price: "49.99",
      promotionPrice: "",
    },
  ];
  const products2 = [
    {
      name: "1גחל יאקוזה לנרגילה",
      images: [
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
      ],
      stock: false,
      price: "19.99",
      promotionPrice: "",
    },
    {
      name: "2גחל יאקוזה לנרגילה",
      images: [
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
      ],
      stock: true,
      price: "29.99",
      promotionPrice: "",
    },
    {
      name: "3גחל יאקוזה לנרגילה",
      images: [
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
      ],
      stock: false,
      price: "39.99",
      promotionPrice: "",
    },
    {
      name: "4גחל יאקוזה לנרגילה",
      images: [
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
      ],
      stock: true,
      price: "49.99",
      promotionPrice: "",
    },
  ];

  return (
    <div className={homeStyle.container}>
      <PromotionProducts products={products} title={"מוצרים חדשים"} />
      <PromotionProducts products={products2} title={"דילים חמים"} />
      <OurServices />
    </div>
  );
};

export default Home;
