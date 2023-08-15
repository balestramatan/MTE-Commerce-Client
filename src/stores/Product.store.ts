import { action, makeObservable, observable } from "mobx";
import { IVariants } from "../interfaces/interfaces";

class ProductStore {
  @observable
  id: string = "";

  @observable
  name: string = "";

  @observable
  description?: string = "";

  @observable
  promotionPrice?: string = "";

  @observable
  images: string[] = [];

  @observable
  inStock: boolean = true;

  @observable
  price: string = "";

  @observable
  variants: IVariants[] = [];

  @observable
  isLoading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  setProductId = (id: string) => (this.id = id);

  @action
  setName = (name: string) => (this.name = name);

  @action
  setDescription = (description: string) => (this.description = description);

  @action
  setPromotionPrice = (promotionPrice: string) =>
    (this.promotionPrice = promotionPrice);

  @action
  setImages = (images: string[]) => (this.images = images);

  @action
  setVariants = (variants: IVariants[]) => (this.variants = variants);

  @action
  setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);
}

export default ProductStore;
