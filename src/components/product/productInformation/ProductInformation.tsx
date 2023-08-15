import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SliderShow from "../../elements/sliderShow/SliderShow";
import productInformationStyle from "./ProductInformation.module.scss";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Product from "../../../models/Product.model";


interface IProps {
    product: Product;
}


const ProductInformation = (props: IProps) => {
    const {product} = props;
    return (
        <div className={productInformationStyle.productInformationContainer}>
            <Grid container columns={12}>
                <Grid item xs={6}>
                    <div className={productInformationStyle.gridDetailsContainer}>
                        <div>
                            <div className={productInformationStyle.productTitleContainer}>
                                <p>{product.name}</p>
                            </div>
                            <div className={productInformationStyle.productPriceContainer}>
                                {product.promotionPrice !== "" ? (
                                    <div>
                                        <span>₪{product.promotionPrice}</span>
                                        <span className={productInformationStyle.strikePrice}>
                          ₪{product.price}
                        </span>
                                    </div>
                                ) : (
                                    <span>₪{product.price}</span>
                                )}
                            </div>
                            <div className={productInformationStyle.dividerContainer}>
                                <Divider
                                    className={productInformationStyle.customerDivider}
                                    variant="middle"
                                />
                            </div>
                            <div className={productInformationStyle.indicatorContainer}>
                                <Grid container columns={12}>
                                    <Grid item xs={4}>
                                        {product.inStock ? (
                                            <Chip
                                                label="זמין במלאי"
                                                color="success"
                                                variant="outlined"
                                            />
                                        ) : (
                                            <Chip
                                                label="אזל מהמלאי"
                                                color="warning"
                                                variant="outlined"
                                            />
                                        )}
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={productInformationStyle.addToCartButtonContainer}>
                                <Button
                                    className={productInformationStyle.customButtonStyle}
                                    size="small"
                                    variant="outlined"
                                    disabled={!product.inStock}
                                >
                                    הוסף לעגלה
                                </Button>
                            </div>
                            <div className={productInformationStyle.productDescriptionContainer}>
                                <p>
                                    {product?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={productInformationStyle.gridImagesContainer}>
                        <SliderShow images={product.images}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductInformation;
