import StoreInformation from './StoreInformation.store';
import SectionsStore from './Sections.store';

import {SECTIONS_STORE, STORE_INFORMATION_STORE} from "./consts"

const sectionsStore = new SectionsStore();
const storeInformationStore = new StoreInformation();

const rootStores = {
    [SECTIONS_STORE]: sectionsStore,
    [STORE_INFORMATION_STORE]: storeInformationStore
}

// Debugging purpose
if (process.env.NODE_ENV !== 'production') {
    (window as any)['stores'] = rootStores;
}

export default rootStores;
