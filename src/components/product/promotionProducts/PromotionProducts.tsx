import React from "react";
import promotionProductsStyle from "./PromotionProducts.module.scss";
import { IProduct } from "../../../interfaces/interfaces";
import ProductMiniCard from "../productMiniCard/ProductMiniCard";

interface IProps {
  title: string;
  products: IProduct[];
}

const PromotionProducts = (props: IProps) => {
  const { title, products } = props;
  return (
    <>
      <div className={promotionProductsStyle.promotionProductsTitleContainer}>
        <span className={promotionProductsStyle.promotionProductsTitle}>
          {title}
        </span>
      </div>

      <div className={promotionProductsStyle.promotionProductsContainer}>
        {products.map((product, i) => {
          return <ProductMiniCard key={i} product={product} />;
        })}
      </div>
    </>
  );
};

export default PromotionProducts;
