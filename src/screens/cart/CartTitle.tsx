import React from 'react';
import cartStyle from "./Cart.module.scss";
import commonStyles from "../../styles/commonStyles.module.scss";
import {useNavigate} from 'react-router-dom';

const CartTitle = () => {
    const navigate = useNavigate();
    return (
        <div className={cartStyle.cartHeaderContainer}>
            <span>עגלה</span>
            <span onClick={() => navigate(`/`)}
                  className={`${cartStyle.continueShopping} ${commonStyles.animatedBottomBorder} ${commonStyles.fromRight} ${commonStyles.textAnimated}`}>המשך בקניות</span>
        </div>
    );
};

export default CartTitle;
