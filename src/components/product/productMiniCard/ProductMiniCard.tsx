import React, {useState} from "react";
import productMiniCardStyle from "./ProductMiniCard.module.scss";
import ProductModal from "../../../components/product/productModal/ProductModal";
import Product from "../../../models/Product.model";
import {useNavigate} from 'react-router-dom';

interface IProps {
    product: Product;
}

const ProductMiniCard = (props: IProps) => {
    const {product} = props;

    const navigate = useNavigate();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleOpen = (event: React.MouseEvent) => {
        // This prevents from the outsider div onClick function to invoked
        event.stopPropagation();

        setModalIsOpen(true);
    }
    const handleClose = () => setModalIsOpen(false);

    const onProductClick = (product: Product) => navigate(`product-details/${product.name}`, {state: {product}})

    const cardImageStyle = {
        "--background-image": `url(${product?.images?.[0]})`,
    } as any;

    return (
        <>
            <ProductModal
                handleClose={handleClose}
                isOpen={modalIsOpen}
                product={product}
            />
            <div className={productMiniCardStyle.productMiniCardContainer}
                 onClick={() => onProductClick(product)}
                 style={cardImageStyle}>
                <div
                    className={productMiniCardStyle.productMiniCardImage}>
                    <div className={productMiniCardStyle.productMiniButtonContainer}>
                        <button
                            onClick={handleOpen}
                            className={productMiniCardStyle.productMiniButton}>
                            <span>תצוגה מהירה</span>
                        </button>
                    </div>
                </div>
                <div className={productMiniCardStyle.productMiniCardProductDetailsContainer}>
                    <div className={productMiniCardStyle.productMiniCardProductDetailsRow}>
                        <span className={productMiniCardStyle.productName}>{product.name}</span>
                    </div>
                    <div className={productMiniCardStyle.productMiniCardProductDetailsRow}>
                        <span className={productMiniCardStyle.productPrice}>₪{product.price}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductMiniCard;
