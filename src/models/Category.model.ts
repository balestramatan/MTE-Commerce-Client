import {observable} from "mobx";
import SubCategory from "./SubCategory.model";

export default class Category {
    @observable
    categoryId!: string;

    @observable
    categoryName!: string;

    @observable
    subCategories!: SubCategory[];

    constructor(category?: Category) {
        if (category) {
            this.categoryId = category.categoryId;
            this.categoryName = category.categoryName;
            this.subCategories = category.subCategories;
        }
    }
}
