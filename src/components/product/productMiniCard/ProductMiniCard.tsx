import React, { useState } from 'react';
import productMiniCardStyle from './ProductMiniCard.module.scss';
import ProductModal from '../../../components/product/productModal/ProductModal';
import Product from '../../../models/Product.model';
import { useNavigate } from 'react-router-dom';
import { IVariants } from '../../../interfaces/interfaces';

interface IProps {
    product: Product;
}

const ProductMiniCard = (props: IProps) => {
    const { product } = props;

    const navigate = useNavigate();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleOpen = (event: React.MouseEvent) => {
        // This prevents from the outsider div onClick function to invoked
        event.stopPropagation();

        setModalIsOpen(true);
    };
    const handleClose = () => setModalIsOpen(false);

    const onProductClick = (product: Product) => {
        const simplifiedVariants: IVariants[] = product.variants.map((variant) => {
            return {
                type: variant.type,
                value: variant.value,
                inStock: variant.inStock,
                extraPrice: variant.extraPrice,
                // Omit any non-serializable properties from the variant
            };
        });

        const simplifiedImages: string[] = product.images.map((imageUrl) => imageUrl);

        const data: Product = {
            _id: product._id,
            name: product.name,
            price: product.price,
            images: simplifiedImages,
            description: product.description,
            inStock: product.inStock,
            variants: simplifiedVariants,
            promotionPrice: product.promotionPrice,
        };

        navigate(`/product-details/${product.name}`, { state: { product: data } });
    };

    const cardImageStyle = {
        '--background-image': `url(${product?.images?.[0]})`,
    } as any;

    return (
        <>
            <ProductModal handleClose={handleClose} isOpen={modalIsOpen} product={product} />
            <div className={`${productMiniCardStyle.productMiniCardContainer} row`} onClick={() => onProductClick(product)} style={cardImageStyle}>
                <div className={`${productMiniCardStyle.productMiniCardImage} row`}>
                    <div className={productMiniCardStyle.productMiniButtonContainer}>
                        <button onClick={handleOpen} className={productMiniCardStyle.productMiniButton}>
                            <span>תצוגה מהירה</span>
                        </button>
                    </div>
                </div>
                <div className={`${productMiniCardStyle.productMiniCardProductDetailsContainer} row`}>
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
