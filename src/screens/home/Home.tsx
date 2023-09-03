import React, {useCallback, useEffect} from "react";
import homeStyle from "./Home.module.scss";
import OurServices from "../../components/ourServices/OurServices";
import PromotionProducts from "../../components/product/promotionProducts/PromotionProducts";
import Product from "../../models/Product.model";
import rootStores from "../../stores";
import {PRODUCTS_STORE} from "../../stores/consts";
import ProductsStore from "../../stores/Products.store";
import {observer} from "mobx-react";
import MainBanner from "../../components/banners/mainBanner/MainBanner";

const productsStore = rootStores[PRODUCTS_STORE] as ProductsStore;

const Home = observer(() => {
    const {hotProducts, onSaleProducts, getHotProducts, getProductsOnSale} = productsStore;

    // const _getHotProducts = async () => getHotProducts();
    const _getHotProducts = useCallback(async () => getHotProducts(), [getHotProducts]);
    const _getProductsOnSale = useCallback(async () => getProductsOnSale(), [getProductsOnSale]);

    useEffect(() => {
        _getHotProducts().then(() => console.log('fetched hot products'));
        _getProductsOnSale().then(() => console.log('fetched products on sale'));
    }, [_getHotProducts, _getProductsOnSale]);

    return (
        <div className={homeStyle.container}>
            <MainBanner/>
            <PromotionProducts products={hotProducts} title={"מוצרים חמים"}/>
            <PromotionProducts products={onSaleProducts} title={"מוצרים במבצע"}/>
            <OurServices/>
        </div>
    );
});

export default Home;
