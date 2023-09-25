import React from 'react';
import promotionProductsStyle from './PromotionProducts.module.scss';
import ProductMiniCard from '../productMiniCard/ProductMiniCard';
import Product from '../../../models/Product.model';
import { observer } from 'mobx-react';

interface IProps {
    title: string;
    products: Product[];
}

const PromotionProducts = observer((props: IProps) => {
    const { title, products } = props;
    return (
        <>
            <div className={promotionProductsStyle.promotionProductsTitleContainer}>
                <span className={promotionProductsStyle.promotionProductsTitle}>{title}</span>
            </div>

            <div className={`${promotionProductsStyle.promotionProductsProductsContainer} row`}>
                {products?.map((product, i) => {
                    return (
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={i}>
                            <ProductMiniCard product={product} />
                        </div>
                    );
                })}
            </div>
        </>
    );
});

export default PromotionProducts;
