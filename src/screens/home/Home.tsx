import React from "react";
import homeStyle from "./Home.module.scss";
import OurServices from "../../components/ourServices/OurServices";
import PromotionProducts from "../../components/product/promotionProducts/PromotionProducts";
import {IProduct} from "../../interfaces/interfaces";
import {useNavigate} from 'react-router-dom';

const products = [
    {
        id: '1',
        name: "1גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        stock: false,
        price: "19.99",
        promotionPrice: "",
    },
    {
        id: '2',
        name: "2גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        stock: true,
        price: "29.99",
        promotionPrice: "",
    },
    {
        id: '3',
        name: "3גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        stock: false,
        price: "39.99",
        promotionPrice: "",
    },
    {
        id: '4',
        name: "4גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        stock: true,
        price: "49.99",
        promotionPrice: "",
    },
];
const products2 = [
    {
        id: '5',
        name: "1גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        stock: false,
        price: "19.99",
        promotionPrice: "",
    },
    {
        id: '6',
        name: "2גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        stock: true,
        price: "29.99",
        promotionPrice: "",
    },
    {
        id: '7',
        name: "3גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        stock: false,
        price: "39.99",
        promotionPrice: "",
    },
    {
        id: '8',
        name: "4גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
        ],
        stock: true,
        price: "49.99",
        promotionPrice: "",
    },
];

const Home = () => {
    const navigate = useNavigate();
    const onProductClick = (product: IProduct) => {
        navigate(`product-details/${product.id}`, {state: {product}})
    }

    return (
        <div className={homeStyle.container}>
            <PromotionProducts products={products} title={"מוצרים חדשים"} onProductClick={onProductClick}/>
            <PromotionProducts products={products2} title={"דילים חמים"} onProductClick={onProductClick}/>
            <OurServices/>
        </div>
    );
};

export default Home;
