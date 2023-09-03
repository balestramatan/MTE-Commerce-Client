import React, { useEffect } from "react";
import cartItemStyle from "./CartItem.module.scss";
import NumberInput from "../../elements/numberInput/NumberInput";
import Product from "../../../models/Product.model";

interface IProps {
  product: Product;
}


const CartItem = (props: IProps) => {
  const {product} = props;

  return (
    <div className={`${cartItemStyle.cartItemContainer} row`}>
      <div className={`${cartItemStyle.imageColumnContainer} col-3`}>
          <img src={product.images[0]} alt="IMG" />
      </div>
      <div className={`${cartItemStyle.descriptionColumnContainer} col-7`}>
        <div className={`${cartItemStyle.titleContainer} row`}>
          <span>{product.name}</span>
        </div>
        <div className={`${cartItemStyle.counterContainer} row`}>
          <NumberInput product={product} />
        </div>
      </div>
      <div className={`${cartItemStyle.priceColumnContainer} col-2`}>
        <div>
          <span>₪{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
