import React from "react";
import promotionProductsStyle from "./PromotionProducts.module.scss";
import ProductMiniCard from "../productMiniCard/ProductMiniCard";
import Product from "../../../models/Product.model";

interface IProps {
    title: string;
    onProductClick: (product: Product) => void;
    products: Product[];
}

const PromotionProducts = (props: IProps) => {
    const {title, onProductClick, products} = props;
    return (
        <>
            <div className={promotionProductsStyle.promotionProductsTitleContainer}>
                <span className={promotionProductsStyle.promotionProductsTitle}>
                  {title}
                </span>
            </div>

            <div className={promotionProductsStyle.promotionProductsContainer}>
                {products.map((product, i) => {
                    return <ProductMiniCard key={i} product={product} onProductClick={onProductClick}/>;
                })}
            </div>
        </>
    );
};

export default PromotionProducts;
