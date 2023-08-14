import React from "react";
import collectionsStyle from "./Collections.module.scss";
import Filter from "../../components/filter/Filter";
import ProductMiniCard from "../../components/product/productMiniCard/ProductMiniCard";
import Dropdown from "../../components/elements/dropdown/Dropdown";
import { observer } from "mobx-react";

import rootStores from "../../stores";
import { SECTIONS_STORE } from "../../stores/consts";
import SectionsStore from "../../stores/Sections.store";

const categoriesStore = rootStores[SECTIONS_STORE] as SectionsStore;

const products = [
  {
    name: "3גחל יאקוזה לנרגילה",
    id: "1",
    images: [
      "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
    ],
    stock: false,
    price: "39.99",
    promotionPrice: "",
  },
  {
    name: "3גחל יאקוזה לנרגילה",
    id: "1",
    images: [
      "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
    ],
    stock: false,
    price: "39.99",
    promotionPrice: "",
  },
  {
    name: "3גחל יאקוזה לנרגילה",
    id: "1",
    images: [
      "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
    ],
    stock: false,
    price: "39.99",
    promotionPrice: "",
  },
  {
    name: "3גחל יאקוזה לנרגילה",
    id: "1",
    images: [
      "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
    ],
    stock: false,
    price: "39.99",
    promotionPrice: "",
  },
  {
    name: "3גחל יאקוזה לנרגילה",
    id: "1",
    images: [
      "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
    ],
    stock: false,
    price: "39.99",
    promotionPrice: "",
  },
  {
    name: "3גחל יאקוזה לנרגילה",
    id: "1",
    images: [
      "https://d3m9l0v76dty0.cloudfront.net/system/photos/9442560/extra_large/d813c5a8e62a07af4f76add6959d46b0.jpg",
    ],
    stock: false,
    price: "39.99",
    promotionPrice: "",
  },
];
const Collections = observer(() => {

  const { selectedSection } = categoriesStore;

  return (
    <>
      <div className={collectionsStyle.CollectionTitleContainer}>
        <span>{selectedSection.sectionName}</span>
      </div>

      <div className={collectionsStyle.CollectionSortContainer}>
        <span>{products.length} מוצרים</span>
        <Dropdown
          placeholder="מיון לפי"
          options={[
            "מחיר: מהנמוך לגבוה",
            "מחיר: מהגבוה לנמוך",
            "תאריך: מהחדש לישן",
          ]}
          onClick={() => {}}
        />
      </div>

      <div className={collectionsStyle.CollectionContainer}>
        <div className={collectionsStyle.rightColumnContainer}>
          <Filter sectionId={selectedSection.sectionId} />
        </div>
        <div className={collectionsStyle.leftColumnContainer}>
          {products.map((product, i) => {
            return (
              <div
                key={i}
                className={collectionsStyle.collectionMiniCardContainer}
              >
                <ProductMiniCard onProductClick={() => {}} product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default Collections;
