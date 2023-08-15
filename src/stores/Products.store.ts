import {action, makeObservable, observable} from "mobx";
import ToastUtil from "../utils/ToastUtils";
import ProductsFetcher from "../fetchers/Products.fetcher";
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

    @action
    getProductsByFilters = async (params: any) => {
      try {
        this.setIsLoading(true);
        let { data } = await ProductsFetcher.getProductsByFilters(params);
        this.setProducts(data);
      } catch (err: any) {
        console.error(err?.message);
        ToastUtil.error("Some error occurred.");
      } finally {
        this.setIsLoading(false);
      }
    };
}

export default ProductsStore;
