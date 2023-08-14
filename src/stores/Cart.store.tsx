import {action, makeObservable, observable} from "mobx";
import Product from "../models/Product.model";

class CartStore {
    @observable
    products: Product[] = [];

    @observable
    isOpen: boolean = false;

    constructor() {
        makeObservable(this);
    }

    @action
    setProducts = (products: Product[]) => this.products = products;

    @action
    setCartIsOpen = (isOpen: boolean) => this.isOpen = isOpen;
}

export default CartStore;
