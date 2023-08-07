import React, { useState } from "react";
import productMiniCardStyle from "./ProductMiniCard.module.scss";
import ProductModal from "../../../components/product/productModal/ProductModal";

interface IProps {
  product: any;
}

const ProductMiniCard = (props: IProps) => {
  const { product } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const cardImageStyle = {
    "--background-image": `url(https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg)`,
  } as any;

  return (
    <div className={productMiniCardStyle.productMiniCardContainer}>
      <div
        className={productMiniCardStyle.productMiniCardImage}
        style={cardImageStyle}
      >
        <ProductModal
          handleClose={handleClose}
          isOpen={isOpen}
          product={product}
        />
        <div className={productMiniCardStyle.productMiniButtonContainer}>
          <button
            onClick={handleOpen}
            className={productMiniCardStyle.productMiniButton}
          >
            <span>תצוגה מהירה</span>
          </button>
        </div>
      </div>
      <div
        className={productMiniCardStyle.productMiniCardProductDetailsContainer}
      >
        <div className={productMiniCardStyle.productMiniCardProductDetailsRow}>
          <span>{product.name}</span>
        </div>
        <div className={productMiniCardStyle.productMiniCardProductDetailsRow}>
          <span>₪{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductMiniCard;
