import StoreInformation from './StoreInformation.store';
import CategoriesStore from './Categories.store';

import {CATEGORIES_STORE, STORE_INFORMATION_STORE} from "./consts"

const categoriesStore = new CategoriesStore();
const storeInformationStore = new StoreInformation();

const rootStores = {
    [CATEGORIES_STORE]: categoriesStore,
    [STORE_INFORMATION_STORE]: storeInformationStore
}

// Debugging purpose
if (process.env.NODE_ENV !== 'production') {
    (window as any)['stores'] = rootStores;
}

export default rootStores;
