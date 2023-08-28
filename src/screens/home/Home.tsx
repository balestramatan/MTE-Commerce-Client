import React, {useCallback, useEffect} from "react";
import homeStyle from "./Home.module.scss";
import OurServices from "../../components/ourServices/OurServices";
import PromotionProducts from "../../components/product/promotionProducts/PromotionProducts";
import Product from "../../models/Product.model";
import rootStores from "../../stores";
import {PRODUCTS_STORE} from "../../stores/consts";
import ProductsStore from "../../stores/Products.store";
import {observer} from "mobx-react";

const productsStore = rootStores[PRODUCTS_STORE] as ProductsStore;

const products: Product[] = [
    {
        id: '1',
        name: "1גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        inStock: false,
        price: "19.99",
        promotionPrice: "",
        description: "",
        variants: [],
    },
    {
        id: '2',
        name: "2גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        inStock: true,
        price: "29.99",
        promotionPrice: "",
        description: "",
        variants: [],
    },
    {
        id: '3',
        name: "3גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        inStock: false,
        price: "39.99",
        promotionPrice: "",
        description: "",
        variants: [],
    },
    {
        id: '4',
        name: "4גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        inStock: true,
        price: "49.99",
        promotionPrice: "",
        description: "",
        variants: [],
    },
];
const products2: Product[] = [
    {
        id: '5',
        name: "1גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        inStock: false,
        price: "19.99",
        description: "",
        promotionPrice: "",
        variants: [],
    },
    {
        id: '6',
        name: "2גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        inStock: true,
        price: "29.99",
        promotionPrice: "",
        description: "",
        variants: [],
    },
    {
        id: '7',
        name: "3גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        inStock: true,
        price: "39.99",
        promotionPrice: "",
        description: "",
        variants: [],
    },
    {
        id: '8',
        name: "4גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        inStock: true,
        price: "49.99",
        promotionPrice: "",
        description: "",
        variants: [],
    },
];

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
            <PromotionProducts products={hotProducts} title={"מוצרים חמים"}/>
            <PromotionProducts products={onSaleProducts} title={"מוצרים במבצע"}/>
            <OurServices/>
        </div>
    );
});

export default Home;
