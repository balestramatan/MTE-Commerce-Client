import {action, makeObservable, observable} from "mobx";
import {makePersistable} from 'mobx-persist-store';
import ToastUtil from "../utils/ToastUtils";
import ProductsFetcher from "../fetchers/Products.fetcher";
import Product from "../models/Product.model";

class ProductsStore {
    @observable
    products: Product[] = [];

    @observable
    hotProducts: Product[] = [];

    @observable
    onSaleProducts: Product[] = [];

    @observable
    offset: number = 0;

    @observable
    isLoading: boolean = false;

    constructor() {
        makeObservable(this);
        makePersistable(this, {
            name: 'ProductsStore',
            properties: ['products', 'hotProducts'],
            storage: window.localStorage
        }).then(() => console.log('makes persists'));
    }

    @action
    setProducts = (products: Product[]) => this.products = products;

    @action
    setHotProducts = (products: Product[]) => this.hotProducts = products;
    setOnSaleProducts = (products: Product[]) => this.onSaleProducts = products;

    @action
    setOffset = (offset: number) => this.offset = offset;

    @action
    setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);

    @action
    getProductsByFilters = async (params: any) => {
        try {
            this.setIsLoading(true);
            let {data} = await ProductsFetcher.getProductsByFilters(params);
            this.setProducts(data);
        } catch (err: any) {
            console.error(err?.message);
            ToastUtil.error("Some error occurred.");
        } finally {
            this.setIsLoading(false);
        }
    };

    @action
    getHotProducts = async () => {
        try {
            this.setIsLoading(true);
            let {data} = await ProductsFetcher.getHotProducts();
            this.setHotProducts(data);
        } catch (err: any) {
            console.error(err?.message);
            ToastUtil.error("Some error occurred.");
        } finally {
            this.setIsLoading(false);
        }
    };

    @action
    getProductsOnSale = async () => {
        try {
            this.setIsLoading(true);
            let {data} = await ProductsFetcher.getProductsOnSale();
            this.setOnSaleProducts(data);
        } catch (err: any) {
            console.error(err?.message);
            ToastUtil.error("Some error occurred.");
        } finally {
            this.setIsLoading(false);
        }
    };
}

export default ProductsStore;
