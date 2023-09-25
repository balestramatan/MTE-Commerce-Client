import React from 'react';
import cartStyle from "./Cart.module.scss";
import CartItem from "../../components/cart/cartItem/CartItem";
import Divider from "@mui/material/Divider";
import ProductModel from "../../models/Product.model";

interface IProps {
    products: ProductModel[];
}

const CartItems = (props: IProps) => {
    const {products} = props;
    return (
        <div className={`${cartStyle.productsColumnContainer} col-12 col-md-6`}>
            {products?.length !== 0 ? (
                <>
                    {' '}
                    {products?.map((product, i) => {
                        return (
                            <div key={i}>
                                <CartItem product={product}/>
                                {i !== products.length - 1 ? (
                                    <div className={`${cartStyle.cartItemDividerContainer} row`}>
                                        <Divider className={`${cartStyle.cartItemDivider}`}/>
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
    );
};

export default CartItems;
