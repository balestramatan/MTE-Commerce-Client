import React from "react";
import layoutStyle from "./Home.module.scss";
import ProductModal from "../../components/product/productModal/ProductModal";

interface Iprops {}

const Home = (props: Iprops) => {
  const {} = props;
  const product = {
    name: "גחל יאקוזה לנרגילה",
    images: [
      "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
      "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg"
    ],
    stock: true,
    price: "39.99",
    promotionPrice: ""
  }

  return (
    <div className={layoutStyle.homeContainer}>
      <div>
        <h1>עמוד הבית</h1>
        <ProductModal product={product} />
      </div>
    </div>
  );
};

export default Home;
