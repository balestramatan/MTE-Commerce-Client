import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import collectionsStyle from './ProductsPage.module.scss';
import Filter from '../../components/filter/Filter';
import ProductMiniCard from '../../components/product/productMiniCard/ProductMiniCard';
import Dropdown from '../../components/elements/dropdown/Dropdown';
import { useMediaQuery } from 'react-responsive';
import rootStores from '../../stores';
import { SECTIONS_STORE, PRODUCTS_STORE } from '../../stores/consts';
import SectionsStore from '../../stores/Sections.store';
import ProductsStore from '../../stores/Products.store';
import SideFilters from '../../components/sideFilters/SideFilters';

const sectionStore = rootStores[SECTIONS_STORE] as SectionsStore;
const productsStore = rootStores[PRODUCTS_STORE] as ProductsStore;

const ProductsPage = observer(() => {
    const { selectedSection } = sectionStore;
    const { products, getProductsByFilters } = productsStore;
    const isBigScreen = useMediaQuery({ query: '(min-width: 992px)' });
    const isMobileScreen = useMediaQuery({ query: '(max-width: 992px)' });

    useEffect(() => {
        const fetchProducts = async () => await getProductsByFilters({ sectionId: selectedSection.sectionId });

        fetchProducts().then(() => console.log('Fetched Products...'));
    }, [selectedSection.sectionId, getProductsByFilters]);

    return (
        <>
            <div className={collectionsStyle.collectionTitleContainer}>
                <span>{selectedSection.sectionName}</span>
            </div>

            <div className={`row`}>
                <div className={`${collectionsStyle.headerColumnContainer} col-12 col-lg-6`}>
                    <span>{products.length} מוצרים</span>
                </div>
                <div className={`${collectionsStyle.headerColumnContainer} col-12 col-lg-6`}>
                    <Dropdown placeholder='מיון לפי' options={['מחיר: מהנמוך לגבוה', 'מחיר: מהגבוה לנמוך']} onClick={() => {}} />
                </div>
                {isMobileScreen && (
                    <div className={`${collectionsStyle.headerColumnContainer} col-12`}>
                        <SideFilters sectionId={selectedSection.sectionId} />
                    </div>
                )}
            </div>

            <div className={`${collectionsStyle.collectionContainer} row`}>
                {isBigScreen && (
                    <div className={`col-12 col-lg-2`}>
                        <Filter sectionId={selectedSection.sectionId} />
                    </div>
                )}
                <div className={`col-12 col-lg-10 row`}>
                    {products.length === 0 && (
                        <div className={collectionsStyle.productsNotFound}>
                            <span>לא נמצאו מוצרים</span>
                        </div>
                    )}
                    {products.length !== 0 &&
                        products.map((product, i) => {
                            return (
                                <div key={i} className={`col-12 col-sm-6 col-md-4 col-lg-3`}>
                                    <ProductMiniCard product={product} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
});

export default ProductsPage;
