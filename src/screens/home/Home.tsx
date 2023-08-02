import React, {useState} from "react";
import homeStyle from "./Home.module.scss";
import ProductModal from "../../components/product/productModal/ProductModal";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import OurServices from "../../components/ourServices/OurServices";

const Home = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const product = {
        name: "גחל יאקוזה לנרגילה",
        images: [
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442559/extra_large/db04dd95075c786c32661df1351125d5.jpg",
            "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg"
        ],
        stock: true,
        price: "39.99",
        promotionPrice: ""
    }

    return (
        <div className={homeStyle.container}>
            <ProductModal product={product}/>
            <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
            <div className={homeStyle.homePage}>
                Home Page
            </div>
            <OurServices />
            <Footer/>
        </div>
    );
};

export default Home;
