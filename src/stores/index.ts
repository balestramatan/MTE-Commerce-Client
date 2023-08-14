import StoreInformation from "./StoreInformation.store";
import SectionsStore from "./Sections.store";
import LoginStore from "./Login.store";
import RegistrationStore from "./Registration.store";
import FiltersStore from "./Filters.store";

import {
  SECTIONS_STORE,
  STORE_INFORMATION_STORE,
  LOGIN_STORE,
  REGISTRATION_STORE,
  FILTERS_STORE,
} from "./consts";

const sectionsStore = new SectionsStore();
const storeInformationStore = new StoreInformation();
const loginStroe = new LoginStore();
const registrationStore = new RegistrationStore();
const filtersStore = new FiltersStore();

const rootStores = {
  [SECTIONS_STORE]: sectionsStore,
  [FILTERS_STORE]: filtersStore,
  [STORE_INFORMATION_STORE]: storeInformationStore,
  [LOGIN_STORE]: loginStroe,
  [REGISTRATION_STORE]: registrationStore,
};

// Debugging purpose
if (process.env.NODE_ENV !== "production") {
  (window as any)["stores"] = rootStores;
}

export default rootStores;
