import StoreInformation from './StoreInformation.store';
import SectionsStore from './Sections.store';

import {TOPICS_STORE, STORE_INFORMATION_STORE} from "./consts"

const topicsStore = new SectionsStore();
const storeInformationStore = new StoreInformation();

const rootStores = {
    [TOPICS_STORE]: topicsStore,
    [STORE_INFORMATION_STORE]: storeInformationStore
}

// Debugging purpose
if (process.env.NODE_ENV !== 'production') {
    (window as any)['stores'] = rootStores;
}

export default rootStores;
