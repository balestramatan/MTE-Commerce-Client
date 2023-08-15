import {action, makeObservable, observable} from "mobx";
import Product from "../models/Product.model";

class ProductsStore {
    @observable
    products: Product[] = [];

    @observable
    offset: number = 0;

    @observable
    isLoading: boolean = false;

    constructor() {
        makeObservable(this);
    }

    @action
    setProducts = (products: Product[]) => this.products = products;

    @action
    setOffset = (offset: number) => this.offset = offset;

    @action
    setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);
}

export default ProductsStore;
