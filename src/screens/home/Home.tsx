import React, {useEffect} from "react";
import homeStyle from "./Home.module.scss";
import OurServices from "../../components/ourServices/OurServices";
import PromotionProducts from "../../components/product/promotionProducts/PromotionProducts";
import {observer} from "mobx-react";
import MainBanner from "../../components/banners/mainBanner/MainBanner";

import rootStores from "../../stores";
import {PRODUCTS_STORE} from "../../stores/consts";
import ProductsStore from "../../stores/Products.store";

const productsStore = rootStores[PRODUCTS_STORE] as ProductsStore;

const Home = observer(() => {
    const {hotProducts, onSaleProducts, getHotProducts, getProductsOnSale} = productsStore;

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on route change
        const fetchHotProducts = async () => await getHotProducts();
        const fetchProductsOnSale = async () => await getProductsOnSale();
        fetchHotProducts().then(() => console.log('fetched hot products'));
        fetchProductsOnSale().then(() => console.log('fetched products on sale'));
    }, [getHotProducts, getProductsOnSale]);

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
