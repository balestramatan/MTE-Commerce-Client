import React, { useEffect } from "react";
import { observer } from "mobx-react";
import collectionsStyle from "./ProductsPage.module.scss";
import Filter from "../../components/filter/Filter";
import ProductMiniCard from "../../components/product/productMiniCard/ProductMiniCard";
import Dropdown from "../../components/elements/dropdown/Dropdown";
import rootStores from "../../stores";
import { SECTIONS_STORE, PRODUCTS_STORE } from "../../stores/consts";
import SectionsStore from "../../stores/Sections.store";
import ProductsStore from "../../stores/Products.store";

const sectionStore = rootStores[SECTIONS_STORE] as SectionsStore;
const productsStore = rootStores[PRODUCTS_STORE] as ProductsStore;

const ProductsPage = observer(() => {
  const { selectedSection } = sectionStore;
  const { products, getProductsByFilters } = productsStore;

  useEffect(() => {
    const fetchProducts = async () =>
      await getProductsByFilters({ sectionId: selectedSection.sectionId });
    fetchProducts().then(() => console.log("Fetched Products..."));
  }, [selectedSection.sectionId]);

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
          {products.length === 0 && (
            <div className={collectionsStyle.productsNotFound}>
              <span>לא נמצאו מוצרים</span>
            </div>
          )}
          {products.length !== 0 &&
            products.map((product, i) => {
              return (
                <div
                  key={i}
                  className={collectionsStyle.collectionMiniCardContainer}
                >
                  <ProductMiniCard
                    onProductClick={() => {}}
                    product={product}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
});

export default ProductsPage;
