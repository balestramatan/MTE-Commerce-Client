import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import Button from "@mui/material/Button";
import cartStyle from "./Cart.module.scss";
import Divider from "@mui/material/Divider";
import CartItem from "../../components/cart/cartItem/CartItem";
import rootStores from "../../stores";
import { CART_STORE } from "../../stores/consts";
import CartStore from "../../stores/Cart.store";

const cartStoreStore = rootStores[CART_STORE] as CartStore;

const Cart = observer(() => {
  const { products, getTotalPrice, isCartUpdated } = cartStoreStore;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [isCartUpdated, getTotalPrice]);

  return (
    <>
      <div className={`${cartStyle.cartHeaderContainer}`}>
        <span>עגלה</span>
      </div>
      <div className={`${cartStyle.cartContextContainer} row`}>
        <div className={`${cartStyle.productsColumnContainer} col-6`}>
          {products?.length !== 0 ? (
            <>
              {" "}
              {products?.map((product, i) => {
                return (
                  <div key={i}>
                    <CartItem product={product} />
                    {i !== products.length - 1 ? (
                      <div
                        className={`${cartStyle.cartItemDividerContainer} row`}
                      >
                        <Divider className={`${cartStyle.cartItemDivider}`} />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div className={`${cartStyle.cartEmptyContainer}`}>
                <span>עגלת הקניות שלך ריקה</span>
              </div>
            </>
          )}
        </div>
        <div className={`${cartStyle.checkOutColumnContainer} col-6`}>
          <div className={`${cartStyle.deliveryOptionContainer} row`}>
            <div className={`${cartStyle.optionBoxColumn} col-6`}>
              <div className={cartStyle.optionBox}>
                <span>איסוף עצמי</span>
              </div>
            </div>
            <div className={`${cartStyle.optionBoxColumn} col-6`}>
              <div className={cartStyle.optionBox}>
                <span>משלוח</span>
              </div>
            </div>
          </div>
          <div className={`${cartStyle.subTotalContainer} row`}>
            <div className={`${cartStyle.subTotalColumn} col-6`}>
              <span>סה"כ</span>
            </div>
            <div className={`${cartStyle.subTotalColumn} col-6`}>
              <span>₪{totalPrice}</span>
            </div>
          </div>
          <div className={`${cartStyle.checkoutButtonContainer} row`}>
            <Button
              onClick={() => {}}
              className={cartStyle.cartButton}
              variant="contained"
            >
              המשיכו ברכישה
            </Button>
          </div>
        </div>
      </div>
    </>
  );
});

export default Cart;
