import React, {useState} from "react";
import productMiniCardStyle from "./ProductMiniCard.module.scss";
import ProductModal from "../../../components/product/productModal/ProductModal";
import {IProduct} from "../../../interfaces/interfaces";

interface IProps {
    product: IProduct;
    onProductClick: (product: IProduct) => void;
}

const ProductMiniCard = (props: IProps) => {
    const {product, onProductClick} = props;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleOpen = (event: React.MouseEvent) => {
        // This prevents from the outsider div onClick function to invoked
        event.stopPropagation();

        setModalIsOpen(true);
    }
    const handleClose = () => setModalIsOpen(false);

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
                    <div className={productMiniCardStyle.productName}>
                        <span>{product.name}</span>
                    </div>
                    <div className={productMiniCardStyle.productPrice}>
                        <span>₪{product.price}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductMiniCard;
