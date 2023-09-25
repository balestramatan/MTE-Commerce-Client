import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import cartStyle from './Cart.module.scss';
import Divider from '@mui/material/Divider';
import rootStores from '../../stores';
import {CART_STORE} from '../../stores/consts';
import CartStore from '../../stores/Cart.store';
import DeliveryOptions from "./DeliveryOptions";
import CartTitle from "./CartTitle";
import CartItems from "./CartItems";
import CartTotalPrice from "./CartTotalPrice";
import CartContinueBuyingButton from "./CartContinueBuyingButton";

const cartStoreStore = rootStores[CART_STORE] as CartStore;

type DeliveryOption = 'delivery' | 'selfPickup' | undefined;

const Cart = observer(() => {
    const {products, getTotalPrice, isCartUpdated} = cartStoreStore;
    const [totalPrice, setTotalPrice] = useState(0);
    const [chosenDelivery, setChosenDelivery] = useState<DeliveryOption>();

    useEffect(() => {
        setTotalPrice(getTotalPrice());
    }, [isCartUpdated, getTotalPrice]);

    const onContinueBuying = () => alert('Not Possible Yet');

    const onDeliveryOptionClick = (option: DeliveryOption) => setChosenDelivery(option);

    return (
        <>
            <CartTitle/>

            <div className={`${cartStyle.cartContextContainer} row`}>
                <CartItems products={products}/>
                <div className={`${cartStyle.checkOutColumnContainer} col-12 col-md-6`}>
                    <div className={`${cartStyle.checkOutBox}`}>
                        <DeliveryOptions onDeliveryOptionClick={onDeliveryOptionClick} chosenDelivery={chosenDelivery}/>

                        <Divider style={{backgroundColor: 'black', marginBottom: 15}}/>

                        <CartTotalPrice totalPrice={totalPrice}/>

                        <CartContinueBuyingButton onButtonClick={onContinueBuying}/>
                    </div>
                </div>
            </div>
        </>
    );
});

export default Cart;
