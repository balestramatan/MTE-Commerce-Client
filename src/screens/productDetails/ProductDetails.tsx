import React, {useEffect} from "react";
import productDetailsStyle from "./ProductDetails.module.scss";
import ProductInformation from "../../components/product/productInformation/ProductInformation";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state.product;


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, []);

  return (
    <div className={productDetailsStyle.productDetailsContainer}>
      <ProductInformation handleClose={()=>{}} product={product} />
    </div>
  );
};

export default ProductDetails;
