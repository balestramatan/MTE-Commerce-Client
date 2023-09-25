import React from 'react';
import cartStyle from "./Cart.module.scss";
import Button from "@mui/material/Button";

const CartContinueBuyingButton = ({onButtonClick}) => {
    return (
        <div className={`${cartStyle.checkoutButtonContainer} row`}>
            <Button onClick={onButtonClick} className={cartStyle.cartButton} variant='contained'>
                המשיכו ברכישה
            </Button>
        </div>
    );
};

export default CartContinueBuyingButton;
