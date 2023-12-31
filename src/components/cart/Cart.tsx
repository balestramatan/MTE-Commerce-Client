import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { observer } from 'mobx-react';
import cartStyle from './Cart.module.scss';
import './Cart.customization.css';
import CartItem from './cartItem/CartItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import rootStores from '../../stores';
import { CART_STORE } from '../../stores/consts';
import CartStore from '../../stores/Cart.store';

const cartStoreStore = rootStores[CART_STORE] as CartStore;

interface IProps {
  isCartOpen: boolean;
  onClose: any;
}

const Cart = observer((props: IProps) => {
  const { isCartOpen, onClose } = props;
  const { products, getTotalPrice, isCartUpdated } = cartStoreStore;
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [isCartUpdated]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('cart-open');
    } else {
      document.body.classList.remove('cart-open');
    }
  }, [isCartOpen]);

  const cartNavigationHandler = () => {
    onClose();
    navigate('/cart');
  };

  return (
    <Drawer title='עגלת קניות' placement='left' onClose={onClose} open={isCartOpen}>
      <div className={`${cartStyle.cartContextContainer} row`}>
        {products?.length !== 0 ? (
          <>
            <div className={`${cartStyle.cartItemsContainer} row`}>
              {products?.map((product, i) => {
                return (
                  <div key={i}>
                    <CartItem product={product} />
                    {i !== products.length - 1 ? (
                      <div className={`${cartStyle.cartItemDividerContainer} row`}>
                        <Divider className={`${cartStyle.cartItemDivider}`} />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })}
            </div>
            <div className={`${cartStyle.cartSummaryContainer} row`}>
              <div className={`${cartStyle.cartTotalPriceContainer} row`}>
                <div className={`col-2`}>
                  <span>סה"כ</span>
                </div>
                <div className={`col-2`}>
                  <span>₪{totalPrice}</span>
                </div>
              </div>
              <div className={`${cartStyle.cartButtonContainer} row`}>
                <Button onClick={cartNavigationHandler} className={cartStyle.cartButton} variant='contained'>
                  עגלה
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className={`${cartStyle.cartEmptyContainer} row`}>
            <span>עגלת הקניות שלך ריקה</span>
          </div>
        )}
      </div>
    </Drawer>
  );
});

export default Cart;
