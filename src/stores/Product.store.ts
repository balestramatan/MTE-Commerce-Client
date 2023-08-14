import {action, makeObservable, observable} from "mobx";

class ProductStore {
    @observable
    productId: string = "";

    @observable
    name: string = "";

    @observable
    description: string = "";

    @observable
    inStock: boolean = true;

    @observable
    price?: string = undefined;

    @observable
    specialPrice?: string = undefined;

    @observable
    images: string[] = [];

    constructor() {
        makeObservable(this);
    }

    @action
    setProductId = (productId: string) => this.productId = productId;

    @action
    setName = (name: string) => this.name = name;

    @action
    setDescription = (des: string) => this.description = des;

    @action
    setPromotionPrice = (pp: string) => this.specialPrice = pp;

    @action
    setImages = (images: string[]) => this.images = images;
}

export default ProductStore;
