import { action, makeObservable, observable } from "mobx";
import { makePersistable } from 'mobx-persist-store';
import Product from "../models/Product.model";

class CartStore {
  @observable
  products: Product[] = [];

  @observable
  productQuantities: Object = {};

  @observable
  isOpen: boolean = false;

  @observable
  isCartUpdated: boolean = false;

  constructor() {
    makeObservable(this);
    makePersistable(this, { name: 'CartStore', properties: ['products', 'productQuantities'], storage: window.localStorage });

  }

  @action
  addProduct = (newProduct: Product) => {
    const isProductAlreadyExists = this.products.some(
      (product) => product._id === newProduct._id
    );

    if (!isProductAlreadyExists) {
      this.products.push(newProduct);
      this.productQuantities[newProduct._id] = 1;
    } else {
      const currentQuantity = this.productQuantities[newProduct._id] || 0;
      this.productQuantities[newProduct._id] = currentQuantity + 1;
    }

    this.setCartIsOpen(true);
    this.setisCartUpdated(!this.isCartUpdated);
  };

  @action
  decreaseProductQuantity = (productId: string) => {
    const currentQuantity = this.productQuantities[productId] || 0;

    if (currentQuantity > 1) {
      this.productQuantities[productId] = currentQuantity - 1;
    } else {
      delete this.productQuantities[productId];
      this.products = this.products.filter((product) => product._id !== productId);
    }

    this.setisCartUpdated(!this.isCartUpdated);
  };

  @action
  getTotalPrice = (): number => {
    let totalPrice = 0;

    this.products.forEach((product) => {
      const productQuantity = this.productQuantities[product._id] || 0;
      const productPrice = parseFloat(product.price);
      totalPrice += productQuantity * productPrice;
    });

    return parseFloat(totalPrice.toFixed(2));
  };

  @action
  getProductQuantity = (productId: string) => {
    return this.productQuantities[productId] || 0;
  };

  @action
  setProducts = (products: Product[]) => (this.products = products);

  @action
  setCartIsOpen = (isOpen: boolean) => (this.isOpen = isOpen);

  @action
  setisCartUpdated = (isCartUpdated: boolean) =>
    (this.isCartUpdated = isCartUpdated);
}

export default CartStore;
