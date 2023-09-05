import React from "react";
import Button from "@mui/material/Button";
import SliderShow from "../../elements/sliderShow/SliderShow";
import productInformationStyle from "./ProductInformation.module.scss";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Product from "../../../models/Product.model";
import { observer } from "mobx-react";
import rootStores from "../../../stores";
import { CART_STORE } from "../../../stores/consts";
import CartStore from "../../../stores/Cart.store";

const cartStoreStore = rootStores[CART_STORE] as CartStore;

interface IProps {
  product: Product;
  handleClose: any;
}

const ProductInformation = observer((props: IProps) => {
  const { product, handleClose } = props;
  const { addProduct, setCartIsOpen } = cartStoreStore;

  const handleAddToCart = () => {
    const shouldOpenCart = true;
    addProduct(product, shouldOpenCart);
    setCartIsOpen(true);
    handleClose();
  };

  return (
    <div
      className={`${productInformationStyle.productInformationContainer} row`}
    >
      <div className="col-12 col-md-6 row">
        <div className={`${productInformationStyle.productTitleContainer} ${productInformationStyle.customColumn}`}>
          <span>{product.name}</span>
        </div>
        <div className={`${productInformationStyle.productPriceContainer} ${productInformationStyle.customColumn}`}>
          {product.promotionPrice !== "" ? (
            <>
              <span>₪{product.promotionPrice}</span>
              <span className={productInformationStyle.strikePrice}>
                ₪{product.price}
              </span>
            </>
          ) : (
            <span>₪{product.price}</span>
          )}
        </div>
        <div className={`${productInformationStyle.dividerContainer} ${productInformationStyle.customColumn}`}>
          <Divider
            className={productInformationStyle.customerDivider}
            variant="middle"
          />
        </div>
        <div className={`${productInformationStyle.inStockContainer} ${productInformationStyle.customColumn}`}>
          {product.inStock ? (
            <Chip className={productInformationStyle.customChip} label="זמין במלאי" color="success" variant="outlined" />
          ) : (
            <Chip className={productInformationStyle.customChip} label="אזל מהמלאי" color="warning" variant="outlined" />
          )}
        </div>
        <div className={`${productInformationStyle.addToCartButtonContainer} ${productInformationStyle.customColumn}`}>
          <Button
            className={productInformationStyle.customButtonStyle}
            size="small"
            onClick={handleAddToCart}
            variant="outlined"
            disabled={!product.inStock}
          >
            הוסף לעגלה
          </Button>
        </div>
        <div className={`${productInformationStyle.productDescriptionContainer} ${productInformationStyle.customColumn}`}>
          <p>{product?.description}</p>
        </div>
      </div>
      <div className="col-8 col-md-6">
        <div className={productInformationStyle.gridImagesContainer}>
          <SliderShow images={product.images} />
        </div>
      </div>
    </div>
  );
});

export default ProductInformation;
