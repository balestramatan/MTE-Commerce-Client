import {observable} from "mobx";
import SubCategory from "./SubCategory.model";

export default class CategoryModel {
    @observable
    categoryId: string = '';

    @observable
    categoryName: string = '';

    @observable
    subCategories?: SubCategory[];

    constructor(category?: CategoryModel) {
        if (category) {
            this.categoryId = category.categoryId;
            this.categoryName = category.categoryName;
            this.subCategories = category.subCategories;
        }
    }
}
