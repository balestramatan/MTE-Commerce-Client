import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SliderShow from "../../elements/sliderShow/SliderShow";
import layoutStyle from "./ProductInformation.module.scss";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { IProduct } from "../../../interfaces/interfaces";


interface Iprops {
    product: IProduct;
}


const ProductInformation = (props: Iprops) => {
  const {product} = props;
  return (
    <div className={layoutStyle.productInformationContainer}>
          <Grid container columns={12}>
            <Grid item xs={6}>
              <div className={layoutStyle.gridDetailsContainer}>
                <div>
                  <div className={layoutStyle.productTitleContainer}>
                    <p>{product.name}</p>
                  </div>
                  <div className={layoutStyle.productPriceContainer}>
                    {product.promotionPrice !== "" ? (
                      <div>
                        <span>₪{product.promotionPrice}</span>
                        <span className={layoutStyle.striketPrice}>
                          ₪{product.price}
                        </span>
                      </div>
                    ) : (
                      <span>₪{product.price}</span>
                    )}
                  </div>
                  <div className={layoutStyle.dividerContainer}>
                    <Divider
                      className={layoutStyle.customerDivider}
                      variant="middle"
                    />
                  </div>
                  <div className={layoutStyle.indicatorContainer}>
                    <Grid container columns={12}>
                      <Grid item xs={4}>
                        {product.stock ? (
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
                  <div className={layoutStyle.addToCartButtonContainer}>
                    <Button
                      className={layoutStyle.customButtonStyle}
                      size="small"
                      variant="outlined"
                      disabled={!product.stock}
                    >
                      הוסף לעגלה
                    </Button>
                  </div>
                  <div className={layoutStyle.productDescriptionContainer}>
                    <p>
                      גחלים איכותיים לנרגילה. גחלי יאקוזה מכילים עד 85% קליפות
                      קוקוס. 2 מידות לבחירה: 26X26 ו-13X26 מ"מ.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={layoutStyle.gridImagesContainer}>
                <SliderShow images={product.images} />
              </div>
            </Grid>
          </Grid>
        </div>
  );
};

export default ProductInformation;
