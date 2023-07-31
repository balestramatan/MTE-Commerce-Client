import StoreInformation from './StoreInformation.store';
import SectionsStore from './Sections.store';
import LoginStore from './Login.store'
import RegistrationStore from './Registration.store';

import {SECTIONS_STORE, STORE_INFORMATION_STORE, LOGIN_STORE, REGISTRATION_STORE} from "./consts"

const sectionsStore = new SectionsStore();
const storeInformationStore = new StoreInformation();
const loginStroe = new LoginStore();
const registrationStore = new RegistrationStore()

const rootStores = {
    [SECTIONS_STORE]: sectionsStore,
    [STORE_INFORMATION_STORE]: storeInformationStore,
    [LOGIN_STORE]: loginStroe,
    [REGISTRATION_STORE]: registrationStore
}

// Debugging purpose
if (process.env.NODE_ENV !== 'production') {
    (window as any)['stores'] = rootStores;
}

export default rootStores;
