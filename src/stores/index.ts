import StoreInformation from './StoreInformation.store';
import SectionsStore from './Sections.store';
import LoginStore from './Login.store'
import RegistrationStore from './Registration.store';
import ProductStore from "./Product.store";
import ProductsStore from "./Products.store";
import CartStore from "./Cart.store";

import {
    SECTIONS_STORE,
    STORE_INFORMATION_STORE,
    LOGIN_STORE,
    REGISTRATION_STORE,
    PRODUCT_STORE,
    PRODUCTS_STORE,
    CART_STORE
} from "./consts"

const sectionsStore = new SectionsStore();
const storeInformationStore = new StoreInformation();
const loginStore = new LoginStore();
const registrationStore = new RegistrationStore()
const productStore = new ProductStore()
const productsStore = new ProductsStore()
const cartStore = new CartStore()

const rootStores = {
    [SECTIONS_STORE]: sectionsStore,
    [STORE_INFORMATION_STORE]: storeInformationStore,
    [LOGIN_STORE]: loginStore,
    [REGISTRATION_STORE]: registrationStore,
    [PRODUCT_STORE]: productStore,
    [PRODUCTS_STORE]: productsStore,
    [CART_STORE]: cartStore
}

// Debugging purpose
if (process.env.NODE_ENV !== 'production') {
    (window as any)['stores'] = rootStores;
}

export default rootStores;
