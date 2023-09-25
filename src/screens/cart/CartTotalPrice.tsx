import React from 'react';
import cartStyle from "./Cart.module.scss";

const CartTotalPrice = ({totalPrice}) => {
    return (
        <div className={`${cartStyle.subTotalContainer} row`}>
            <div className={`${cartStyle.subTotalColumn} col-6`}>
                <span>סה"כ</span>
            </div>
            <div className={`${cartStyle.totalPriceColumn} col-6`}>
                <span>₪{totalPrice}</span>
            </div>
        </div>
    );
};

export default CartTotalPrice;
