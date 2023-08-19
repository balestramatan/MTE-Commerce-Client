import { action, makeObservable, observable } from "mobx";
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
  addProduct = (newProduct: Product) => {
    const isProductAlreadyExists = this.products.some(
      (product) => product.id === newProduct.id
    );

    if (!isProductAlreadyExists) {
      this.products.push(newProduct);
      this.setCartIsOpen(true)
    }
  };

  @action
  setProducts = (products: Product[]) => (this.products = products);

  @action
  setCartIsOpen = (isOpen: boolean) => (this.isOpen = isOpen);
}

export default CartStore;
