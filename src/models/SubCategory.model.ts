import {observable} from "mobx";

export default class SubCategoryModel {
    @observable
    categoryId!: string;

    @observable
    categoryName!: string;

    @observable
    parentCategoryId!: string;

    constructor(subCategory?: SubCategoryModel) {
        if (subCategory) {
            this.categoryId = subCategory.categoryId;
            this.categoryName = subCategory.categoryName;
            this.parentCategoryId = subCategory.parentCategoryId;
        }
    }
}
