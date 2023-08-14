import {observable} from "mobx";

export default class ProductModel {
    @observable
    id: string = '';

    @observable
    name: string = '';

    @observable
    description?: string = '';

    @observable
    images: string[] = [];

    @observable
    inStock: boolean = true;

    @observable
    price: string = '';

    @observable
    specialPrice?: string = '';

    constructor(product?: ProductModel) {
        if (product) {
            this.id = product.id;
            this.name = product.name;
            this.description = product.description;
            this.inStock = product.inStock;
            this.price = product.price;
            this.specialPrice = product.specialPrice;
        }
    }
}
