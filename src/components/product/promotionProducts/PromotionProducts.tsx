import React from "react";
import promotionProductsStyle from "./PromotionProducts.module.scss";
import ProductMiniCard from "../productMiniCard/ProductMiniCard";
import Product from "../../../models/Product.model";
import {observer} from "mobx-react";

interface IProps {
    title: string;
    products: Product[];
}

const PromotionProducts = observer((props: IProps) => {
    const {title, products} = props;
    return (
        <>
            <div className={promotionProductsStyle.promotionProductsTitleContainer}>
                <span className={promotionProductsStyle.promotionProductsTitle}>
                  {title}
                </span>
            </div>

            <div className={promotionProductsStyle.promotionProductsContainer}>
                {products?.map((product, i) => {
                    return <ProductMiniCard key={i} product={product}/>;
                })}
            </div>
        </>
    );
});

export default PromotionProducts;
