import CategoriesStore from './Categories.store';

const categoriesStore = new CategoriesStore();

const rootStores = {
    ["CATEGORIES_STORE"]: categoriesStore
}

// Debugging purpose
if (process.env.NODE_ENV !== 'production') {
    (window as any)['stores'] = rootStores;
}

export default rootStores;
