import {observable} from "mobx";
import { IVariants } from "../interfaces/interfaces";

export default class ProductModel {
    @observable
    _id: string = '';

    @observable
    name: string = '';

    @observable
    description: string = '';

    @observable
    promotionPrice: string = '';

    @observable
    images: string[] = [];

    @observable
    inStock: boolean = true;

    @observable
    price: string = '';

    @observable
    variants: IVariants[] = [];


    constructor(product?: ProductModel) {
        if (product) {
            this._id = product._id;
            this.name = product.name;
            this.description = product.description;
            this.inStock = product.inStock;
            this.price = product.price;
            this.promotionPrice = product.promotionPrice;
            this.variants = product.variants;
        }
    }
}
