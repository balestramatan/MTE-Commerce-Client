import React from "react";
import productDetailsStyle from "./ProductDetails.module.scss";
import ProductInformation from "../../components/product/productInformation/ProductInformation";
import {useLocation} from 'react-router-dom';

const ProductDetails = () => {
    const location = useLocation();
    const product = location.state.product

    return (
        <div className={productDetailsStyle.productDetailsContainer}>
            <div className={productDetailsStyle.productTitleContainer}>
                <h1>עמוד מוצר</h1>
            </div>
            <ProductInformation product={product}/>
        </div>
    );
};

export default ProductDetails;
