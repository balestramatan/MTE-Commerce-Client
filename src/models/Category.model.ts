import {observable} from "mobx";

export default class CategoryModel {
    @observable
    categoryId: string = '';

    @observable
    categoryName: string = '';

    @observable
    subCategories?: CategoryModel[];

    constructor(category?: CategoryModel) {
        if (category) {
            this.categoryId = category.categoryId;
            this.categoryName = category.categoryName;
            this.subCategories = category.subCategories;
        }
    }
}
